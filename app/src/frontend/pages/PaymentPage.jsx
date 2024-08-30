function PaymentPage() {
  return (
    <div>
      <h1>Checkout</h1>
      <div className="flex items-center">
        <div className="flex items-center justify-center pr-4">
          <span className="absolute font-bold text-white">1</span>
          <div className="h-8 w-8 rounded-full bg-black"></div>
        </div>
        <p className="font-bold">Select payment method</p>
      </div>
      <form action="post" className="flex flex-col items-center space-y-3 w-[80%] m-auto p-5">
        <div className="flex w-full items-center gap-4 rounded-md bg-gray-200 p-5">
          <input
            className="h-5 w-5"
            type="radio"
            name="paymentMethod"
            value="credit card"
          />
          <img className="h-8 w-16 bg-white object-scale-down" src="../../../images/payment-methods/62827.png" alt="" />
          <label htmlFor="credit card">Credit Card</label>
        </div>
        <div className="flex w-full items-center gap-4 rounded-md bg-gray-200 p-5">
          <input
            className="h-5 w-5"
            type="radio"
            name="paymentMethod"
            value="touch n go"
          />
          <img className="h-8 w-16 bg-white object-scale-down" src="../../../images/payment-methods/Touch_'n_Go_logo.svg" alt="" />
          <label htmlFor="touch n go">Touch &#39;n Go</label>
        </div>
        <div className="flex w-full items-center gap-4 rounded-md bg-gray-200 p-5">
          <input className="h-5 w-5" type="radio" name="paymentMethod" />
          <img className="h-8 w-16 bg-white object-scale-down" src="../../../images/payment-methods/shopeepay4268.jpg" alt="" />
          <label htmlFor="">ShopeePay</label>
        </div>
        <div className="flex w-full items-center gap-4 rounded-md bg-gray-200 p-5">
          <input className="h-5 w-5" type="radio" name="paymentMethod" />
          <img className="h-8 w-16 bg-white object-scale-down" src="../../../images/payment-methods/GrabPay_Final_Logo_RGB_green_horizontal-01.png" alt="" />
          <label htmlFor="">GrabPay</label>
        </div>
        <input
        type="submit"
          className="button w-[30%] bg-red-600 hover:bg-red-800 self-end"
          value="Continue"
        />
      </form>
    </div>
  );
}

export default PaymentPage;
