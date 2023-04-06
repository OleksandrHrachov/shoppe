import { FC } from 'react'
import styles from './ProductCard.module.scss';

interface IProps {
  id: number;
  title: string;
  price: number;
  image: string;
}

const ProductCard: FC<IProps> = ({id, title, price, image}) => {
  return (
    <div className={styles.cardWrapper}>
      <img className={styles.productImg} src={image} alt="product image" />
      <p className={styles.productTitle}>{title}</p>
      <p className={styles.productPrice}>{`$ ${price}`}</p>
    </div>
  );
};

export default ProductCard;
