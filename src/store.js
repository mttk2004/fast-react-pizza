/**
 *  Project: fast-react-pizza
 *  File: store.js
 *  Created: 9:51 SA, 23/08/2024
 *  Author: Mai Tran Tuan Kiet
 *  "Family is where life begins and love never ends."
 */

import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/user/userSlice.js';

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;
