import {IContextValues, Modify} from './common/commonInterfaces';

export type IAuth = Modify<
  IContextValues,
  {
    state: IAuthState;
  }
> & {
  signin: Function;
  signout: Function;
  signup: Function;
  clearErrorMessage: Function;
  tryLocalSignin: Function;
};

export interface IAuthState {
  token: string;
  errorMessage: string;
}

export interface ISignData {
  name: string;
  email: string;
  password: string;
}
