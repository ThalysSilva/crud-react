import { useEffect, useState } from 'react';

import { normalizeDateToString } from '../../utils/functions';
import useQueryEventDetail from '../useQueryEventDetail';

export default function useCreateEvent(id: string) {
  const { data: evento, isFetching } = useQueryEventDetail(id);

  const [dateEvent, setDateEvent] = useState(new Date());
  const [normalizedDateEvent] = normalizeDateToString(dateEvent).split(' ');
  const [showCalendar, setShowCalendar] = useState(false);

  function handleOpenCalendar() {
    setShowCalendar(true);
  }
  function handleCloseCalendar() {
    setShowCalendar(false);
  }
  
  useEffect(() => {
    handleCloseCalendar();
  }, [dateEvent]);
  
  return {
    isLoading: isFetching,
    handleCloseCalendar,
    normalizedDateEvent,
    handleOpenCalendar,
    showCalendar,
    setDateEvent,
    dateEvent,
    evento
  };
}
