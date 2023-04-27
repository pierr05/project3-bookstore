import React, { createContext, useState, useEffect } from 'react';

export const ProductContext = createContext();

const ProductProvider = ({children}) => {


  const [products, setProducts] = useState([]);
 //due to the await fetch request the styling doesn't show. helpppppppp TT_TT
  useEffect(() => {
const fetchProducts = async ()=> {
  const response = await fetch('https://api2.isbndb.com/book/9781118443927');
const data =  await response.json();
setProducts(data);
};
fetchProducts();
  },[]);
  return <ProductContext.Provider value={{ products }}>
    {children}</ProductContext.Provider>;
};

export default ProductProvider;
