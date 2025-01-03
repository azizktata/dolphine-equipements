import Image from "next/image";
import React from "react";

export default function ActiviteContainer({
  title,
  description,
  image,
  inverted = false,
  bgColor = "bg-[#D7E6F4]",
}: {
  title: string;
  description: string;
  image: string;
  inverted?: boolean;
  bgColor?: string;
}) {
  const order1 = inverted ? "order-2" : "order-1";
  const order2 = inverted ? "order-2 sm:order-1" : "order-2";
  return (
    <div className="w-[90%] mx-auto flex flex-col items-center gap-8 sm:flex-row sm:justify-between">
      <div
        className={`max-w-sm mx-auto flex flex-col items-center sm:items-start sm:w-1/2 sm:max-w-lg md:max-w-xl xl:max-w-2xl ${order1}`}
      >
        <h2
          className={`text-3xl md:text-4xl bold  mb-6 after:content-[''] after:block after:w-full after:h-[2px] after:bg-[#30085E] after:mt-3 after:rounded-md after:scale-x-50 after:origin-center sm:after:origin-left`}
        >
          {title}
        </h2>
        <div className="text-center sm:text-left">
          <p className="hidden text-lg font-light lg:block text-gray-600  mb-4 ">
            {description}
          </p>
          <p className="text-gray-600 text-lg font-light mb-4 ">
            {" "}
            Tous équipements hydraulique & pneumatique dans secteurs Industries,
            BTP, Marine
          </p>
        </div>
      </div>
      {/* md:bg-[#F7EDDB] */}
      <div
        className={`relative w-full h-[280px] ${bgColor} sm:w-1/2 md:h-[350px] ${order2}`}
      >
        <Image
          alt="NextUI hero Image with delay"
          src={image}
          className="object-cover  p-1 md:-ml-4 md:mt-3 "
          fill
        />
      </div>
    </div>
  );
}
