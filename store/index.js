import { configureStore } from '@reduxjs/toolkit';
import modal from './modal';
import officeList from './officeList';
import selected from './select';
import auth from './auth';

const store = configureStore({
  reducer: {
    officeList,
    modal,
    selected,
    auth,
  },
});

export default store;
