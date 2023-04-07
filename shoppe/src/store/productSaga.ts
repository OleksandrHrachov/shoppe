import { call, put, takeEvery, fork, take } from 'redux-saga/effects'
import { setProducts, setProduct, loading } from "./productSlice";
import { IProduct } from '../types/sharedTypes';

const getProducts = async () => {
  return fetch("https://fakestoreapi.com/products").then((res) => res.json());
};

function* workGetProductsFetch() {
  try {
    const products: IProduct[] = yield call(getProducts);
    yield put(setProducts(products));
  } catch (error) {
    console.log('ERROR =>', error);
  }
};

function* productSaga() {
  yield takeEvery("products/loading", workGetProductsFetch);
};

export default productSaga;
