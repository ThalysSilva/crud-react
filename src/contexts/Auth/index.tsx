import React, { createContext, ReactNode, useEffect, useState } from 'react';
import useCookies from '../../hooks/useCookies';
import { AuthContextData, User } from './types';

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
  const [cookieIsLoading, setCookieIsLoading] = useState(true);
  const [user, setUser] = useState<User>({} as User);
  const { getCookie } = useCookies();

  useEffect(() => {
    async function loadUserFromCookies() {
      if (typeof document !== 'undefined') {
        const tokenNavigate = getCookie('tokenNavigate');
        if (tokenNavigate) {
          setUser({ name: 'testUser', token: '1234' });
        }
        setCookieIsLoading(false);
      }
    }
    loadUserFromCookies();
  }, []);

  function signIn() {
    // todo
  }

  return (
    <AuthContext.Provider value={{ user, setUser, signIn, cookieIsLoading, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
}
