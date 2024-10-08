/**
 * This code was generated by Builder.io.
 */
import React from "react";
import FoodMenuItem from "./FoodMenuItem";

interface FoodItem {
  title: string;
  description: string;
  price: string;
  imageSrc: string;
}

interface FoodMenuColumnProps {
  items: FoodItem[];
}

const FoodMenuColumn: React.FC<FoodMenuColumnProps> = ({ items }) => {
  return (
    <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
      <div className="flex flex-col w-full max-md:mt-10 max-md:max-w-full">
        {items.map((item, index) => (
          <div key={index} className={index > 0 ? "mt-8" : ""}>
            <FoodMenuItem {...item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodMenuColumn;
