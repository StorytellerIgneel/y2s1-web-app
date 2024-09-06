import { useContext } from "react";
import { CartContext } from "../Cart/CartContext";
import { PaymentItem } from "../Cart/CartItem";
import { UserProfileLeft } from "../include/UserProfile";
import "../../index.css";

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
      <div className="flex space-x-6 p-14">
        <div className="w-1/2">
          <CartItemsList />
          <div>sdsdsd</div>
        </div>
        <div className="w-1/2">
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
        key={game.game_id}
        title={game.title}
        imgSrc={game.img_src}
        price={game.price}
      />
    ))
  );
}

function TermsAndAgreement({ selcetedPaymentMethod }) {
  return (
    <div className="space-y-5">
      <div className="space-y-8 rounded-lg bg-gray-200 px-16 py-5">
        <UserProfileLeft />
        <div className="space-y-5">
          <p className="font-bold">Payment via {selcetedPaymentMethod}</p>
          <div className="inline-flex rounded-lg bg-gray-300 p-5">
            <input
              type="checkbox"
              id="terms"
              name="terms"
              value="terms"
              required
            />
            <label htmlFor="terms" className="px-5 text-justify text-xs">
              I agree to the terms of the GameNonStop Subscriber Agreement.{" "}
              {selcetedPaymentMethod} transactions are authorized through
              IntelPay website. Click the button below to open a new web browser
              window to initiate the transaction.
            </label>
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <input
          type="button"
          className="button w-[50%] bg-red-600 hover:bg-red-800 disabled:bg-gray-500"
          value="Checkout"
        />
      </div>
    </div>
  );
}
export default PaymentPage;