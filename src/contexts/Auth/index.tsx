import { AxiosResponse } from 'axios';
import { useRouter } from 'next/router';
import React, { createContext, ReactNode, useEffect, useState } from 'react';
import useSignInAdm from '../../hooks/pageLogin/useSignInMutate';
import useCookies from '../../hooks/useCookies';
import { useToast } from '../../hooks/useToast';
import { PayloadLogin, PostSignInData } from '../../services/login/types';
import { handleAxiosError } from '../../utils/Axios/AxiosError';
import { AuthContextData, User } from './types';

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
  const { isLoading: SignInAdmIsLoading, mutateAsync: mutateLoginAdm } = useSignInAdm();

  const [cookieIsLoading, setCookieIsLoading] = useState(true);
  const { dispatchToast } = useToast();
  const [user, setUser] = useState<User>(null);
  const { getCookie, setCookie } = useCookies();
  const router = useRouter();

  const onError = (err: unknown) => {
    const { messageError } = handleAxiosError(err);
    dispatchToast({ title: 'Error', description: messageError });
    return;
  };

  useEffect(() => {
    async function loadUserFromCookies() {
      if (typeof document !== 'undefined') {
        const token = getCookie('token');

        if (token) {
          setUser({ token });
        }

        setCookieIsLoading(false);
      }
    }
    loadUserFromCookies();
  }, []);

  async function signInAdm(payload: PayloadLogin, onValidateLogin: () => void) {
    const onSuccess = (response: AxiosResponse<PostSignInData>) => {
      if (response?.status == 200) {
        const token = response.data.token as string;
        setUser({ token });
        setCookie('token', token);
        onValidateLogin();
      }
    };
    try {
      await mutateLoginAdm(payload, {
        onSuccess
      });
    } catch (err) {
      onError(err);
    }
  }

  function signOut() {
    setCookie('token', '');
    setUser(null);
    router.push('/');
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        signInAdm,
        signOut,
        SignInAdmIsLoading,
        cookieIsLoading,
        isAuthenticated: !!user
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
