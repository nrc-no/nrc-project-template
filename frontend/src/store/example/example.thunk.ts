import { createAsyncThunk } from '@reduxjs/toolkit';

import { apiClient } from '../../clients';
import { Example, ExampleDefinition } from '../../types/Example';

export const getExample = createAsyncThunk<Example, string>(
  'example/get',
  async (id, thunkAPI) => {
    try {
      const response = await apiClient.Example.get(id);
      return response;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  },
);

export const listExamples = createAsyncThunk<Example[]>(
  'example/list',
  async (_, thunkAPI) => {
    try {
      const response = await apiClient.Example.list();
      return response;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  },
);

export const createExample = createAsyncThunk<Example, ExampleDefinition>(
  'example/create',
  async (example, thunkAPI) => {
    try {
      const response = await apiClient.Example.create(example);
      return response;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  },
);

export const updateExample = createAsyncThunk<Example, Example>(
  'example/update',
  async (example, thunkAPI) => {
    try {
      const response = await apiClient.Example.update(example);
      return response;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  },
);

export const deleteExample = createAsyncThunk<string, string>(
  'example/delete',
  async (id, thunkAPI) => {
    try {
      await apiClient.Example.delete(id);
      return id;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  },
);
