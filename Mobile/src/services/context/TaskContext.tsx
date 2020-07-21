import createDataContext from './createDataContext';
import {IAction} from 'interfaces/IAction';
import API from 'services/API';
import {ITask, ICreateTask} from 'interfaces/ITask';
import removeEmptyProperties from 'utils/removeEmptyProperties';

const taskReducer = (state: any, action: IAction) => {
  switch (action.type) {
    case 'add_error':
      return {...state, errorMessage: action.payload};
    case 'create':
      return {...state, errorMessage: ''};
    default:
      return state;
  }
};

const create = (dispatch: Function) => async (data: ICreateTask) => {
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

export const {Provider, Context} = createDataContext<ITask>(taskReducer, {create}, {errorMessage: ''});
