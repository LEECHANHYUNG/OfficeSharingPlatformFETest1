import { createSlice } from '@reduxjs/toolkit';

const initialReservationState = {
  selectedType: null,
  selectedTypeEng: null,
  reservationItem: null,
  unableDateList: [],
  openingHours: [],
  selectedStartTime: 0,
  selectedEndTime: 0,
  availableTimeList: new Array(24).fill(0, 0, 24),
  timelist: [],
  selectTimeList: [],
  isSelected: false,
  isLoading: false,
  itemPrice: null,
  date: new Date(),
};

const reservationSlice = createSlice({
  name: 'reservation',
  initialState: initialReservationState,
  reducers: {
    getSelectedType(state, action) {
      state.selectedType = action.payload;
    },
    getSelectedTypeEng(state, action) {
      state.selectedTypeEng = action.payload;
    },
    getReservationItem(state, action) {
      state.reservationItem = action.payload;
    },
    getUnableDayList(state, action) {
      state.unableDateList = action.payload;
    },
    getOpeningHours(state, action) {
      state.openingHours = action.payload;
    },
    getSelectedStartTime(state, action) {
      state.selectedStartTime = action.payload;
    },
    getAvailableTimeList(state, action) {
      state.availableTimeList = action.payload;
    },
    getSelectedEndTime(state, action) {
      state.selectedStartTime = action.payload;
    },
    checkTimeList(state, action) {
      state.timelist = action.payload;
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
    getLoadingState(state) {
      state.isLoading = !state.isLoading;
    },
  },
});

export const reservationActions = reservationSlice.actions;
export default reservationSlice.reducer;
