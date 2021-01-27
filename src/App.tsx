import React from 'react';

import styles from './App.module.scss';
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';
import ItemList from './component/ItemList/ItemList';

function App() {
  return (
    <div className={styles['App']}>
      <Header />
      <ItemList />
      <Footer />
    </div>
  );
}

export default App;
