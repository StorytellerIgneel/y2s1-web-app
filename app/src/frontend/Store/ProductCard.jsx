import React from "react";
import { Link } from "react-router-dom";

function ProductCard({ slug, title, imgSrc, price }) {
    return (
        <div className="rounded-xl bg-gray-200 m-3 p-3 shadow-sm hover:bg-red-100 hover:scale-105 max-w-xs h-auto ">
          <Link to={`/store/${slug}`}> 
            <img className="h-40 rounded-md object-scale-down" src={imgSrc} alt={title} />
          </Link>
          <Link to={`/store/${slug}`}> 
            <p className="font-bold text-lg py-2">{title}</p>
          </Link>
            <p>{parseFloat(price) === 0.00 ? "FREE" : `RM ${price}`}</p>
        </div>
    );
}

export default ProductCard;
