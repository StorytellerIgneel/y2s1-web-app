import { useState } from "react";
import PaymentOption from "../Payment/PaymentOption";

const paymentMethods = [
  {
    id: "creditCard",
    value: "credit card",
    imageSrc: "../../../images/payment-methods/credit_card.png",
    altText: "Credit Card",
    labelText: "Credit Card",
  },
  {
    id: "touchNGo",
    value: "touch n go",
    imageSrc: "../../../images/payment-methods/Touch_'n_Go_logo.svg",
    altText: "Touch 'n Go",
    labelText: "Touch 'n Go",
  },
  {
    id: "shopeePay",
    value: "shopeepay",
    imageSrc: "../../../images/payment-methods/shopeepay4268.jpg",
    altText: "ShopeePay",
    labelText: "ShopeePay",
  },
  {
    id: "grabPay",
    value: "grabpay",
    imageSrc:
      "../../../images/payment-methods/GrabPay_Final_Logo_RGB_green_horizontal-01.png",
    altText: "GrabPay",
    labelText: "GrabPay",
  },
];

function PaymentPage() {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");

  const handlePaymentMethodChange = (event) => {
    setSelectedPaymentMethod(event.target.value);
  };

  const isCreditCardFormValid = () =>{
    
  };

  return (
    <div>
      <h1>Checkout</h1>
      <div className="flex items-center">
        <div className="relative flex items-center justify-center pr-4">
          <span className="absolute font-bold text-white">1</span>
          <div className="h-8 w-8 rounded-full bg-black"></div>
        </div>
        <p className="font-bold">Select payment method</p>
      </div>
      <form
        method="post"
        className="m-auto flex w-[80%] flex-col items-center space-y-3 p-5"
      >
        {paymentMethods.map((method) => (
          <PaymentOption
            key={method.id}
            id={method.id}
            value={method.value}
            imageSrc={method.imageSrc}
            altText={method.altText}
            labelText={method.labelText}
            checked={selectedPaymentMethod === method.value}
            onChange={handlePaymentMethodChange}
            showCreditCardForm={selectedPaymentMethod === "credit card"}
          />
        ))}
        <input
          type="submit"
          className="button w-[30%] self-end bg-red-600 hover:bg-red-800 disabled:bg-gray-500"
          disabled={selectedPaymentMethod === 'credit card' && !isCreditCardFormValid()}
          value="Continue"
        />
      </form>
    </div>
  );
}

export default PaymentPage;
