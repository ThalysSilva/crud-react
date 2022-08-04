import React from 'react';
import LoadingSpinnerIcon from '../../../assets/icon/LoadingSpinner';
import PenIcon from '../../../assets/icon/Pen';
import TrashIcon from '../../../assets/icon/Trash';
import { Modal } from '../../Modal';
import { Button } from '../../shared/Button';
import { Text2, Text4 } from '../../shared/Texts';
import { When } from '../../shared/When';
import { ListEventsItemContent } from '../ListIEventsItemContent';
import useListEventsItems from './hooks/useListEventsItem';
import { DailyEvent } from './types';

type Props = {
  evento: DailyEvent;
};

export function ListEventsItem({ evento }: Props) {
  const {
    handleDeleteDailyEvent,
    handleCloseDeleteModal,
    handleOpenDeleteModal,
    deleteIsLoading,
    showDeleteModal,
    handleEditItem,
    color
  } = useListEventsItems(evento);

  return (
    <div className="flex flex-row h-[220px] sm:h-[245px] w-full items-center bg-gray-700 p-4 rounded-xl mb-6">
      <div className={`flex  h-full w-1 rounded-full mr-4`} style={{ backgroundColor: color }} />
      <div className={'flex flex-1 flex-col'}>
        <div className={'flex flex-row justify-between items-center mb-4'}>
          <Text2>{evento.titulo}</Text2>
          <div className={'flex flex-row justify-center items-start gap-6'}>
            <button onClick={handleEditItem}>
              <PenIcon />
            </button>
            <button type="button" onClick={handleOpenDeleteModal}>
              <TrashIcon />
            </button>
          </div>
        </div>
        <ListEventsItemContent evento={evento} />
      </div>
      <Modal
        closeModal={handleCloseDeleteModal}
        show={showDeleteModal}
        closeOnBackDrop={!deleteIsLoading}
      >
        <div className="flex flex-col rounded-xl bg-gray-700 p-5 w-[320px] h-[150px] items-center justify-center">
          <When value={deleteIsLoading}>
            <div className={'flex flex-1 my-auto justify-center items-center'}>
              <LoadingSpinnerIcon />
            </div>
          </When>
          <When value={!deleteIsLoading}>
            <Text4 className="text-center mb-5">
              {'Tem certeza que deseja deletar o evento ?'}
            </Text4>

            <div className={'flex flex-row gap-6 h-14 w-full'}>
              <Button
                type={'button'}
                onClick={handleCloseDeleteModal}
                isOutlined
                isLoading={deleteIsLoading}
              >
                <Text4 className="text-center">{'Não'}</Text4>
              </Button>
              <Button type={'button'} onClick={handleDeleteDailyEvent}>
                <Text4 className="text-center">{'Sim, quero deletar'}</Text4>
              </Button>
            </div>
          </When>
        </div>
      </Modal>
    </div>
  );
}
