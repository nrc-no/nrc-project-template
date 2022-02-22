import * as React from 'react';

import { exampleActions, exampleSelectors } from '../../../store/example';
import { useAppDispatch, useAppSelector } from '../../../store/store';

import { NewExampleModalComponent } from './NewExampleModal.component';

export const NewExampleModalContainer: React.FC = () => {
  const dispatch = useAppDispatch();

  const isExampleCreateModalOpen = useAppSelector(
    exampleSelectors.getIsExampleCreateModalOpen,
  );

  const handleCloseModal = () => dispatch(exampleActions.closeCreateModal());

  const handleSubmit = (data: { name: string }) => {
    dispatch(exampleActions.createExample(data));
  };

  return (
    <NewExampleModalComponent
      isOpen={isExampleCreateModalOpen}
      onClose={handleCloseModal}
      onSubmit={handleSubmit}
    />
  );
};
