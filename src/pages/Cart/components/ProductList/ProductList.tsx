import React from "react";
import ProductItem from "./ProductItem";
import { useSelector } from "react-redux";

interface ProductListProps {}

const ProductList: React.FC<ProductListProps> = ({}) => {
    const { items } = useSelector((state: any) => state.cartSlice);

    return (
        <section className="px-16 py-4  w-full max-md:px-5 max-md:max-w-full">
            <div className="max-sm:hidden sm:grid grid-cols-6 gap-4 p-4 text-[18px] font-bold text-orange-50 bg-red-600 shadow-xl">
                <div className="col-span-1 py-2">Product</div>
                <div className="col-span-1 py-2">Product Name</div>
                <div className="col-span-1 py-2">Price</div>
                <div className="col-span-1 py-2">Quantity</div>
                <div className="col-span-1 py-2">Total</div>
                <div className="col-span-1 py-2"></div>
            </div>
            <div className="flex flex-col max-sm:gap-5">
                {items.map(
                    (product: {
                        id: string;
                        title: string;
                        price: number;
                        quantity: number;
                        total: number;
                        image: string;
                    }) => (
                        <ProductItem key={product.id} product={product} />
                    )
                )}
            </div>
        </section>
    );
};

export default ProductList;
