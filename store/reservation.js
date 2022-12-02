import { createSlice } from '@reduxjs/toolkit';

const initialReservationState = {
  selectedType: null,
  timelist: [],
  selectTimeList: [],
  showTimeLine: false,
  isSelected: false,
  itemName: null,
  itemPrice: null,
  showTimeLine: false,
  date: new Date().toLocaleDateString(),
};

const reservationSlice = createSlice({
  name: 'reservation',
  initialState: initialReservationState,
  reducers: {
    getSelectedType(state, action) {
      state.selectedType = action.payload;
    },
    checkTimeList(state, action) {
      state.timelist = action.payload;
    },
    deleteList(state) {
      state.selectTimeList = [];
    },
    showTimeLine(state) {
      state.showTimeLine = true;
    },
    checkTimeList(state, action) {
      state.timelist = action.payload;
    },
    getTimeList(state, action) {
      state.timelist = action.payload;
    },
    select(state, action) {
      if (state.selectTimeList.length === 2) {
        state.selectTimeList = [];
        state.selectTimeList.push(Number(action.payload));
      } else {
        state.selectTimeList.push(Number(action.payload));
      }
      state.selectTimeList.sort((a, b) => a - b);
    },
    selectDate(state, action) {
      state.date = action.payload;
    },
    hideTimeLine(state) {
      state.showTimeLine = false;
    },
  },
});

export const reservationActions = reservationSlice.actions;
export default reservationSlice.reducer;
