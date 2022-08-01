import React, { createContext, ReactNode, useState } from 'react';
import { AuthContextData, User } from './types';

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>({} as User);

  function login() {
    // todo
  }

  return (
    <AuthContext.Provider value={{ user, setUser, login, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
}
