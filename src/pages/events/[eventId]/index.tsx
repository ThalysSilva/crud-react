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
import { Button } from '../../../components/shared/Button';
import { H4 } from '../../../components/shared/Texts';

function PageEditEvent() {
  const router = useRouter();
  const { eventId } = router.query;
  const {
    handleCloseCalendar,
    normalizedDateEvent,
    handleOpenCalendar,
    isLoadingMutate,
    isLoadingQuery,
    setDateEvent,
    showCalendar,
    handleSubmit,
    dateEvent,
    evento
  } = useEditEvent(eventId as string);

  return (
    <div className={'flex flex-col w-full h-screen sm:w-[470px]  items-center justify-center '}>
      <When value={isLoadingQuery}>
        <div className={'flex flex-1 my-auto justify-center items-center'}>
          <LoadingSpinner />
        </div>
      </When>
      <When value={!isLoadingQuery}>
        <form className={'flex flex-col items-center justify-center w-full h-screen sm:h-fit bg-gray-900 p-8 sm:rounded-xl'} onSubmit={handleSubmit}>
          <div className={`relative grid grid-cols-4 h-fit w-full flex-row items-start gap-6 mb-6`}>
            <H4 className={'flex flex-1 relative top-2 col-span-1 '}>{'Título:'}</H4>
            <div className={'col-span-3'}>
              <Input
                required
                defaultValue={evento?.titulo}
                id={'eventTitle'}
                autoComplete={'off'}
              />
            </div>
          </div>

          <div className={'grid grid-cols-4 h-fit w-full flex-row items-center gap-6 mb-6'}>
            <H4 className={'col-span-1'}>{'Data:'}</H4>
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
            <H4 className={'col-span-1'}>{'Hora:'}</H4>
            <div className={'col-span-1'}>
              <InputNumber min={0} max={24} maxLength={2} className={'w-[55px]'} id={'eventHour'} />
            </div>
            <H4 className={'col-span-1'}>{'Minuto:'}</H4>
            <div className={'col-span-1'}>
              <InputNumber
                min={0}
                max={60}
                maxLength={2}
                className={'w-[55px]'}
                id={'eventMinute'}
              />
            </div>
          </div>
          <div className={'flex h-fit w-full flex-col items-center gap-6 mb-20 outline-none'}>
            <H4>{'Descrição'}</H4>
            <div className={'w-full '}>
              <TextArea
                className={' h-[80px] w-full'}
                id={'eventDescription'}
                defaultValue={evento?.descricao}
              />
            </div>
          </div>
          <div className='flex w-full h-[60px]'>
            <Button isLoading={isLoadingMutate}>{'Enviar'}</Button>
          </div>
        </form>
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
