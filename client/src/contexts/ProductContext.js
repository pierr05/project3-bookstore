import React, {createContext, userState, useEffect}from 'react';

export const ProductContext = createContext()

const ProductProvider = ({children}) => {


  const [products,setProducts] = userState([]);

  useEffect(() => {
const fetchProducts = async ()=> {
  const response = await fetch('');
const data =  await response.json();
};
  },[])
  return <ProductContext.Provider>{children}</ProductContext.Provider>;
};

export default ProductProvider;
