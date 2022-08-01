export type User = {
    token: string;
  name: string;
};

export type AuthContextData = {
  setUser: Dispatch<SetStateAction<User>>;
  isAuthenticated: boolean;
  cookieIsLoading: boolean;
  signIn: () => void;
  user: User;
};
