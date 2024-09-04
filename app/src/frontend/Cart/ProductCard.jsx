import React from "react";
import { Link } from "react-router-dom";

const ProductCart = (props) => {
  const { id, name, price, discount, image, slug } = props.data;
  return (
    <div className="rounded-xl bg-white p-5 shadow-sm hover:bg-gray-200">
      <Link to={slug}>
        <img src={image} alt="" className="h-20 w-40 rounded-md object-cover" />
      </Link>
      <Link to={slug}>
        <p>{name}</p>
      </Link>
      <p>RM {price}</p>
      <p className="rounded-xl bg-red-400 px-3 py-1 text-xs font-semibold inline">
        {discount}
      </p>
    </div>
  );
};

export default ProductCart;
