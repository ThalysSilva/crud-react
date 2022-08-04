import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import config from '../../../../config';
import useDeleteDailyEvent from '../../../../hooks/pageEvents/useDeleteDailyEvent';
import { DailyEvent } from '../types';

export default function useListEventsItems(evento?: DailyEvent) {
  const id = evento?.id.toString() as string;

  const { mutate: mutateDeleteDailyEvent, isLoading: deleteIsLoading } = useDeleteDailyEvent(id);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [color, setColor] = useState('#fff');
  const router = useRouter();

  const { events } = config.webRoutes;


  function handleEditItem() {
    router.push(events.base + '/' + id);
  }

  function handleDeleteDailyEvent() {
    if (!evento) return;
    mutateDeleteDailyEvent(id);
  }
  useEffect(() => {
    if (!evento) return;
    setColor(evento.cor);
  }, [evento, evento?.cor]);

  function handleCloseDeleteModal() {
    setShowDeleteModal(false);
  }

  function handleOpenDeleteModal() {
    setShowDeleteModal(true);
  }

  return {
    handleDeleteDailyEvent,
    handleCloseDeleteModal,
    handleOpenDeleteModal,
    showDeleteModal,
    deleteIsLoading,
    handleEditItem,
    color
  };
}
