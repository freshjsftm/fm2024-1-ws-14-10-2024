import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getMessages } from '../api';

export const getAllMessages = createAsyncThunk(
  'chat/getAllMessages',
  async (params, thunkAPI) => {
    try {
      const { data: { data } } = await getMessages();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const chatSlice = createSlice({
  name: 'chat',
  initialState: {
    messages: [],
    error: null,
    isPending: false,
  },
  reducers: {
    addMessage: (state, action) => {
      state.messages.push(action.payload);
    },
  },
  extraReducers: (builder) => { //eslint-disable-next-line
    builder.addCase(getAllMessages.pending, (state, action) => {
      state.isPending = true;
      state.error = null;
    });
    builder.addCase(getAllMessages.fulfilled, (state, action) => {
      state.isPending = false;
      state.error = null;
      state.messages.push(...action.payload);
    });
    builder.addCase(getAllMessages.rejected, (state, action) => {
      state.isPending = false;
      state.error = action.payload;
    });
  },
});

export const { addMessage } = chatSlice.actions;
export default chatSlice.reducer;
