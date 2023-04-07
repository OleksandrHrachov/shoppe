import { FC, useEffect } from 'react'
import ProductCard from '../../components/ProductCard';
import styles from './HomePage.module.scss';
import { useAppSelector, useAppDispatch } from '../../store/hooks'
import { getState, loading } from "../../store/productSlice";

const HomePage: FC = () => {
  const products = useAppSelector(getState);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loading());
  }, [dispatch]); 

  return (
    <div className={styles.homePageWrapper}>
      {products.products.length ? (
        <>
        <p className={styles.pageTitle}>Shop The Latest</p>
        <div className={styles.productListWrapper}>
          {products.products.map((product) => {
            return (
              <ProductCard
                key={product.id}
                id={product.id}
                title={product.title}
                price={product.price}
                image={product.image}
              />
            );
          })}
        </div>
        </>
      ) : (
        products.isLoading && <h2>LOADING...</h2>
      )}
    </div>
  );
};

export default HomePage;
