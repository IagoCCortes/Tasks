import createDataContext from './createDataContext';
import API from 'services/API';
import removeEmptyProperties from 'utils/removeEmptyProperties';

const taskReducer = (state, action) => {
  switch (action.type) {
    case 'set_loading':
      return {...state, loading: action.payload};
    default:
      return state;
  }
};

const create = (dispatch) => async (data) => {
  dispatch({
    type: 'set_loading',
    payload: true,
  });
  let response = false;
  try {
    await API.post('/task/', removeEmptyProperties(data));
    response = true;
  } catch (err) {
    // dispatch({
    //   type: 'add_error',
    //   payload: 'Something went wrong when creating task',
    // });
    console.log(err);
  }
  dispatch({
    type: 'set_loading',
    payload: false,
  });
  return response;
};

const getFiltered = (dispatch) => async (data) => {
  dispatch({
    type: 'set_loading',
    payload: true,
  });
  let response = [];
  try {
    response = await API.get('/task/filter');
  } catch (err) {
    // dispatch({
    //   type: 'add_error',
    //   payload: 'Something went wrong when getting your tasks',
    // });
    console.log(err);
  }
  dispatch({
    type: 'set_loading',
    payload: false,
  });
  return response;
};

export const {Provider, Context} = createDataContext(taskReducer, {create, getFiltered}, {loading: true});
