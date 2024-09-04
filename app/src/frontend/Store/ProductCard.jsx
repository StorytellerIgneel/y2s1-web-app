import React from "react";
import { Link } from "react-router-dom";

function ProductCard({ slug, title, imgSrc, price }) {
    return (
        <div className="rounded-xl bg-white p-5 shadow-sm hover:bg-gray-200">
          <Link to={`/store/${slug}`}> 
            <img className="h-40 rounded-md object-cover" src={imgSrc} alt={title} />
          </Link>
          <Link to={`/store/${slug}`}> 
            <p className="font-bold text-lg py-2">{title}</p>
          </Link>
            <p>{parseFloat(price) === 0.00 ? "FREE" : `RM ${price}`}</p>
        </div>
    );
}

export default ProductCard;
