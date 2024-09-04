import React from 'react'
import { products } from '../products'
import ProductCart from '../Cart/ProductCard'

const Home = () => {
  return (
    <div>
      <h1>Store is here</h1>
      <div className="grid lg:grid-cols-5 md:grid-cols-7 sm:grid-cols-7 gap-5">
        {products.map((product, key) => 
          <ProductCart  key={key} data={product}/>
        )}
      </div>

    </div>
  )
}

export default Home