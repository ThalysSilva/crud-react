import { useRouter } from 'next/router';
import React from 'react';

import WithAuthentication from '../../../components/shared/WithAuthentication';
import { InputNumber } from '../../../components/shared/CustomInputs/InputNumber';
import useCreateEvent from '../../../hooks/pageCreateEvent/useCreateEvent';
import { TextArea } from '../../../components/shared/textArea';
import { Button } from '../../../components/shared/Button';
import { Input } from '../../../components/shared/Input';
import { Text4 } from '../../../components/shared/Texts';
import { Modal } from '../../../components/Modal';
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';

function PageEditEvent() {
  const {
    handleCloseCalendar,
    normalizedDateEvent,
    handleOpenCalendar,
    setDateEvent,
    showCalendar,
    handleSubmit,
    isLoading,
    dateEvent,
  } = useCreateEvent();

  return (
    <div className={'flex flex-col w-full h-screen sm:w-[470px]  items-center justify-center '}>
      <form
        className={
          'flex flex-col items-center justify-center w-full h-screen sm:h-fit bg-gray-900 p-8 sm:rounded-xl'
        }
        onSubmit={handleSubmit}
      >
        <div className={`relative grid grid-cols-4 h-fit w-full flex-row items-start gap-6 mb-6`}>
          <Text4 className={'flex flex-1 relative top-2 col-span-1 '}>{'Título:'}</Text4>
          <div className={'col-span-3'}>
            <Input required id={'eventTitle'} autoComplete={'off'} />
          </div>
        </div>

        <div className={'grid grid-cols-4 h-fit w-full flex-row items-center gap-6 mb-6'}>
          <Text4 className={'col-span-1'}>{'Data:'}</Text4>
          <div className={'col-span-1'}>
            <button
              onClick={handleOpenCalendar}
              type="button"
              className=" flex rounded-xl w-[120px] justify-center items-center bg-[#3b74f2] hover:bg-[#115bfa] duration-200 p-2"
            >
              {normalizedDateEvent}
            </button>
          </div>
        </div>
        <div className={'grid grid-cols-4 h-fit w-full flex-row items-center gap-6 mb-6'}>
          <Text4 className={'col-span-1'}>{'Hora:'}</Text4>
          <div className={'col-span-1'}>
            <InputNumber min={0} max={24} maxLength={2} defaultValue={'00'} className={'w-[55px]'} id={'eventHour'} />
          </div>
          <Text4 className={'col-span-1'}>{'Minuto:'}</Text4>
          <div className={'col-span-1'}>
            <InputNumber min={0} max={60} maxLength={2}  defaultValue={'00'} className={'w-[55px]'} id={'eventMinute'} />
          </div>
        </div>
        <div className={'flex h-fit w-full flex-col items-center gap-6 mb-20 outline-none'}>
          <Text4>{'Descrição'}</Text4>
          <div className={'w-full '}>
            <TextArea
              className={' h-[80px] w-full'}
              id={'eventDescription'}
            />
          </div>
        </div>
        <div className="flex w-full h-[60px]">
          <Button isLoading={isLoading}>{'Enviar'}</Button>
        </div>
      </form>
      <Modal closeModal={handleCloseCalendar} show={showCalendar} closeOnBackDrop>
        <div className="rounded-xl">
          <Calendar value={dateEvent} onChange={setDateEvent} />
        </div>
      </Modal>
    </div>
  );
}

export default WithAuthentication(PageEditEvent);
