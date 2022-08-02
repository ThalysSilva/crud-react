import { useQuery } from '@tanstack/react-query';
import { eventsServices } from '../../services/events';

function listEventsQuery() {
  return eventsServices()
    .getListEvents()
    .then((res) => res.data);
}

export default function useQueryListEvents() {
  const query = useQuery(['list-events'], listEventsQuery);

  return query;
}
