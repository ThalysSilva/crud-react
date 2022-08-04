import React, { Dispatch, FormEvent, SetStateAction } from 'react';

import { InputNumber } from '../CustomInputs/InputNumber';
import useEventDetail from './hooks/useEventDetail';
import { TextArea } from '../textArea';
import Calendar from 'react-calendar';
import { Modal } from '../../Modal';
import { Button } from '../Button';
import { Input } from '../Input';
import { Text4 } from '../Texts';

type Props = {
  onSubmit: (e: FormEvent) => void;
  isLoadingSubmit: boolean;
  description?: string;
  setDate: Dispatch<SetStateAction<Date>>;
  title?: string;
  date: Date;
};

export function EventDetail({
  isLoadingSubmit,
  description,
  onSubmit,
  setDate,
  title,
  date
}: Props) {
  const { handleCloseCalendar, handleOpenCalendar, normalizedDateEvent, showCalendar } =
    useEventDetail(date);
  return (
    <div>
      <form
        className={
          'flex flex-col items-center justify-center w-full h-screen sm:h-fit bg-gray-900 p-8 sm:rounded-xl'
        }
        onSubmit={onSubmit}
      >
        <div className={`relative grid grid-cols-4 h-fit w-full flex-row items-start gap-6 mb-6`}>
          <Text4 className={'flex flex-1 relative top-2 col-span-1 '}>{'Título:'}</Text4>
          <div className={'col-span-3'}>
            <Input required defaultValue={title} id={'eventTitle'} autoComplete={'off'} />
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
            <InputNumber min={0} max={60} maxLength={2} defaultValue={'00'} className={'w-[55px]'} id={'eventMinute'} />
          </div>
        </div>
        <div className={'flex h-fit w-full flex-col items-center gap-6 mb-20 outline-none'}>
          <Text4>{'Descrição'}</Text4>
          <div className={'w-full '}>
            <TextArea
              className={' h-[80px] w-full'}
              id={'eventDescription'}
              defaultValue={description}
            />
          </div>
        </div>
        <div className="flex w-full h-[60px]">
          <Button isLoading={isLoadingSubmit}>{'Enviar'}</Button>
        </div>
      </form>
      <Modal closeModal={handleCloseCalendar} show={showCalendar} closeOnBackDrop>
        <div className="rounded-xl">
          <Calendar value={date} onChange={setDate} />
        </div>
      </Modal>
    </div>
  );
}
