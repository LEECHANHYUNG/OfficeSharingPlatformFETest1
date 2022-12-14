import { configureStore } from '@reduxjs/toolkit';
import modal from './modal';
import officeList from './officeList';
import selected from './select';
import auth from './auth';
import reservation from './reservation';
import payment from './payment';

const store = configureStore({
  reducer: {
    officeList,
    modal,
    selected,
    auth,
    reservation,
    payment,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
