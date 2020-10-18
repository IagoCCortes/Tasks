import AsyncStorage from '@react-native-community/async-storage';
import createDataContext from './createDataContext';
import API from 'services/API';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'add_error':
      return {...state, errorMessage: action.payload, animating: true};
    case 'signin':
      return {errorMessage: '', token: action.payload, animating: true};
    case 'clear_error_message':
      return {...state, errorMessage: ''};
    case 'clear_animation':
      return {...state, animating: false};
    case 'signout':
      return {token: null, errorMessage: ''};
    default:
      return state;
  }
};

const tryLocalSignin = (dispatch) => async () => {
  const token = await AsyncStorage.getItem('token');
  if (token) {
    dispatch({type: 'signin', payload: token});
  } else {
    // navigate('Signup');
  }
};

const clearAnimation = (dispatch) => () => {
  dispatch({type: 'clear_animation'});
};

const clearErrorMessage = (dispatch) => () => {
  dispatch({type: 'clear_error_message'});
};

const signup = (dispatch) => async ({name, email, password}) => {
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

const signin = (dispatch) => async ({email, password}) => {
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

const signout = (dispatch) => async () => {
  await AsyncStorage.removeItem('token');
  dispatch({type: 'signout'});
};

export const {Provider, Context} = createDataContext(
  authReducer,
  {signin, signout, signup, clearAnimation, clearErrorMessage, tryLocalSignin},
  {token: null, errorMessage: '', animating: false},
);
