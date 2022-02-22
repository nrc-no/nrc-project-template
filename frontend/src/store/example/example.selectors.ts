import { Example } from '../../types/Example';
import { RootState } from '../store';

export const getIsExampleCreateModalOpen = (state: RootState): boolean =>
  state.example.createModal.open;

export const getExampleList = (state: RootState): Example[] =>
  state.example.list.item;

export const getExampleDetail = (state: RootState): Example | null =>
  state.example.detail.item;
