import { createSlice } from '@reduxjs/toolkit';

const initialOfficeListState = {
  officeList: null,
};

const officeSlice = createSlice({
  name: 'officeList',
  initialState: initialOfficeListState,
  reducers: {
    getOfficeList(state, action) {
      state.officeList = action.payload;
    },
  },
});

export const officeSliceActions = officeSlice.actions;
export default officeSlice.reducer;
