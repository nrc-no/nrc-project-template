import { createSlice } from '@reduxjs/toolkit';

import { Example } from '../../types/Example';

import * as exampleThunks from './example.thunk';

interface ExampleState {
  list: {
    item: Example[];
    loading: boolean;
    error: boolean;
  };
  detail: {
    item: Example | null;
    loading: boolean;
    error: boolean;
  };
  createModal: {
    open: boolean;
  };
}

const initialState: ExampleState = {
  list: {
    item: [],
    loading: false,
    error: false,
  },
  detail: {
    item: null,
    loading: false,
    error: false,
  },
  createModal: {
    open: false,
  },
};

export const exampleSlice = createSlice({
  name: 'example',
  initialState,
  reducers: {
    openCreateModal: (state) => {
      state.createModal.open = true;
    },
    closeCreateModal: (state) => {
      state.createModal.open = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(exampleThunks.listExamples.pending, (state) => {
      state.list.loading = true;
      state.list.error = false;
    });
    builder.addCase(exampleThunks.listExamples.rejected, (state) => {
      state.list.loading = false;
      state.list.error = true;
    });
    builder.addCase(exampleThunks.listExamples.fulfilled, (state, action) => {
      state.list.loading = false;
      state.list.error = false;
      state.list.item = action.payload;
    });

    builder.addCase(exampleThunks.getExample.pending, (state) => {
      state.detail.loading = true;
      state.detail.error = false;
    });
    builder.addCase(exampleThunks.getExample.rejected, (state) => {
      state.detail.loading = false;
      state.detail.error = true;
    });
    builder.addCase(exampleThunks.getExample.fulfilled, (state, action) => {
      state.detail.loading = false;
      state.detail.error = false;
      state.detail.item = action.payload;
    });

    builder.addCase(exampleThunks.updateExample.fulfilled, (state, action) => {
      if (state.detail.item?.id === action.payload.id) {
        state.detail.item = action.payload;
      }
      state.list.item = state.list.item.map((item) => {
        if (item.id === action.payload.id) {
          return action.payload;
        }
        return item;
      });
    });

    builder.addCase(exampleThunks.deleteExample.fulfilled, (state, action) => {
      if (state.detail.item?.id === action.payload) {
        state.detail.item = null;
      }
      state.list.item = state.list.item.filter(
        (item) => item.id !== action.payload,
      );
    });

    builder.addCase(exampleThunks.createExample.fulfilled, (state, action) => {
      state.detail.item = action.payload;
      state.list.item.push(action.payload);
    });
  },
});
