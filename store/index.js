import { configureStore } from '@reduxjs/toolkit';
import officeList from './officeList';

const store = configureStore({
  reducer: {
    officeList: officeList,
  },
});

export default store;
