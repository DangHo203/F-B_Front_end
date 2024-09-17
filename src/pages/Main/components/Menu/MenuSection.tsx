/**
 * This code was generated by Builder.io.
 */
import React from "react";
import MenuItem from "./MenuItem";

interface MenuSectionProps {
  items: Array<{
    name: string;
    description: string;
    price: string;
  }>;
}

const MenuSection: React.FC<MenuSectionProps> = ({ items }) => (
  <section className="flex flex-col items-start w-full max-md:mt-10 max-md:max-w-full">
    {items.map((item, index) => (
      <MenuItem key={index} {...item} />
    ))}
  </section>
);

export default MenuSection;
