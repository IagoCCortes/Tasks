import createDataContext from './createDataContext';
import {IAction} from 'interfaces/IAction';
import API from 'services/API';
import {ICommonData} from 'interfaces/ICommonData';

const commonDataReducer = (state: any, action: IAction) => {
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

const getFrequencies = (dispatch: Function) => async () => {
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

const getTypes = (dispatch: Function) => async () => {
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

export const {Provider, Context} = createDataContext<ICommonData>(
  commonDataReducer,
  {getFrequencies, getTypes},
  {frequencies: null, types: null, errorMessage: ''},
);
