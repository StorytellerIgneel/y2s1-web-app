function OrderSummary() {
  return (
    <div className="bg-gray-200 w-auto h-auto py-5 px-6 rounded-md flex-col space-y-7">
      <p className="text-lg font-bold">Order Summary</p>
      <div className="flex-col space-y-4">
        <div className="flex justify-between">
          <span className="text-xs">Price</span>
          <span className="text-xs">RM xx.xx</span>
        </div>
        <div className="flex justify-between">
          <span className="text-xs">Sale Discount</span>
          <span className="text-xs">RM xx.xx</span>
        </div>
        <div className="flex justify-between">
          <span className="text-xs">Taxes</span>
          <span className="text-xs">RM xx.xx</span>
        </div>
        <div className="h-0.5 w-auto bg-gray-400"></div>
        <div className="flex justify-between">
          <span className="text-sm font-bold">Subtotal</span>
          <span className="text-sm font-bold">RM xx.xx</span>
        </div>
      </div>
      <button className="button bg-red-600">Checkout</button>
    </div>
  );
}

export default OrderSummary;
