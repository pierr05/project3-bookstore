import React, { useContext } from 'react';

import { ProductContext } from '../contexts/ProductContext';
import Product from '../components/Product';
const Home = () => {
  const { products } = useContext(ProductContext);
  console.log(products);

  const filteredProducts = products.filter((item) => {
    return (
      item.category === "sport books" || item.category ===
      "women books"
    );
  });
  eturn (
    <div>
      <Hero />
      <section className='py-16'>
        <div className='container mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0'>
            {filteredProducts.map((product) => {
              return <Product product={product} key={product.id} />;
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

  