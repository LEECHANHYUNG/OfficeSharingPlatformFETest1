import { configureStore } from '@reduxjs/toolkit';
import modal from './modal';
import officeList from './officeList';
import selected from './select';

const store = configureStore({
  reducer: {
    officeList: officeList,
    modal: modal,
    selected: selected,
  },
});

export default store;
