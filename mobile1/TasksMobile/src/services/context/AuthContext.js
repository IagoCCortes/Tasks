import AsyncStorage from '@react-native-community/async-storage';
import createDataContext from './createDataContext';
import API from 'services/API';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'signin':
      return {token: action.payload};
    case 'signout':
      return {token: null};
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

const signup = (dispatch) => async ({name, email, password}) => {
  try {
    const response = await API.post('auth/signup', {name, email, password});
    await AsyncStorage.setItem('token', response.token);
    return () => dispatch({type: 'signin', payload: response.token});
  } catch (err) {
    // addMessage('Something went wrong with sign up', 'alert');
  }
};

const signin = (dispatch) => async ({email, password}) => {
  try {
    const response = await API.post('/auth/signin', {email, password});
    await AsyncStorage.setItem('token', response.token);
    return () => dispatch({type: 'signin', payload: response.token});
  } catch (err) {
    console.log(err);
    // addMessage('Something went wrong with sign in', 'alert');
  }
};

const signout = (dispatch) => async () => {
  await AsyncStorage.removeItem('token');
  dispatch({type: 'signout'});
};

export const {Provider, Context} = createDataContext(
  authReducer,
  {signin, signout, signup, tryLocalSignin},
  {token: null},
);
