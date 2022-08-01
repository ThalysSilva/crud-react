export type User = {
    token: string;
  name: string;
};

export type AuthContextData = {
  setUser: Dispatch<SetStateAction<User>>;
  isAuthenticated: boolean;
  cookieIsLoading: boolean;
  login: () => void;
  user: User;
};
