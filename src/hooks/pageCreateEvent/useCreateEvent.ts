import { FormEvent, useEffect, useState } from 'react';
import { PayloadDailyEvent } from '../../services/events/types';

import { normalizeCharacter, normalizeDateToString } from '../../utils/functions';
import useMutateCreateEvent from './useMutateCreateEvent';

export default function useCreateEvent() {
  const { mutate, isLoading } = useMutateCreateEvent();

  const [dateEvent, setDateEvent] = useState(new Date());
  const [normalizedDateEvent] = normalizeDateToString(dateEvent).split(' ');
  const [showCalendar, setShowCalendar] = useState(false);

  function handleOpenCalendar() {
    setShowCalendar(true);
  }
  function handleCloseCalendar() {
    setShowCalendar(false);
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const descriptionElement = document.getElementById('eventDescription') as HTMLInputElement;
    const minuteElement = document.getElementById('eventMinute') as HTMLInputElement;
    const titleElement = document.getElementById('eventTitle') as HTMLInputElement;
    const hourElement = document.getElementById('eventHour') as HTMLInputElement;
    const minute = normalizeCharacter(minuteElement.value);
    const hour = normalizeCharacter(hourElement.value);

    const titulo = titleElement.value;
    const descricao = descriptionElement.value;

    const reverseDate = normalizedDateEvent.replaceAll('/', '-').split('-').reverse().join('-');
    const data = reverseDate + ' ' + hour + ':' + minute + ':' + '00';

    const payload: PayloadDailyEvent = {
      data,titulo,descricao, cor: '#000'
    };

    
    mutate(payload);
  }
  useEffect(() => {
    if (!dateEvent) return;
    const hourElement = document.getElementById('eventHour') as HTMLInputElement;
    const minuteElement = document.getElementById('eventMinute') as HTMLInputElement;
    if (hourElement) hourElement.value = dateEvent.getHours.toString();
    if (minuteElement) minuteElement.value = dateEvent.getMinutes.toString();
  }, []);

  useEffect(() => {
    handleCloseCalendar();
  }, [dateEvent]);

  return {
    handleCloseCalendar,
    normalizedDateEvent,
    handleOpenCalendar,
    showCalendar,
    setDateEvent,
    dateEvent,
    isLoading,
    handleSubmit,
  };
}