function OrderSummary() {
  return (
    <div className="h-auto w-auto flex-col space-y-7 rounded-md bg-gray-200 px-7 pb-10 pt-5">
      <p className="text-lg font-bold">Order Summary</p>
      <div className="flex-col space-y-4">
        <div className="flex justify-between">
          <span className="text-sm">Price</span>
          <span className="text-sm">RM xx.xx</span>
        </div>
        <div className="flex justify-between">
          <span className="text-sm">Sale Discount</span>
          <span className="text-sm">-RM xx.xx</span>
        </div>
        <div className="flex justify-between">
          <span className="text-sm">Taxes</span>
          <span className="text-sm">Calculated at Checkout</span>
        </div>
        <div className="h-0.5 w-auto bg-gray-400"></div>
        <div className="flex justify-between">
          <span className="text-md font-bold">Subtotal</span>
          <span className="text-md font-bold">RM xx.xx</span>
        </div>
      </div>
      <button className="button w-full bg-red-600 hover:bg-red-800">Checkout</button>
    </div>
  );
}

export default OrderSummary;
