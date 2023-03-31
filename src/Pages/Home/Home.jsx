import React from 'react';
import Header from '../../Components/Header/Header';
import Categorieslist from '../../Components/Categories-list/Categories-list';
import ProductMain from '../../Components/ProductCard/ProductMain';
import Search from '../../Components/Search/Search';

const Home = () => {
  return (
    <div>
      <Header />
      <Search/>
      <Categorieslist />
      <ProductMain />
    </div>
  );
}

export default Home;
