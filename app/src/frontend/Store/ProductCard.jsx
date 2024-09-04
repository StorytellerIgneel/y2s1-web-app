import React from "react";
import { Link } from "react-router-dom";

function ProductCard({ slug, id, title, imgSrc, description, rating, ratingNum, releaseDate, developer, publisher, price }) {
  console.log("ProductCard ID:", id);
    return (
        <div className="rounded-xl bg-white p-5 shadow-sm hover:bg-gray-200">
          <Link to={`/store/${slug}`}> 
            <img className="h-20 w-40 rounded-md object-cover" src={imgSrc} alt={title} />
          </Link>
          <Link to={`/store/${slug}`}> 
            <h2>{title}</h2>
          </Link>
            <p>id: {id}</p>
            <p>{description}</p>
            <p>Rating: {rating} ({ratingNum})</p>
            <p>Release Date: {releaseDate}</p>
            <p>Developer: {developer}</p>
            <p>Publisher: {publisher}</p>
            <p>Price: RM {price}</p>
        </div>
    );
}

export default ProductCard;
