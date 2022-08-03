import { useMutation, useQueryClient } from '@tanstack/react-query';
import { eventsServices } from '../../services/events';
import { PayloadDailyEventUpdate } from '../../services/events/types';
import { handleAxiosError } from '../../utils/Axios/AxiosError';
import { useToast } from '../useToast';

function handleMutate(payload: PayloadDailyEventUpdate) {
  return eventsServices().updateDetailedEvent(payload);
}

export default function useUpdateEditEvent(id: string) {
  const { dispatchToast } = useToast();
  const query = useQueryClient();
  return useMutation(handleMutate, {
    onSuccess: () => {
      query.invalidateQueries(['list-events']);
      query.invalidateQueries(['list-events', id]);
      dispatchToast({ title: 'Sucesso !!' });
    },
    onError: (err) => {
      const { messageError } = handleAxiosError(err);
      dispatchToast({ title: 'Error !!', description: messageError });
    }
  });
}
