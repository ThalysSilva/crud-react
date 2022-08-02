import { useContext } from 'react';
import { ToastContext } from '../contexts/Toast/index';

export const useToast = () => {
  return useContext(ToastContext);
};
