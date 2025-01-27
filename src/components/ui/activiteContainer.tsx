import Image from "next/image";
import React from "react";

export default function ActiviteContainer({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image: string;
}) {
  return (
    <div className="w-[90%] mx-auto flex flex-col items-center gap-8 md:flex-row md:justify-between mt-8 sm:mt-0">
      <div
        className={` mx-auto flex flex-col items-start md:w-1/2 md:max-w-lg md:max-w-xl xl:max-w-2xl `}
      >
        <h2 className={`text-3xl md:text-4xl bold  mb-6 `}>{title}</h2>
        <div className="text-left">
          <p className="hidden text-lg font-light lg:block text-white  mb-4 ">
            {description}
          </p>
          <p className="text-white text-lg font-light mb-4 ">
            {" "}
            Tous équipements hydraulique & pneumatique dans secteurs Industries,
            BTP, Marine
          </p>
        </div>
      </div>
      {/* md:bg-[#F7EDDB] */}
      <div className={`relative w-full h-[280px]  md:w-1/2 md:h-[350px] `}>
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
