import { FC, useState, useEffect } from 'react'
import ProductCard from '../../components/ProductCard';
import styles from './HomePage.module.scss';

interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

const HomePage: FC = () => {
  const [data, setData] = useState<IProduct[] | []>([]);
  const [loading, setLoading] = useState(false);
  console.log(data);

  const getData =async () => {
    setLoading(true);
    const data = await fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      setLoading(false)
    setData(data);
      
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className={styles.homePageWrapper}>
      <p className={styles.pageTitle}>Shop The Latest</p>
      {data.length ? (
        <div className={styles.productListWrapper}>
          {data.map((product) => {
          return <ProductCard id={product.id} title={product.title} price={product.price} image={product.image} />
        })}
        </div>
        
      ) : (
        loading && <p>LOADING...</p>
      )}


    </div>
  );
};

export default HomePage;
