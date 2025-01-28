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
    <div className="w-full sm:w-[90%] mx-auto flex flex-col items-center gap-8 md:flex-row md:justify-between mt-8 sm:mt-0">
      <div
        className={` mx-auto flex flex-col items-start md:w-1/2 md:max-w-lg md:max-w-xl xl:max-w-2xl `}
      >
        <h1 className={`text-xl  md:text-3xl font-semibold  mb-6 `}>{title}</h1>
        <div className="text-left max-w-[600px]  ">
          <p className=" text-base md:text-xl font-normal !leading-10  text-white  mb-4 ">
            {description}
          </p>
          <p className="text-white text-base md:text-xl !leading-10  font-normal mb-4 ">
            {" "}
            Tous équipements hydraulique & pneumatique dans secteurs Industries,
            BTP, Marine
          </p>
        </div>
      </div>
      {/* md:bg-[#F7EDDB] */}
      <div
        className={`relative w-full h-[280px] rounded-2xl  md:w-1/2 md:h-[350px] `}
      >
        <Image
          alt="NextUI hero Image with delay"
          src={image}
          className="object-cover rounded-2xl p-1 md:-ml-4 md:mt-3 "
          fill
        />
      </div>
    </div>
  );
}
