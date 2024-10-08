/**
 * This code was generated by Builder.io.
 */
import React from "react";
import FoodItem from "./FoodItem";
import { FoodItemProps } from "./types";

const foodItems: FoodItemProps[] = [
  {
    title: "Fresh cola drink with green lime",
    description:
      "Topped with chicken, onion, capsicum, black olive & Green chilli",
    price: 150,
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/d44f57fdda91a375019a06d7b09c66b8d5e6a761d79ced8a203c74840c7ce0dd?placeholderIfAbsent=true&apiKey=e0522cabc7bc4885906fcb2658eca109",
    imageAlt: "Fresh cola drink with green lime",
  },
  {
    title: "Ice cream cone",
    description:
      "Topped with chicken, onion, capsicum, black olive & Green chilli",
    price: 150,
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/6eb8601e7f193a90d123ee63ad0942fecdc6016ec56cf8a30c661a8224d38b5d?placeholderIfAbsent=true&apiKey=e0522cabc7bc4885906fcb2658eca109",
    imageAlt: "Ice cream cone",
  },
  {
    title: "Chocolate ice cream",
    description:
      "Topped with chicken, onion, capsicum, black olive & Green chilli",
    price: 150,
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/1ecb09f7e32ae42204baa41624f3b3343dbd6f112a05280cc9097e5c4d3d4c9a?placeholderIfAbsent=true&apiKey=e0522cabc7bc4885906fcb2658eca109",
    imageAlt: "Chocolate ice cream",
  },
  {
    title: "Chocolate topping for ice cream cups",
    description:
      "Topped with chicken, onion, capsicum, black olive & Green chilli",
    price: 150,
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/478c6edff68b1a83ab363e72722e7aaa4bfcfc20882740c85fb0941b92978302?placeholderIfAbsent=true&apiKey=e0522cabc7bc4885906fcb2658eca109",
    imageAlt: "Chocolate topping for ice cream cups",
  },
  {
    title: "Healthy breakfast",
    description:
      "Topped with chicken, onion, capsicum, black olive & Green chilli",
    price: 150,
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/609efc56d72d9599c77bb77f97ace0f889aa2f0ee434d048a7d1aebfd5e264f2?placeholderIfAbsent=true&apiKey=e0522cabc7bc4885906fcb2658eca109",
    imageAlt: "Healthy breakfast",
  },
  {
    title: "Breakfast with coffee and fresh croissants",
    description:
      "Topped with chicken, onion, capsicum, black olive & Green chilli",
    price: 150,
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/d5fda0a0ef138422efe250303d1a4d731178afb0665ff6e420caae381ca215df?placeholderIfAbsent=true&apiKey=e0522cabc7bc4885906fcb2658eca109",
    imageAlt: "Breakfast with coffee and fresh croissants",
  },
  {
    title: "Ried eggs, sausages, zucchini",
    description:
      "Topped with chicken, onion, capsicum, black olive & Green chilli",
    price: 150,
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/d31fb94ed5b7e6556d4f7929be6ce727b852254d3ca1ca041e57c9bb81385ee1?placeholderIfAbsent=true&apiKey=e0522cabc7bc4885906fcb2658eca109",
    imageAlt: "Ried eggs, sausages, zucchini",
  },
  {
    title: "Salad, fried eggs and pastry",
    description:
      "Topped with chicken, onion, capsicum, black olive & Green chilli",
    price: 150,
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/de939f15417647fb442bd7d8f7c9c705a608c3f10515dda978f6dee3d8eb7990?placeholderIfAbsent=true&apiKey=e0522cabc7bc4885906fcb2658eca109",
    imageAlt: "Salad, fried eggs and pastry",
  },
];

const FoodMenuSpecial: React.FC = () => {
  return (
    <main className="flex flex-col md:px-[100px] mt-5">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/d86d931f38fdd01a1de4852bc2e455ffb30f2fea7c3abda8f92bc1bf5baa5128?placeholderIfAbsent=true&apiKey=e0522cabc7bc4885906fcb2658eca109"
        alt="Food menu header"
        className="object-contain w-full shadow-sm aspect-[3.76] max-md:max-w-full"
      />
      <section className="mt-6 max-md:mr-2 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          {foodItems.slice(0, 2).map((item, index) => (
            <FoodItem key={index} {...item} />
          ))}
        </div>
      </section>
      <section className="mt-8 max-md:mr-2 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          {foodItems.slice(2, 4).map((item, index) => (
            <FoodItem key={index} {...item} />
          ))}
        </div>
      </section>
      <section className="mt-8 max-md:mr-2 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          {foodItems.slice(4, 6).map((item, index) => (
            <FoodItem key={index} {...item} />
          ))}
        </div>
      </section>
      <section className="mt-8 max-md:mr-2 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          {foodItems.slice(6, 8).map((item, index) => (
            <FoodItem key={index} {...item} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default FoodMenuSpecial;
