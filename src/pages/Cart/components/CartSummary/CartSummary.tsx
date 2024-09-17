/**
 * This code was generated by Builder.io.
 */
import React from "react";

interface CartSummaryProps {
  subtotal: number;
  shipping: string;
  coupon: number;
  total: number;
}

const CartSummary: React.FC<CartSummaryProps> = ({
  subtotal,
  shipping,
  coupon,
  total,
}) => {
  return (
    <section className="flex flex-col px-20 pt-5 pb-14 mx-auto w-full text-red-600 bg-orange-50 max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <h2 className="text-4xl font-bold">CART SUBTOTAL</h2>
      <div className="flex gap-10 justify-between mt-4">
        <span className="text-lg">Order Subtotal</span>
        <span className="text-lg">${subtotal.toFixed(2)}</span>
      </div>
      <hr className="shrink-0 mt-3.5 max-w-full h-0.5 bg-red-600 border-2 border-red-600 border-solid w-[386px]" />
      <div className="flex gap-5 justify-between mt-4 text-lg">
        <span>Shipping</span>
        <span>{shipping}</span>
      </div>
      <hr className="shrink-0 mt-3.5 max-w-full h-0.5 bg-red-600 border-2 border-red-600 border-solid w-[386px]" />
      <div className="flex gap-5 justify-between mt-4 text-lg whitespace-nowrap">
        <span>Coupon</span>
        <span>${coupon.toFixed(2)}</span>
      </div>
      <hr className="shrink-0 mt-3.5 max-w-full h-0.5 bg-red-600 border-2 border-red-600 border-solid w-[386px]" />
      <div className="flex gap-5 justify-between mt-4 text-lg whitespace-nowrap">
        <span>Total</span>
        <span>${total.toFixed(2)}</span>
      </div>
      <hr className="shrink-0 mt-3.5 max-w-full h-0.5 bg-red-600 border-2 border-red-600 border-solid w-[386px]" />
      <button className="self-start px-10 py-5 mt-20 text-lg text-white bg-red-600 rounded-xl max-md:px-5 max-md:mt-10">
        Proceed To Checkout
      </button>
    </section>
  );
};

export default CartSummary;