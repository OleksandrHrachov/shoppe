import { FC, useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { getState, loading, setProduct } from "../../store/productSlice";
import { IProduct } from '../../types/sharedTypes';
import ratingStar from '../../assets/ratingStar.png'
import likeIcon from "../../assets/likeIcon.png";
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";
import twitter from "../../assets/twitter.png";
import mailIcon from "../../assets/mailIcon.png";
import ProductCard from '../../components/ProductCard';
import styles from './ProductPage.module.scss';

const ProductPage: FC = () => {
  const [currentProduct, setCurrentProduct] = useState<IProduct>();
  const [count, setCount] = useState(1)
  const [similarItems, setSimilarItems] = useState<IProduct[]>();
  const {id} = useParams();

  const products = useAppSelector(getState);
  const dispatch = useAppDispatch();

  const onAdd = () => {
    setCount(count + 1)
  }

  const onSubtract = () => {
    if (count > 0) setCount(count - 1);
    
  };

  useEffect(() => {
    if (products.products.length && !products.isLoading && id) {
      const productData = products.products.find((item) => item.id === +id)
      if (productData) {
        setCurrentProduct(productData);
      }
    } else {
      dispatch(loading());
    }
  }, []);

  useEffect(() => {
    if (products.products.length && !products.isLoading && id) {
      const productData = products.products.find((item) => item.id === +id);
      if (productData) {
        setCurrentProduct(productData);
      }
    } else {
      dispatch(loading());
    }
  }, [id]);

  useEffect(() => {
    if (products.products.length && !products.isLoading && id) {
      const productData = products.products.find((item) => item.id === +id);
      if (productData) {
        setCurrentProduct(productData);
      }
    }
  }, [products]);

  const randomInteger = (min: number, max: number) => {
        let rand = min + Math.random() * (max + 1 - min);
        return Math.floor(rand);
      }

  useEffect(() => {
    if (currentProduct && id) {
      const currentProdCategory = currentProduct.category;
      const prodWithSameCategory = products.products.filter(
        (prod) => prod.category === currentProdCategory && prod.id !== +id
      );

      if (prodWithSameCategory.length > 3) {
        const indArray: number[] = [];
        const randomProdArray: IProduct[] = [];
        while (randomProdArray.length < 3) {
          const int = randomInteger(0, prodWithSameCategory.length - 1);
          if (!indArray.includes(int)) {
            indArray.push(int);
            randomProdArray.push(prodWithSameCategory[int]);
          }
        }

        setSimilarItems(randomProdArray);

      } else {
        setSimilarItems(prodWithSameCategory);
      }
    }
  }, [currentProduct]);

  if (!currentProduct && products.isLoading) {
    return <h2>LOADING...</h2>
  }
    return (
      <>
        {currentProduct && (
          <>
            <div className={styles.productView}>
              <div className={styles.productImgSection}>
                <div className={styles.allProductImgs}>
                  <img src={currentProduct.image} alt="product img" />
                  <img src={currentProduct.image} alt="product img" />
                  <img src={currentProduct.image} alt="product img" />
                  <img src={currentProduct.image} alt="product img" />
                </div>
                <div className={styles.mainProductImg}>
                  <img src={currentProduct.image} alt="product img" />
                </div>
              </div>

              <div className={styles.productDescrSection}>
                <p className={styles.productTitle}>{currentProduct.title}</p>
                <p
                  className={styles.productPrice}
                >{`$ ${currentProduct.price}`}</p>
                <div className={styles.productRating}>
                  <img src={ratingStar} alt="star" />
                  <img src={ratingStar} alt="star" />
                  <img src={ratingStar} alt="star" />
                  <img src={ratingStar} alt="star" />
                  <img src={ratingStar} alt="star" />
                  <span>1 customer review</span>
                </div>
                <p className={styles.productDescr}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam placerat, augue a volutpat hendrerit, sapien tortor
                  faucibus augue, a maximus elit ex vitae libero. Sed quis
                  mauris eget arcu facilisis consequat sed eu felis.
                </p>
                <div className={styles.productButton}>
                  <div className={styles.productCount}>
                    <button
                      onClick={onSubtract}
                      type="button"
                      className={styles.subtract}
                    >
                      -
                    </button>
                    <span className={styles.count}>{count}</span>
                    <button
                      onClick={onAdd}
                      type="button"
                      className={styles.add}
                    >
                      +
                    </button>
                  </div>
                  <button type="button" className={styles.productAdd}>
                    ADD TO CART
                  </button>
                </div>
                <div className={styles.productSocialIcon}>
                  <img src={likeIcon} alt="like icon" />
                  <div className={styles.separator}></div>
                  <img src={mailIcon} alt="mail icon" />
                  <img src={facebook} alt="fb icon" />
                  <img src={instagram} alt="inst icon" />
                  <img src={twitter} alt="tw icon" />
                </div>
                <div className={styles.productCategory}>
                  <p className={styles.id}>
                    <span>SKU: </span>
                    <span>{currentProduct.id}</span>
                  </p>
                  <p className={styles.categoryName}>
                    <span>Categories: </span>
                    <span>{currentProduct.category}</span>
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.additionalInfoSection}>
              <div className={styles.additionalInfoMenu}>
                <p className={styles.menuItem}>Description</p>
                <p className={styles.menuItem}>Aditional information</p>
                <p
                  className={styles.menuItem}
                >{`Reviews(${currentProduct.rating.count})`}</p>
              </div>
              <p className={styles.productDescription}>
                {currentProduct.description}
              </p>
            </div>
            <div className={styles.similarItemsSection}>
              {similarItems?.length && (
                <div className={styles.productListWrapper}>
                  {similarItems.map((product) => {
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
              )}
            </div>
          </>
        )}
      </>
    );
};

export default ProductPage;
