import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header';
import Footer from "../Footer";
import styles from './Layout.module.scss';

const Layout: FC = () => {
  return (
    <div className={styles.container}>
      <header>
        <Header />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Layout
