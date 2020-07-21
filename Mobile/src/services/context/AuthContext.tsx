import AsyncStorage from '@react-native-community/async-storage';
import createDataContext from './createDataContext';
import {IAction} from 'interfaces/IAction';
import API from 'services/API';
import { ISignData, IAuth } from 'interfaces/IAuth';

const authReducer = (state: any, action: IAction) => {
  switch (action.type) {
    case 'add_error':
      return {...state, errorMessage: action.payload};
    case 'signin':
      return {errorMessage: '', token: action.payload};
    case 'clear_error_message':
      return {...state, errorMessage: ''};
    case 'signout':
      return {token: null, errorMessage: ''};
    default:
      return state;
  }
};

const tryLocalSignin = (dispatch: Function) => async () => {
  const token = await AsyncStorage.getItem('token');
  if (token) {
    dispatch({type: 'signin', payload: token});
  } else {
    // navigate('Signup');
  }
};

const clearErrorMessage = (dispatch: Function) => () => {
  dispatch({type: 'clear_error_message'});
};

const signup = (dispatch: Function) => async ({name, email, password}: ISignData) => {
  try {
    const response = await API.post('auth/signup', {name, email, password});
    await AsyncStorage.setItem('token', response.data.token);
    dispatch({type: 'signin', payload: response.data.token});
  } catch (err) {
    dispatch({
      type: 'add_error',
      payload: 'Something went wrong with sign up',
    });
  }
};

const signin = (dispatch: Function) => async ({email, password}: ISignData) => {
  try {
    const response = await API.post('/auth/signin', {email, password});
    await AsyncStorage.setItem('token', response.data.token);
    dispatch({type: 'signin', payload: response.data.token});
  } catch (err) {
    dispatch({
      type: 'add_error',
      payload: 'Something went wrong with sign in',
    });
  }
};

const signout = (dispatch: Function) => async () => {
  await AsyncStorage.removeItem('token');
  dispatch({type: 'signout'});
};

export const {Provider, Context} = createDataContext<IAuth>(
  authReducer,
  {signin, signout, signup, clearErrorMessage, tryLocalSignin},
  {token: null, errorMessage: ''},
);
