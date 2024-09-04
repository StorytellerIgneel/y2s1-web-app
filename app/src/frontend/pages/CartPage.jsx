import CartItem from "../Cart/CartItem";
import OrderSummary from "../Cart/OrderSummary";

function CartPage() {
  // const [cart, setCart] = useState({});

  return (
    <div className="CartPage">
      <h1>My Cart</h1>
      <div className="flex justify-between">
        <div className="w-[60%]">
          <CartItem />
        </div>
        <div className="h-screen w-[32%] pb-5">
          <div className="sticky top-5">
            <OrderSummary />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
