import { createSlice } from '@reduxjs/toolkit';

const initialOfficeListState = {
  officeList: null,
  selectedPlaceId: '',
  selectedOffice: null,
};

const officeSlice = createSlice({
  name: 'officeList',
  initialState: initialOfficeListState,
  reducers: {
    getOfficeList(state, action) {
      state.officeList = action.payload;
    },
    selectPlace(state, action) {
      state.selectedPlaceId = action.payload;
      const selectedPlaceIndex = state.officeList.findIndex(
        (elem) => elem.key === action.payload
      );
      state.selectedOffice = state.officeList[selectedPlaceIndex];
    },
  },
});

export const officeSliceActions = officeSlice.actions;
export default officeSlice.reducer;
