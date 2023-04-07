import { call, put, takeEvery, take } from 'redux-saga/effects'
import { setProducts, setProduct, loading } from "./productSlice";
import { IProduct } from '../types/sharedTypes';

function* workGetProductsFetch() {
  const products: IProduct[] = yield call(() => fetch("https://fakestoreapi.com/products").then((res) => res.json()));
  yield put(setProducts(products));
};

function* productSaga() {
  yield takeEvery("products/loading", workGetProductsFetch);
};

export default productSaga;
