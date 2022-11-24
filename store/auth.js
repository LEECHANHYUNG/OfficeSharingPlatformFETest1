import { createSlice } from '@reduxjs/toolkit';

const authInitialState = {
  enteredEmail: '',
  enteredPassword: '',
  enteredName: '',
  enteredPhone: '',
  emailBlur: false,
  passwordBlur: false,
  nameBlur: false,
  phoneBlur: false,
  emailIsValid: null,
  passwordIsValid: null,
  nameIsValid: null,
  phoneIsValid: null,
};

const emailRegExp =
  /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

const passwordRegExp =
  /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;
const nameRegExp = /^[가-힣]{2,4}$/;
const phoneRegExp = /^[0-9]{2,3}[0-9]{3,4}[0-9]{4}/;

const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  reducers: {
    resetValidation(state) {
      state.enteredEmail = '';
      state.enteredPassword = '';
      state.enteredName = '';
      state.enteredPhone = '';
      state.emailIsValid = null;
      state.passwordIsValid = null;
      state.nameIsValid = null;
      state.phoneIsValid = null;
    },
    getEmailValid(state, action) {
      state.enteredEmail = action.payload;
      state.emailIsValid = emailRegExp.test(action.payload);
    },
    getPasswordValid(state, action) {
      state.enteredPassword = action.payload;
      state.passwordIsValid = passwordRegExp.test(action.payload);
    },
    getNameValid(state, action) {
      state.enteredName = action.payload;
      state.nameIsValid = nameRegExp.test(action.payload);
    },
    getPhoneValid(state, action) {
      state.enteredPhone = action.payload;
      state.phoneIsValid = phoneRegExp.test(action.payload);
    },
  },
});

export const authSliceActions = authSlice.actions;
export default authSlice.reducer;
