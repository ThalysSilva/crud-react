import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import config from '../../../../config';
import useDeleteDailyEvent from '../../../../hooks/pageEvents/useDeleteDailyEvent';
import { DailyEvent } from '../types';

export default function useListEventsItems(evento?: DailyEvent) {
  const id = evento?.id.toString() as string;
  const { mutate: mutateDeleteDailyEvent } = useDeleteDailyEvent(id);
  const [color, setColor] = useState('#fff');

  const { events } = config.webRoutes;

  const router = useRouter();

  function handleEditItem() {
    router.push(events.base + '/' + evento?.id.toString());
  }

  function handleDeleteDailyEvent() {
    if (!evento) return;
    mutateDeleteDailyEvent(id);
  }
  useEffect(() => {
    if (!evento) return;
    setColor(evento.cor);
  }, [evento, evento?.cor]);

  return { color, handleEditItem, handleDeleteDailyEvent };
}
