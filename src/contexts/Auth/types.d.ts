export type User = {
    name: string;
    token: string;
}


export type AuthContextData = { user: User, setUser: Dispatch<SetStateAction<User>> , login: ()=> void, isAuthenticated: boolean }