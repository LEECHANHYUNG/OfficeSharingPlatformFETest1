import { createSlice } from '@reduxjs/toolkit';

const authInitialState = {
  enteredEmail: '',
  enteredPassword: '',
  emailBlur: false,
  passwordBlur: false,
  emailIsValid: null,
  passwordIsValid: null,
};

const emailRegExp =
  /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

const passwordRegExp =
  /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;
const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  reducers: {
    getEmailValid(state, action) {
      state.enteredEmail = action.payload;
      state.emailIsValid = emailRegExp.test(action.payload);
    },
    getPasswordValid(state, action) {
      state.enteredPassword = action.payload;
      state.passwordIsValid = passwordRegExp.test(action.payload.trim());
    },
  },
});

export const authSliceActions = authSlice.actions;
export default authSlice.reducer;
