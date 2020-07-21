import {IContextValues, Modify} from './common/commonInterfaces';

export type ICommonData = Modify<
  IContextValues,
  {
    state: ICommonDataState;
  }
> & {
  getFrequencies: Function;
  getTypes: Function;
};

export interface ICommonDataState {
  frequencies: IDomainData;
  types: IDomainData;
  errorMessage: string;
}

interface IDomainData {
  id: string;
  name: string;
}
