import { useAuthContext } from '../useAuthContext';

export default function useEvents() {
  const { signOut } = useAuthContext();

  return {
    signOut
  };
}
