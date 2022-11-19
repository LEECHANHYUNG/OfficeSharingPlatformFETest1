import { configureStore } from '@reduxjs/toolkit';
import modal from './modal';
import officeList from './officeList';

const store = configureStore({
  reducer: {
    officeList: officeList,
    modal: modal,
  },
});

export default store;
