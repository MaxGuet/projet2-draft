import { createContext, useState, useContext } from 'react';

const CurrentUserContext = createContext();

export const useCurrentUser = () => useContext(CurrentUserContext);

export function CurrentUserProvider({ children }) {
  const [avatarUrl, setAvatarUrl] = useState('');
  return (
    <CurrentUserContext.Provider value={{ avatarUrl, setAvatarUrl }}>
      {children}
    </CurrentUserContext.Provider>
  );
}
