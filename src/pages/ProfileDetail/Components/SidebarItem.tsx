/**
 * This code was generated by Builder.io.
 */
import React from "react";

interface SidebarItemProps {
  label: string;
  isActive: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ label, isActive }) => {
  const baseClasses =
    "px-4 py-4 mt-4 text-2xl bg-orange-50 border-t border-b border-solid border-y-red-600 text-slate-700 max-md:pr-5";
  const activeClasses =
    "border-red-600 border-solid border-l-[5px] border-l-red-600";

  return (
    <div className={`${baseClasses} ${isActive ? activeClasses : ""}`}>
      {label}
    </div>
  );
};

export default SidebarItem;
