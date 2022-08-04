import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { normalizeDateToString } from '../../../../utils/functions';

export default function useEventDetail(dateEvent: Date) {
  const [normalizedDateEvent] = normalizeDateToString(dateEvent).split(' ');
  const [showCalendar, setShowCalendar] = useState(false);
  const router = useRouter();

  function handleOpenCalendar() {
    setShowCalendar(true);
  }

  function handleCloseCalendar() {
    setShowCalendar(false);
  }

  function handleCancel() {
    router.back();
  }

  useEffect(() => {
    handleCloseCalendar();
  }, [dateEvent]);

  return {
    normalizedDateEvent,
    handleCloseCalendar,
    handleOpenCalendar,
    showCalendar,
    handleCancel,
  };
}
