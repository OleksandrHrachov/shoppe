import { FC, useEffect, useState } from 'react'
import ProductCard from '../../components/ProductCard';
import styles from './HomePage.module.scss';
import { useAppSelector, useAppDispatch } from '../../store/hooks'
import { getState, loading } from "../../store/productSlice";
import {IProduct} from '../../types/sharedTypes';

const HomePage: FC = () => {
  const [productsData, setProductsData] = useState<IProduct[]>();
  const products = useAppSelector(getState);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loading());
  }, []);

  useEffect(() => {
    if (products.products.length && !productsData) {
      setProductsData(products.products.slice(0, 6));
    }
  }, [products.products.length]);

  const handleViewAll = () => {
    setProductsData(products.products);
  }

  return (
    <div className={styles.homePageWrapper}>
      {productsData?.length ? (
        <>
          <div className={styles.pageTop}>
            <p className={styles.pageTitle}>Shop The Latest</p>
            <p className={styles.pageAction} onClick={handleViewAll}>
              View All
            </p>
          </div>
          <div className={styles.productListWrapper}>
            {productsData.map((product) => {
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
