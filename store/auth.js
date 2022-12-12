import { createSlice } from '@reduxjs/toolkit';

const authInitialState = {
  enteredEmail: '',
  enteredPassword: '',
  enteredName: '',
  enteredPhone: '',
  enteredAuthNumber: '',
  emailBlur: false,
  passwordBlur: false,
  nameBlur: false,
  phoneBlur: false,
  authNumberBlur: false,
  emailIsValid: null,
  passwordIsValid: null,
  nameIsValid: null,
  phoneIsValid: null,
  authNumberIsValid: null,
  authNumberAuthenticated: false,
};

const emailRegExp =
  /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

const passwordRegExp =
  /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;
const nameRegExp = /^[가-힣]{2,4}$/;
const phoneRegExp = /^[0-9]{2,3}[0-9]{3,4}[0-9]{4}/;
const authNumberRegExp = /^[A-Za-z0-9]{4}$/;
const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  reducers: {
    resetValidation(state) {
      state.enteredEmail = '';
      state.enteredPassword = '';
      state.enteredName = '';
      state.enteredPhone = '';
      state.enteredAuthNumber = '';
      state.emailIsValid = null;
      state.passwordIsValid = null;
      state.nameIsValid = null;
      state.phoneIsValid = null;
      state.authNumberIsValid = null;
      state.authNumberAuthenticated = false;
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
    getAuthNumberValid(state, action) {
      state.enteredAuthNumber = action.payload;
      state.authNumberIsValid = authNumberRegExp.test(action.payload);
    },
    getAuthNumberAuthenticated(state, action) {
      state.authNumberAuthenticated = action.payload;
    },
  },
});

export const authSliceActions = authSlice.actions;
export default authSlice.reducer;
