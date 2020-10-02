import createDataContext from './createDataContext';
import API from 'services/API';

const commonDataReducer = (state, action) => {
  switch (action.type) {
    case 'add_error':
      return {...state, errorMessage: action.payload};
    case 'getFrequencies':
      return {...state, frequencies: action.payload};
    case 'getTypes':
      return {...state, types: action.payload};
    default:
      return state;
  }
};

const getFrequencies = (dispatch) => async () => {
  try {
    const response = await API.get('frequency');
    dispatch({type: 'getFrequencies', payload: response.data});
  } catch (err) {
    dispatch({
      type: 'add_error',
      payload: 'Something went wrong when fetching frequencies',
    });
  }
};

const getTypes = (dispatch) => async () => {
  try {
    const response = await API.get('type');
    dispatch({type: 'getTypes', payload: response.data});
  } catch (err) {
    dispatch({
      type: 'add_error',
      payload: 'Something went wrong when fetching types',
    });
  }
};

export const {Provider, Context} = createDataContext(
  commonDataReducer,
  {getFrequencies, getTypes},
  {frequencies: null, types: null, errorMessage: ''},
);
