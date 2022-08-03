import { FormEvent, useEffect, useState } from 'react';
import { PayloadDailyEventUpdate } from '../../services/events/types';

import { normalizeCharacter, normalizeDateToString } from '../../utils/functions';
import useQueryEventDetail from '../useQueryEventDetail';
import useUpdateEditEvent from './useUpdateEditEvent';

export default function useEditEvent(id: string) {
  const { data: evento, isFetching: isLoadingQuery } = useQueryEventDetail(id);
  const { mutate, isLoading: isLoadingMutate } = useUpdateEditEvent(id);

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

  useEffect(() => {
    if (!evento) return;
    const hourElement = document.getElementById('eventHour') as HTMLInputElement;
    const minuteElement = document.getElementById('eventMinute') as HTMLInputElement;
    const [dateString, timeString] = evento.data.split(' ');
    const [hour, minute, second] = timeString.split(':');
    const [year, month, day] = dateString.split('-');

    setDateEvent(
      new Date(
        parseInt(year),
        parseInt(month) - 1,
        parseInt(day),
        parseInt(hour),
        parseInt(minute),
        parseInt(second)
      )
    );
    if (hourElement && hour) hourElement.value = hour;
    if (minuteElement && minute) minuteElement.value = minute;
  }, [isLoadingQuery]);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const descriptionElement = document.getElementById('eventDescription') as HTMLInputElement;
    const minuteElement = document.getElementById('eventMinute') as HTMLInputElement;
    const titleElement = document.getElementById('eventTitle') as HTMLInputElement;
    const hourElement = document.getElementById('eventHour') as HTMLInputElement;

    const minute = normalizeCharacter(minuteElement.value);
    const hour = normalizeCharacter(hourElement.value);
    const descricao =
      descriptionElement.value == evento?.descricao ? undefined : descriptionElement.value;
    const titulo = titleElement.value == evento?.titulo ? undefined : titleElement.value;
    const reverseDate = normalizedDateEvent.replaceAll('/', '-').split('-').reverse().join('-');
    const mountedDate = reverseDate + ' ' + hour + ':' + minute + ':' + '00';
    const data = evento?.data == '0000-00-00 00:00:00' ? mountedDate : 
                 mountedDate == evento?.data  ? undefined : mountedDate;

    const sendPayload: PayloadDailyEventUpdate = {
      descricao,
      titulo,
      data,
      id
    };

    mutate(sendPayload);
  }
  return {
    handleCloseCalendar,
    normalizedDateEvent,
    handleOpenCalendar,
    isLoadingMutate,
    isLoadingQuery,
    showCalendar,
    setDateEvent,
    handleSubmit,
    dateEvent,
    evento
  };
}
