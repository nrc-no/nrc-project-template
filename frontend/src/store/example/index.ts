import { exampleSlice } from './example.slice';
import * as thunkActions from './example.thunk';

export * as exampleSelectors from './example.selectors';

export const exampleActions = {
  ...thunkActions,
  ...exampleSlice.actions,
};
