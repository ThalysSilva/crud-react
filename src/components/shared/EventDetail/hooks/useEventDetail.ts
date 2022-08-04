import { useEffect, useState } from 'react';
import { normalizeDateToString } from '../../../../utils/functions';

export default function useEventDetail(dateEvent: Date) {
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

  return { handleOpenCalendar, handleCloseCalendar, showCalendar,normalizedDateEvent };
}
