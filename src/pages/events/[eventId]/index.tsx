import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import LoadingSpinner from '../../../assets/icon/LoadingSpinner';
import { Input } from '../../../components/shared/Input';
import { When } from '../../../components/shared/When';
import WithAuthentication from '../../../components/shared/WithAuthentication';
import Calendar from 'react-calendar';
import { normalizeDateToString } from '../../../utils/functions';
import { Modal } from '../../../components/Modal';
import 'react-calendar/dist/Calendar.css';
import { TextArea } from '../../../components/shared/textArea';
import { InputNumber } from '../../../components/shared/CustomInputs/InputNumber';
import useEditEvent from '../../../hooks/pageEditEvent/useEditEvent';

function PageEditEvent() {
  const router = useRouter();
  const { eventId } = router.query;
  const { evento, isLoading } = useEditEvent(eventId as string);
  const [dateEvent, setDateEvent] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false);
  const [normalizedDateEvent, normalizedDateEventHour] =
    normalizeDateToString(dateEvent).split(' ');
  const [normalizedHour, normalizedMinute] = normalizedDateEventHour.split(':');

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
        parseInt(month) + 1,
        parseInt(day),
        parseInt(hour),
        parseInt(minute),
        parseInt(second)
      )
    );
    hourElement.value = hour;
    minuteElement.value = minute;
  }, [evento?.data, isLoading]);

  return (
    <div className={'flex flex-col p-4 w-full h-screen items-center justify-center bg-gray-700'}>
      <When value={isLoading}>
        <LoadingSpinner />
      </When>
      <When value={!isLoading}>
        <div className={'grid grid-cols-3 h-fit w-full flex-row items-center gap-6 mb-6'}>
          <div className={'col-span-1'}>{'Título:'}</div>
          <div className={'col-span-2'}>
            <Input defaultValue={evento?.titulo} id={'eventTitle'} />
          </div>
        </div>

        <div className={'grid grid-cols-3 h-fit w-full flex-row items-center gap-6 mb-6'}>
          <div className={'col-span-1'}>{'Data:'}</div>
          <div className={'col-span-2'}>
            <button
              onClick={handleOpenCalendar}
              type="button"
              className=" flex rounded-xl w-[100px] bg-[#3b74f2] hover:bg-[#115bfa] duration-200 p-2"
            >
              {normalizedDateEvent}
            </button>
          </div>
        </div>
        <div className={'grid grid-cols-6 h-fit w-full flex-row items-center gap-6 mb-6'}>
          <div className={'col-span-2'}>{'Hora:'}</div>
          <div className={'col-span-1'}>
            <InputNumber
              min={'0'}
              max={'24'}
              maxLength={2}
              className={'w-[55px]'}
              id={'eventHour'}
            />
          </div>
          <div className={'col-span-2'}>{'Minuto:'}</div>
          <div className={'col-span-1'}>
            <InputNumber
              min={'0'}
              max={'60'}
              maxLength={2}
              className={'w-[55px]'}
              id={'eventMinute'}
            />
          </div>
        </div>
        <div className={'flex h-fit w-full max-w-lg flex-col items-center gap-6 mb-6 outline-none'}>
          <div>{'Descrição'}</div>
          <div className={'w-full '}>
            <TextArea
              className={' h-[80px] w-full'}
              id={'eventDescription'}
              defaultValue={evento?.descricao}
            />
          </div>
        </div>
        <Modal closeModal={handleCloseCalendar} show={showCalendar} closeOnBackDrop>
          <div className="rounded-xl">
            <Calendar value={dateEvent} onChange={setDateEvent} />
          </div>
        </Modal>
      </When>
    </div>
  );
}

export default WithAuthentication(PageEditEvent);
