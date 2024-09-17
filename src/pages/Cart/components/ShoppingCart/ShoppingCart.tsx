/**
 * This code was generated by Builder.io.
 */
import React from "react";
import ProductList from "../ProductList/ProductList";
import ShippingCalculator from "../ShippingCalculator/ShippingCalculator";
import CartSummary from "../CartSummary/CartSummary";
import { Product } from "../ProductList/types";

const products: Product[] = [
  {
    id: "1",
    name: "Belgium waffles with strawberries",
    price: 150,
    quantity: 1,
    total: 150,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/65fda94b799cf9cef403b0c5fff6eee128578d76dadfa368c7c8f612f698d33e?placeholderIfAbsent=true&apiKey=e0522cabc7bc4885906fcb2658eca109",
  },
  {
    id: "2",
    name: "Chicken skewers",
    price: 150,
    quantity: 2,
    total: 300,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/12994ccd704ea1eb2bce62fc060db6a9d9df2c5662b1dfc9a8e388bcdbfbb8b9?placeholderIfAbsent=true&apiKey=e0522cabc7bc4885906fcb2658eca109",
  },
];

const ShoppingCart: React.FC = () => {
  return (
    <main className="flex flex-col">
      <ProductList products={products} />
      <div className="mt-12 w-full max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <ShippingCalculator />
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <CartSummary
              subtotal={125.96}
              shipping="Free Shipping"
              coupon={28.0}
              total={506.0}
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default ShoppingCart;
