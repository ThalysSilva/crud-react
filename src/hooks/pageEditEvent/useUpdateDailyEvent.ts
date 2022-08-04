import { useMutation, useQueryClient } from '@tanstack/react-query';
import { eventsServices } from '../../services/events';
import { PayloadDailyEventUpdate } from '../../services/events/types';
import useAxiosUtils from '../../utils/Axios/hooks/useAxiosUtils';
import { useToast } from '../useToast';

function handleMutate(payload: PayloadDailyEventUpdate) {
  return eventsServices().updateDailyEvent(payload);
}

export default function useUpdateDailyEvent(id: string) {
  const { handleAxiosError } = useAxiosUtils();
  const { dispatchToast } = useToast();
  const query = useQueryClient();
  return useMutation(handleMutate, {
    onSuccess: () => {
      query.invalidateQueries(['list-events']);
      query.invalidateQueries(['list-events', id]);
      dispatchToast({ title: 'Sucesso !!' });
    },
    onError: (err) => {
      handleAxiosError(err);
    }
  });
}
