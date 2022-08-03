import { useRouter } from 'next/router';
import React from 'react';

import WithAuthentication from '../../../components/shared/WithAuthentication';
import { InputNumber } from '../../../components/shared/CustomInputs/InputNumber';
import useEditEvent from '../../../hooks/pageEditEvent/useEditEvent';
import LoadingSpinner from '../../../assets/icon/LoadingSpinner';
import { TextArea } from '../../../components/shared/textArea';
import { Input } from '../../../components/shared/Input';
import { When } from '../../../components/shared/When';
import { Modal } from '../../../components/Modal';
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';
import useCreateEvent from '../../../hooks/pageCreateEvent/useCreateEvent';

function PageEditEvent() {
  const router = useRouter();
  const { eventId } = router.query;
  const {
    handleCloseCalendar,
    normalizedDateEvent,
    handleOpenCalendar,
    setDateEvent,
    showCalendar,
    isLoading,
    dateEvent,
    evento
  } = useCreateEvent(eventId as string);

  return (
    <div className={'flex flex-col p-4 w-full h-screen items-center justify-center bg-gray-900'}>
      <When value={false}>
        <LoadingSpinner />
      </When>
      <When value={true}>
        <div className={`relative grid grid-cols-4 h-fit w-full flex-row items-start gap-6 mb-6`}>
          <div className={'flex flex-1 relative top-2 col-span-1 '}>{'Título:'}</div>
          <div className={'col-span-3'}>
            <Input required defaultValue={evento?.titulo} id={'eventTitle'} autoComplete={'off'} />
          </div>
        </div>

        <div className={'grid grid-cols-4 h-fit w-full flex-row items-center gap-6 mb-6'}>
          <div className={'col-span-1'}>{'Data:'}</div>
          <div className={'col-span-1'}>
            <button
              onClick={handleOpenCalendar}
              type="button"
              className=" flex rounded-xl w-[100px] bg-[#3b74f2] hover:bg-[#115bfa] duration-200 p-2"
            >
              {normalizedDateEvent}
            </button>
          </div>
        </div>
        <div className={'grid grid-cols-4 h-fit w-full flex-row items-center gap-6 mb-6'}>
          <div className={'col-span-1'}>{'Hora:'}</div>
          <div className={'col-span-1'}>
            <InputNumber min={0} max={24} maxLength={2} defaultValue={'00'} className={'w-[55px]'} id={'eventHour'} />
          </div>
          <div className={'col-span-1'}>{'Minuto:'}</div>
          <div className={'col-span-1'}>
            <InputNumber min={0} max={60} maxLength={2} defaultValue={'00'} className={'w-[55px]'} id={'eventMinute'} />
          </div>
        </div>
        <div className={'flex h-fit w-full flex-col items-center gap-6 mb-6 outline-none'}>
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
