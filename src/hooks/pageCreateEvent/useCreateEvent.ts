import { FormEvent, useState } from 'react';
import { PayloadDailyEvent } from '../../services/events/types';

import { normalizeCharacter, normalizeDateToString } from '../../utils/functions';
import useMutateCreateEvent from './useMutateCreateEvent';

export default function useCreateEvent() {
  const { mutate, isLoading } = useMutateCreateEvent();

  const [dateEvent, setDateEvent] = useState(new Date());
  const [normalizedDateEvent] = normalizeDateToString(dateEvent).split(' ');

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const descriptionElement = document.getElementById('eventDescription') as HTMLInputElement;
    const minuteElement = document.getElementById('eventMinute') as HTMLInputElement;
    const titleElement = document.getElementById('eventTitle') as HTMLInputElement;
    const colorElement = document.getElementById('eventColor') as HTMLInputElement;
    const hourElement = document.getElementById('eventHour') as HTMLInputElement;
    const minute = normalizeCharacter(minuteElement.value);
    const hour = normalizeCharacter(hourElement.value);

    const titulo = titleElement.value;
    const descricao = descriptionElement.value;
    const cor = colorElement.value;

    const reverseDate = normalizedDateEvent.replaceAll('/', '-').split('-').reverse().join('-');
    const data = reverseDate + ' ' + hour + ':' + minute + ':' + '00';

    const payload: PayloadDailyEvent = {
      descricao,
      titulo,
      data,
      cor,
    };
    mutate(payload);
  }

  return {
    setDateEvent,
    dateEvent,
    isLoading,
    handleSubmit
  };
}
