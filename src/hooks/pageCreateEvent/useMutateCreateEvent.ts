import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import config from '../../config';
import { eventsServices } from '../../services/events';
import { PayloadDailyEvent } from '../../services/events/types';
import useAxiosUtils from '../../utils/Axios/hooks/useAxiosUtils';
import { useToast } from '../useToast';

function handleMutate(payload: PayloadDailyEvent) {
  return eventsServices().createDailyEvent(payload);
}

export default function useMutateCreateEvent() {
  const { events } = config.webRoutes;
  const { handleAxiosError } = useAxiosUtils();
  const { dispatchToast } = useToast();
  const { push } = useRouter();

  const query = useQueryClient();
  return useMutation(handleMutate, {
    onSuccess: () => {
      query.invalidateQueries(['list-events']);
      query.invalidateQueries(['list-events']);
      dispatchToast({ title: 'Sucesso !!' });
      push(events.base);
    },
    onError: (err) => {
      handleAxiosError(err);
    }
  });
}
