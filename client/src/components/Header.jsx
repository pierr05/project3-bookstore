import React from 'react';
import { AiOutlineShoppingCart} from "react-icons/ai";

function Header(){
    const style =
    'text-[14px], cursor-pointer, ml-[25px] mobile:ml-[5px]';
    return (
        <header>
		<h1>Trash to Treasure</h1>
		<form>
			<input type="text" id="search-input" name="search-input" placeholder="Search"/>
			<button type="submit">Go</button>
		</form>
		<div className="right flex flex-1 items-center justify-end mobile:justify-center mobile:flex-[2]">
              <div className={style}><a href='/signup'>Register</a></div>
              <div className={style}><a href='/login'>Sign In</a></div>
              <div className={style}>
                <div>
				<a href='#'><AiOutlineShoppingCart/></a>
                </div>
              </div>
          </div>
	</header>
    )
}
export default Header;