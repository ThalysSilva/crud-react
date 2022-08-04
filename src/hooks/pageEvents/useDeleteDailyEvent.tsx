import { useMutation, useQueryClient } from '@tanstack/react-query';
import { eventsServices } from '../../services/events';
import useAxiosUtils from '../../utils/Axios/hooks/useAxiosUtils';
import { useToast } from '../useToast';

function handleMutate(id: string) {
  return eventsServices().DeleteDailyEvent(id);
}

export default function useDeleteDailyEvent(id: string) {
  const { handleAxiosError } = useAxiosUtils();
  const { dispatchToast } = useToast();
  const query = useQueryClient();
  return useMutation(handleMutate, {
    onSuccess: () => {
      query.invalidateQueries(['list-events']);
      query.invalidateQueries(['list-events', id]);
      dispatchToast({ title: 'Sucesso !!', description: 'Evento removido com sucesso.' });
    },
    onError: (err) => {
      handleAxiosError(err);
    }
  });
}
