import { createSlice } from '@reduxjs/toolkit';

const chatSlice = createSlice({
  name: 'chat',
  initialState:{
    messages: [],
    error: null,
    isPending:false
  },
  reducers:{},
  extraReducers:(builder)=>{
    //builder.addCase()
  }
});

export default chatSlice.reducer;
