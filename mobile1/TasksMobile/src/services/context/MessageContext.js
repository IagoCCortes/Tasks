import createDataContext from './createDataContext';

const messageReducer = (state, action) => {
  switch (action.type) {
    case 'add_message':
      return {...state, ...action.payload};
    default:
      return state;
  }
};

const addMessage = (dispatch) => async (message = 'Success!!', type = 'success', duration = 3000, buttonText = 'Ok') =>
  dispatch({type: 'add_message', payload: {message, type, duration, buttonText}});

export const {Provider, Context} = createDataContext(
  messageReducer,
  {addMessage},
  {message: '', type: '', duration: 0, buttonText: ''},
);
