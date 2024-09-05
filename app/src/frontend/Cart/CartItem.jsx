import { useContext } from "react";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";

function CartItem({ id, title, imgSrc, price }) {
  const { removeFromCartContext } = useContext(CartContext);

  function handleRemoveClick() {
    removeFromCartContext(id);
  }

  return (
    <div className="py-4">
      <div className="h-auto w-auto gap-x-4 pb-4 flex">
        <Link to={`/store/${id}`}>
          <img
            className="h-20 w-40 rounded-md object-cover"
            src={imgSrc}
            alt={title}
          />
        </Link>
        <div className="flex-grow flex-col justify-between inline-flex">
          <div className="flex items-center justify-between">
            <Link to={`/store/${id}`}>
              <div className="font-bold text-lg">{title}</div>
            </Link>
            <span className="px-2 py-1 text-sm font-bold">RM {price}</span>
          </div>
          <div className="flex justify-end items-end">
              <button
                className="px-2 text-sm text-gray-600 hover:font-semibold"
                onClick={handleRemoveClick}
              >
                Remove
              </button>
              <button
                className="px-2 text-sm text-gray-600 hover:font-semibold"
                // onClick={handleOnClick}
              >
                Move to Wishlist
              </button>
          </div>
        </div>
      </div>
      <div className="h-0.5 w-auto bg-gray-300"></div>
    </div>
  );
}

export default CartItem;
