import { useState } from "react";

function CartItem() {
  // const [ button, setButton ] = useState();
  
  function handleOnClick() {
    
  }

  return (
    <div className="py-4">
      <div className="flex h-auto w-auto gap-x-4 pb-4">
        <img
          className="h-20 w-40 rounded-md object-cover"
          src="../../../images/test-data/the-last-of-us-part-i.jpg"
          alt="game pic"
        />
        <div className="flex-grow flex-col space-y-3">
          <div className="flex items-center justify-between">
            <div className="rounded-md bg-gray-300 px-2 py-1 text-xs font-semibold">
              BASE GAME
            </div>
            <div className="flex items-center">
              <div className="rounded-xl bg-red-400 px-3 py-1 text-xs font-semibold">
                -50%
              </div>
              <span className="px-2 py-1 text-xs font-semibold text-gray-500 line-through">
                RM 100.00
              </span>
              <span className="px-2 py-1 text-sm font-bold">RM 100.00</span>
            </div>
          </div>
          <div className="font-bold">The Last of Us Part I</div>
          <div className="flex justify-between">
            <div>Some Icons here</div>
            <div className="flex justify-between gap-3">
              <button className="px-2 text-sm text-gray-600 hover:font-semibold" onClick={handleOnClick}>Remove</button>
              <button className="px-2 text-sm text-gray-600 hover:font-semibold" onClick={handleOnClick}>
                Move to Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="h-0.5 w-auto bg-gray-300"></div>
    </div>
  );
}

export default CartItem;
