import { AiOutlineShoppingCart} from "react-icons/ai";
import React from "react";

const NavBar = () => {

  const style =
    'text-[14px], cursor-pointer, ml-[25px] mobile:ml-[5px]';
  return (


    <div className="h-[60px] shadow-md relative z-10 bg-rose-200 text-white ">
      <div className="pl-[20px] pr-[20px] pt-[10px] pb-[10px] flex justify-between items-center mobile:pl-0 mobile:pr-0  ">

          {/* Logo */}
          <div className="center flex-1 mobile:ml-6">
              <div className = "font-bold mobile:text-sm text-white ">Trash to Treasure</div>
          </div>

          {/* Right Side */}
          <div className="right flex flex-1 items-center justify-end mobile:justify-center mobile:flex-[2] text-white">
          <div className={style}><a href='#'>Register</a></div>
              <div className={style}><a href='#'>Sign In</a></div>
              <div className={style}>
                <div>
				<a href='#'><AiOutlineShoppingCart/></a>
                </div>
              </div>
          </div>

      </div>
    </div>
  );
};

export default NavBar