import { useRouter } from 'next/router';
import config from '../../config';
import { useAuthContext } from '../useAuthContext';

export default function useEvents() {
  const router = useRouter();
  const { signOut } = useAuthContext();
  const { events } = config.webRoutes;

  function handleCreateEventClick() {
    router.push(events.create);
  }

  return {
    handleCreateEventClick,
    signOut
  };
}
