import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga';
import productReducer from './productSlice';
import productSaga from "./productSaga";

const saga = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    products: productReducer,
  },
  middleware: [saga]
});

saga.run(productSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
