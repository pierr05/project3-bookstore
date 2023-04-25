import React,{useContext} from 'react';

import {ProductContext} from '../contexts/ProductContext'

const Home = () => {
  const {products}= useContext(ProductContext)
  console.log(products);
  const filteredProducts =products.filter(item=>{
    return (
    item.category === "mens clothing" || item.category === 
    "womens clothing"
    );
  });
  console.log(filteredProducts);
  return <div>Homepage</div>;
};

export default Home;
