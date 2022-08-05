import React, { Dispatch, FormEvent, SetStateAction } from 'react';

import { InputNumber } from '../CustomInputs/InputNumber';
import useEventView from './hooks/useEventView';
import 'react-calendar/dist/Calendar.css';
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

export function EventView({ isLoadingSubmit, description, onSubmit, setDate, title, date }: Props) {
  const {
    handleCloseCalendar,
    normalizedDateEvent,
    handleOpenCalendar,
    showCalendar,
    handleCancel
  } = useEventView(date);
  return (
    <div>
      <form
        className={
          'flex flex-col  items-center justify-center w-screen h-screen sm:h-fit sm:w-[470px] bg-gray-900 p-8 sm:rounded-xl'
        }
        onSubmit={onSubmit}
      >
        <div className={`relative grid grid-cols-4 h-fit w-full flex-row items-start gap-6 mb-6`}>
          <Text4 className={'flex flex-1 relative top-2 col-span-1 '}>{'Título:'}</Text4>
          <div className={'col-span-3'}>
            <Input
              dataTestId={'eventTitle'}
              autoComplete={'off'}
              defaultValue={title}
              id={'eventTitle'}
              required
            />
          </div>
        </div>

        <div className={'grid grid-cols-4 h-fit w-full flex-row items-center gap-6 mb-6'}>
          <Text4 className={'col-span-1'}>{'Data:'}</Text4>
          <div className={'col-span-2'}>
            <button
              className=" flex rounded-xl w-[120px] justify-center items-center bg-[#3b74f2] hover:bg-[#115bfa] duration-200 p-2"
              onClick={handleOpenCalendar}
              data-testid={'eventData'}
              type="button"
            >
              {normalizedDateEvent}
            </button>
          </div>
        </div>
        <div className={'grid grid-cols-4 h-fit w-full flex-row items-center gap-6 mb-6'}>
          <Text4 className={'col-span-1'}>{'Hora:'}</Text4>
          <div className={'col-span-1'}>
            <InputNumber
              dataTestId={'eventHour'}
              className={'w-[55px] text-center'}
              defaultValue={'00'}
              id={'eventHour'}
              maxLength={2}
              max={24}
              min={0}
            />
          </div>
          <Text4 className={'col-span-1'}>{'Minuto:'}</Text4>
          <div className={'col-span-1'}>
            <InputNumber
              dataTestId={'eventMinute'}
              className={'w-[55px] text-center'}
              defaultValue={'00'}
              id={'eventMinute'}
              maxLength={2}
              max={60}
              min={0}
            />
          </div>
        </div>
        <div className={`relative grid grid-cols-4 h-fit items-center w-full flex-row gap-6 mb-6`}>
          <Text4 className={' col-span-1 '}>{'Cor:'}</Text4>
          <div className={'col-span-3'}>
            <input
              className={'bg-transparent rounded-xl'}
              defaultValue={'#ff0000'}
              data-testid={'eventColor'}
              id={'eventColor'}
              type={'color'}
            />
          </div>
        </div>

        <div className={'flex h-fit w-full flex-col items-center gap-6 mb-20 outline-none'}>
          <Text4>{'Descrição'}</Text4>
          <div className={'w-full '}>
            <TextArea
              className={' h-[80px] w-full'}
              defaultValue={description}
              id={'eventDescription'}
            />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-10">
          <div className="flex w-full h-[60px] col-span-1">
            <Button type={'button'} onClick={handleCancel} isOutlined>
              {'Voltar'}
            </Button>
          </div>
          <div className="flex w-full h-[60px] col-span-2">
            <Button isLoading={isLoadingSubmit}>{'Enviar'}</Button>
          </div>
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
