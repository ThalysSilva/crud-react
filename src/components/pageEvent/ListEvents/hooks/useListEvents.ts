import useQueryListEvents from '../../../../hooks/pageEvents/useQueryListEvents';
import { DailyEvent } from '../../ListEventsItem/types';

export default function useListEvents() {
  const { data, isFetching } = useQueryListEvents();

  const listEvents = data as DailyEvent[];

  return { listEvents, isLoading: isFetching };
}
