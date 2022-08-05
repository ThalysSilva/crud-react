import { useQuery } from '@tanstack/react-query';
import { eventsServices } from '../services/events';

function eventDetailQuery(id: string) {
  if (!id) return;
  return eventsServices()
    .getDailyEventDetail(id)
    .then((res) => res.data);
}

export default function useQueryEventDetail(id: string) {
  const query = useQuery(['list-events', id], () => eventDetailQuery(id));

  return query;
}
