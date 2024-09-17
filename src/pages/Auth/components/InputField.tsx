/**
 * This code was generated by Builder.io.
 */
import React from "react";

interface InputFieldProps {
  label: string;
  type?: string;
  required?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  type = "text",
  required = false,
}) => {
  const id = label.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="mt-4">
      <label htmlFor={id} className="text-lg">
        {label} {required && "*"}
      </label>
      <input
        id={id}
        type={type}
        required={required}
        className="flex shrink-0 mt-2.5 max-w-full bg-white rounded-xl border-2 border-red-600 border-solid h-[50px] w-[300px]"
      />
    </div>
  );
};

export default InputField;