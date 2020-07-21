import React, {useReducer} from 'react';
import { IContextValues } from 'interfaces/common/commonInterfaces';

export default <T extends IContextValues>(reducer: any, actions: any, defaultValue: Object) => {
  const Context = React.createContext<Partial<T>>({});

  const Provider = ({children}: {children: JSX.Element}) => {
    const [state, dispatch]: [any, any] = useReducer(reducer, defaultValue);

    const boundActions: {[key: string]: Function} = {};
    for (let key in actions) {
      boundActions[key] = actions[key](dispatch);
    }

    return <Context.Provider value={{state, ...boundActions}}>{children}</Context.Provider>;
  };

  return {Context, Provider};
};
