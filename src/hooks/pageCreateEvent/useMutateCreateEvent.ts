import { useMutation, useQueryClient } from '@tanstack/react-query';
import { eventsServices } from '../../services/events';
import { PayloadDailyEvent } from '../../services/events/types';
import { handleAxiosError } from '../../utils/Axios/AxiosError';
import { useToast } from '../useToast';

function handleMutate(payload: PayloadDailyEvent) {
  return eventsServices().createDailyEvent(payload);
}

export default function useMutateCreateEvent() {
  const { dispatchToast } = useToast();
  const query = useQueryClient();
  return useMutation(handleMutate, {
    onSuccess: () => {
      query.invalidateQueries(['list-events']);
      query.invalidateQueries(['list-events']);
      dispatchToast({ title: 'Sucesso !!' });
    },
    onError: (err) => {
      const { messageError } = handleAxiosError(err);
      dispatchToast({ title: 'Error !!', description: messageError });
    }
  });
}
