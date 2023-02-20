/* eslint-disable comma-dangle */
/* eslint-disable implicit-arrow-linebreak */
import { configureStore } from '@reduxjs/toolkit';

import playerReducer from './features/playerSlice';
import { shazamCoreAPIv1 } from './services/shazamCoreV1';
import { shazamCoreAPIv2 } from './services/shazamCoreV2';

export const store = configureStore({
  reducer: {
    [shazamCoreAPIv1.reducerPath]: shazamCoreAPIv1.reducer,
    [shazamCoreAPIv2.reducerPath]: shazamCoreAPIv2.reducer,
    player: playerReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      shazamCoreAPIv1.middleware,
      shazamCoreAPIv2.middleware,
    ]),
});
