import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import config from '../../../../config';
import { DailyEvent } from '../types';

export default function useListEventsItems(evento?: DailyEvent) {
  const [color, setColor] = useState('#fff');

  const { events } = config.webRoutes;

  const router = useRouter();

  function handleEditItem() {
    router.push(events.base + '/' + evento?.id.toString());
  }
  useEffect(() => {
    if (!evento) return;
    setColor(evento.cor);
  }, [evento, evento?.cor]);

  return { color, handleEditItem };
}
