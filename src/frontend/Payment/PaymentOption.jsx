function PaymentOption({
  id,
  value,
  imageSrc,
  altText,
  labelText,
  checked,
  onChange,
  showCreditCardForm,
  onCreditCardInputChange,
  cardNumber,
  expiration,
  cvv,
  errors,
}) {
  return (
    <div className="w-full rounded-md bg-gray-200 p-5">
      <div className="flex items-center gap-4">
        <input
          type="radio"
          id={id}
          name="paymentMethod"
          value={value}
          checked={checked}
          onChange={onChange}
          className="h-5 w-5"
        />
        <img
          className="h-10 w-16 rounded-md border border-gray-400 bg-white object-scale-down"
          src={imageSrc}
          alt={altText}
        />
        <label htmlFor={id}>{labelText}</label>
      </div>
      {value === "Credit Card" && showCreditCardForm && (
        <form className="credit-card-form mt-4 w-full rounded-md bg-gray-100 p-5">
          <h2 className="mb-3 font-bold">CARD DETAILS</h2>
          <div className="flex flex-col space-y-3">
            <div className="flex flex-col">
              <label htmlFor="cardNumber">Card Number</label>
              <input
                type="text"
                id="cardNumber"
                name="cardNumber"
                maxLength={16}
                className="rounded border p-2"
                value={cardNumber}
                onChange={onCreditCardInputChange}
                required
              />
              {errors.cardNumber && (
                <span className="text-red-500">{errors.cardNumber}</span>
              )}
            </div>
            <div className="flex justify-between gap-4">
              <div className="flex w-full flex-col">
                <label htmlFor="expiration">Expiration</label>
                <input
                  type="text"
                  id="expiration"
                  name="expiration"
                  className="rounded border p-2"
                  maxLength={5}
                  placeholder="MM/YY"
                  value={expiration}
                  onChange={onCreditCardInputChange}
                  required
                />
                {errors.expiration && (
                  <span className="text-red-500">{errors.expiration}</span>
                )}
              </div>
              <div className="flex w-full flex-col">
                <label htmlFor="cvv">CVV</label>
                <input
                  type="text"
                  id="cvv"
                  name="cvv"
                  className="rounded border p-2"
                  maxLength={3}
                  value={cvv}
                  onChange={onCreditCardInputChange}
                  required
                />
                {errors.cvv && (
                  <span className="text-red-500">{errors.cvv}</span>
                )}
              </div>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}

export default PaymentOption;
