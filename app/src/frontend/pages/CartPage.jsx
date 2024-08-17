import CartItem from "../Cart/CartItem";
import OrderSummary from "../Cart/OrderSummary";

function CartPage() {
  return (
    <div className="CartPage">
      <h1>My Cart</h1>
      <div className="flex justify-between">
        <div className="w-[60%]">
          <CartItem />
        </div>
        <div className="w-[35%]">
          <OrderSummary />
        </div>
      </div>
    </div>
  );
}

export default CartPage;
