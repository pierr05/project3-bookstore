import React, { useState } from "react";

function Counter() {
    const [amount, setAmount] = useState(1);

    return (
      <div>
        <div className="counter flex items-center text-2xl justify-start">
          Quantity
          <div className="ml-5 shadow-md flex">
          <div className="bg-[#8a4af3] text-white w-8 flex items-center justify-center rounded-l-lg cursor-pointer" onClick={() => setAmount((prev) => prev - 1)}>
            -
          </div>
          <div className="w-8 flex items-center justify-center border-[1px] border-[#8a4af3]">
          {amount}
          </div>
          <div className="bg-[#8a4af3] text-white w-8 flex items-center justify-center rounded-r-lg cursor-pointer" onClick={() => setAmount((prev) => prev + 1)}>
            +
          </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Counter;
  