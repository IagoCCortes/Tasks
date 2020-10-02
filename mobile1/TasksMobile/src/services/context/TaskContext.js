import createDataContext from './createDataContext';
import API from 'services/API';
import removeEmptyProperties from 'utils/removeEmptyProperties';

const taskReducer = (state, action) => {
  switch (action.type) {
    case 'add_error':
      return {...state, errorMessage: action.payload};
    case 'create':
      return {...state, errorMessage: ''};
    case 'get_filtered':
      return {...state, errorMessage: '', tasks: action.payload};
    default:
      return state;
  }
};

const create = (dispatch) => async (data) => {
  try {
    await API.post('/task/', removeEmptyProperties(data));
    dispatch({type: 'create'});
  } catch (err) {
    dispatch({
      type: 'add_error',
      payload: 'Something went wrong when creating task',
    });
  }
};

const getFiltered = (dispatch) => async (data) => {
  try {
    const response = await API.get('/task/filter');
    dispatch({type: 'get_filtered', payload: response.data});
  } catch (err) {
    dispatch({
      type: 'add_error',
      payload: 'Something went wrong when getting your tasks',
    });
  }
};

export const {Provider, Context} = createDataContext(
  taskReducer,
  {create, getFiltered},
  {errorMessage: '', tasks: undefined},
);
