import React from "react";
import NavBar from "../components/NavBar";
import image from "../assets/image1.jpeg";
import Counter from "../components/Counter";

function Cart() {

  return (
    <>
      <NavBar />
      <div className="p-3">
        <div className="flex justify-center text-5xl border-2 border-[#8a4af3] bg-purple-200">Cart</div>

        <div className="flex items-center justify-between mt-4 mobile:flex-col">
          <button className="bg-white text-[#8a4af3] border-2 border-[#8a4af3] hover:bg-white">
            Continue Shopping
          </button>
          <div className="flex underline text-lg hover:cursor-pointer mobile:m-5">
            <p>Items in your Cart : 2</p>
            <p className="ml-5">WishList Item: 0</p>
          </div>
          <button>Checkout Now</button>
        </div>

        {/* central div */}
        <div className="flex flex-row mt-7 mobile:flex-col">
          <div className="flex flex-col flex-1 ">
            {/* list of products div */}
            <div className="flex w-[100%] h-auto items-center mobile:flex-col ">
              <div className="product flex self-start pl-5">
                <img
                  className="w-[7.2rem] h-[80%] rounded-lg shadow-lg hover:scale=[1.1] ease-in duration-300"
                  src={image}
                />

                <div className="description flex items-start h-full flex-col ml-6">
                  <p>
                    <b className="mr-2">ID: </b>12345678
                  </p>
                  <p>
                    <b className="mr-2">product:</b> Harry Potter Book
                  </p>
                </div>
              </div>
              {/*Price and Quantity Div*/}
              <div className=" flex-auto flex flex-col justify-end items-end mobile:mt-7 mobile:mb-7 ">
                <Counter />
                <p className="flex items-center justify-end text-4xl mt-3">
                  <b>$25.99</b>
                </p>
              </div>
            </div>
            <hr className="mb-7 mt-7 mobile:mt-0" />
            {/* 2nd products */}
            <div className="flex w-[100%] h-auto items-center">
              <div className="product flex self-start pl-5">
                <img
                  className="w-[7.2rem] h-[80%] rounded-lg shadow-lg hover:scale=[1.1] ease-in duration-300"
                  src={image}
                />
                <div className="description flex flex-col ml-5 mt-5">
                  <p>
                    <b className="mr-2">ID: </b>12345678
                  </p>
                  <p>
                    <b className="mr-2">product:</b> Harry Potter Book
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-end items-end mt-3 flex-auto ">
                <Counter />
                <p className="flex items-center justify-center text-4xl mt-3">
                  <b>$25.99</b>
                </p>
              </div>
            </div>
            <hr className="mb-7 mt-7 mobile:mt-0" />

            {/*Price and Quantity Div*/}
            <div className="Summary flex-[0.4] flex flex-col items-center w-[100%] h-[40vh] border-2 border-[#8a4af3]  bg-purple-200 rounded-md shadow-lg p-5 text-lg mobile:mb-6">
              <h1 className="text-[2rem] font-semibold ">SUMMARY</h1>
              <div className="flex justify-between mt-3 w-[100%]">
                <p>Subtotal</p>
                <p>$52</p>
              </div>
              <div className="flex justify-between mt-3 w-[100%]">
                <p>Shipping</p>
                <p>$10</p>
              </div>
              <div className="flex justify-between mt-3 w-[100%] text-3xl font-bold">
                <p>Total</p>
                <p>$62</p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
