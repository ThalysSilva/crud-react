export type User = {
  token: string;
} | null;

export type AuthContextData = {
  isAuthenticated: boolean;
  cookieIsLoading: boolean;
  SignInAdmIsLoading: boolean;
  signInAdm: (payload: PayloadLogin, onValidateLogin: () => void) => void;
  signOut: ()=> void;
  user: User;
};
