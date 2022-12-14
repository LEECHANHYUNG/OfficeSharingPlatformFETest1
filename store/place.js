import { createSlice } from '@reduxjs/toolkit';

const initialPlaceState = {
  selectedCommentId: '',
  commentData: {},
};
const placeSlice = createSlice({
  name: 'place',
  initialState: initialPlaceState,
  reducers: {
    getSelectedCommentId(state, action) {
      state.selectedCommentId = action.payload;
    },
    getCommentData(state, action) {
      state.commentData = action.payload;
    },
  },
});
export const placeSliceActions = placeSlice.actions;
export default placeSlice.reducer;
