import React from 'react';

type ContextValue = {
  title: string;
};

export const HeaderContext = React.createContext<ContextValue>({
  title: 'Home',
});

export const useHeaderContext = () => React.useContext(HeaderContext);
