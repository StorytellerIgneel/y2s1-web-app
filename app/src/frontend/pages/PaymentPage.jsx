import { useContext } from "react";
import { CartContext } from "../Cart/CartContext";
import { PaymentItem } from "../Cart/CartItem";
import "../../index.css"

function PaymentPage({ selcetedPaymentMethod }) {
  return (
    <div>
      <h1>Checkout</h1>
      <div className="flex items-center">
        <div className="relative flex items-center justify-center pr-4">
          <span className="absolute font-bold text-white">2</span>
          <div className="h-8 w-8 rounded-full bg-black"></div>
        </div>
        <p className="text-lg font-bold">Payment</p>
      </div>
      <div className="inine-flex">
        <div>
          <CartItemsList className="w-1/2" />
          <div>sdsdsd</div>
        </div>
        <div>
          <TermsAndAgreement selcetedPaymentMethod={selcetedPaymentMethod} />
        </div>
      </div>
    </div>
  );
}

function CartItemsList() {
  const { cart } = useContext(CartContext);
  return cart.length === 0 ? (
    <p>Your cart is empty</p>
  ) : (
    cart.map((game) => (
      <PaymentItem
        key={game.id}
        title={game.title}
        imgSrc={game.img_src}
        price={game.price}
      />
    ))
  );
}

function TermsAndAgreement({ selcetedPaymentMethod }) {
  return (
    <div>
      <div className="bg-gray-200 px-16 rounded-lg">
        <p>Payment via {selcetedPaymentMethod}</p>
        <div className="inline-flex bg-gray-300 rounded-lg p-5">
          <input type="checkbox" id="terms" name="terms" value="terms" required/>
          <label htmlFor="terms" className="text-justify px-5">
            I agree to the terms of the GameNonStop Subscriber Agreement.{" "}
            {selcetedPaymentMethod} transactions are authorized through IntelPay
            website. Click the button below to open a new web browser window to
            initiate the transaction.
          </label>
        </div>
      </div>
      <input type="button" className="button w-[30%] self-end bg-red-600 hover:bg-red-800 disabled:bg-gray-500" value="Checkout" />
    </div>
  );
}
export default PaymentPage;
