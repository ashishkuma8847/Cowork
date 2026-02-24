"use client";

import clsx from "clsx";
import  { InputHTMLAttributes, ReactNode } from "react";

type Props = {
  icon?: ReactNode;
  image?: string;
  iconPosition?: "left" | "right";
  className?: string;
  inputClass?: string;
  iconClass?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export default function CustomInput({
  type = "text",
  icon,
  image,
  iconPosition = "left",
  placeholder = "Enter value",
  className = "",
  inputClass = "",
  iconClass = "w-6 h-6",
  ...props
}: Props) {
  const renderIconOrImage = () => {
    if (icon)
      return (
        <span className={clsx("text-gray-500", iconClass)}>
          {icon}
        </span>
      );

    if (image)
      return (
        <img
          src={image}
          alt="icon"
          className={clsx("object-contain", iconClass)}
        />
      );

    return null;
  };

  return (
    <div
      className={clsx(
        "flex items-center bg-whiteGray rounded-[10px] pl-6 py-3 shadow-sm w-fit transition-all duration-300",
        iconPosition === "right" && "flex-row-reverse",
        className
      )}
    >
      {renderIconOrImage() && (
        <div className="mr-2">
          {renderIconOrImage()}
        </div>
      )}

      <input
        type={type??""}
        placeholder={placeholder??""}
        className={clsx(
          "bg-transparent outline-none border-none font-inter text-darkGray placeholder:text-gray-500 leading-[130%] text-[10px] lg:text-lg w-full",
          inputClass??""
        )}
        {...props}
      />
    </div>
  );
}