import React from 'react';
// import images
import Bookshop from '../img/bookshop-g5ad495994_1280.png';
// import link
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className='h-[800px] bg-hero bg-no-repeat bg-cover bg-center py-24'>
      <div className='container mx-auto flex justify-around h-full'>
        {/* text */}
        <div className='flex flex-col justify-center'>
          {/* pre-title */}
          <div className='font-semibold flex items-center uppercase'>
            <div className='w-10 h-[2px] bg-red-500 mr-3'></div>Looking for something new to you?
          </div>
          {/* title */}
          <h1 className='text-[70px] leading-[1.1] font-light mb-4'>
            Sell and buy used books  <br />
            <span className='font-semibold'>Trash to Treasure</span>
          </h1>
          <Link
            to={'/'}
            className='self-start uppercase font-semibold border-b-2 border-primary'
          >
            Discover More
          </Link>
        </div>
        {/* image */}
        <div className='hidden lg:block'>
          {/* <img src={Bookshop} alt='' /> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
