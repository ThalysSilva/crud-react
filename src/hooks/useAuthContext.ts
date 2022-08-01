import { useContext } from 'react';
import { AuthContext } from '../contexts/Auth';

export const useAuthContext = () => useContext(AuthContext);
