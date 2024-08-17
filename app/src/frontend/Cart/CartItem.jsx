function CartItem() {
  return (
    <div>
      <div className="flex justify-between w-auto">
        <img src="" alt="game pic" />
        <div>
          <div className="flex justify-between">
            <div>Type</div>
            <div className="flex">
              <div>discount</div>
              <span>original price cut</span>
              <span>Price now</span>
            </div>
          </div>
          <div>Game name</div>
          <div className="flex justify-between">
            <div>Platforms</div>
            <div className="flex justify-between">
              <span>Remove</span>
              <span>Move to Wishlist</span>
            </div>
          </div>
        </div>
      </div>
      <div className="h-0.5 w-auto bg-gray-300"></div>
    </div>
  );
}

export default CartItem;
