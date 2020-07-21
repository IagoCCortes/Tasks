export type Modify<T, R> = Omit<T, keyof R> & R;

export interface IContextValues {
  [key: string]: Function;
  state: any;
}