import { useContext, useState, useEffect } from "react";
import PaymentMethodModal from "../pages/PaymentMethodModal";
import { CartContext } from "./CartContext";
import Modal from "../include/Modal/Modal";

function OrderSummary() {
  const { getTotalPrice } = useContext(CartContext);
  const [checkoutOpen, setCheckoutOpen] = useState(false);

  useEffect(() => {
    if (checkoutOpen) {
      document.body.style.overflow = "hidden"; 
    } else {
      document.body.style.overflow = "auto"; 
    }
    return () => {
      document.body.style.overflow = "auto"; 
    };
  }, [checkoutOpen]);
  

  const handleCheckoutClick = () => {
    setCheckoutOpen(true); 
  };
  
  return (
    <div className="h-auto w-auto flex-col space-y-7 rounded-md bg-gray-200 px-7 pb-10 pt-5">
      <p className="text-lg font-bold">Order Summary</p>
      <div className="flex-col space-y-4">
        <div className="flex justify-between">
          <span className="text-sm">Price</span>
          <span className="text-sm">
            RM {parseFloat(getTotalPrice()).toFixed(2)}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-sm">Taxes</span>
          <span className="text-sm">Calculated at Checkout</span>
        </div>
        <div className="h-0.5 w-auto bg-gray-400"></div>
        <div className="flex justify-between">
          <span className="text-md font-bold">Subtotal</span>
          <span className="text-md font-bold">
            RM {parseFloat(getTotalPrice()).toFixed(2)}
          </span>
        </div>
      </div>
      <button
        className="button w-full bg-red-600 hover:bg-red-800"
        onClick={handleCheckoutClick}
      >
        Checkout
      </button>
      <Modal open={checkoutOpen} onClose={() => setCheckoutOpen(false) }>
          <PaymentMethodModal />
      </Modal>
    </div>
  );
}

export default OrderSummary;