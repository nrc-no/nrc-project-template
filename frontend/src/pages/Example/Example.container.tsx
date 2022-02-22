import * as React from 'react';

import { useAppDispatch } from '../../store/store';
import { exampleActions } from '../../store/example';
import { NewExampleModal } from '../../components/Example/NewExampleModal';

import { ExampleComponent } from './Example.component';

export const ExampleContainer: React.FC = () => {
  const dispatch = useAppDispatch();

  const handleOnAddClick = () => {
    dispatch(exampleActions.openCreateModal());
  };

  return (
    <>
      <ExampleComponent onAddClick={handleOnAddClick} />
      <NewExampleModal />
    </>
  );
};
