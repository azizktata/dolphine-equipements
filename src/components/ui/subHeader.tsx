import Link from "next/link";
import React from "react";

export default function SubHeader() {
  const menuItems = [
    { label: "hydrauliques", path: "./produits/hydrauliques" },
    { label: "pneumatiques", path: "./produits/pneumatiques" },
    {
      label: "assainisement et nettoyage",
      path: "./produits/assainissement-et-nettoyage",
    },
  ];
  return (
    <div className=" ">
      <div className="flex w-full text-sm  justify-between gap-2 sm:text-lg sm:gap-4 md:gap-8 lg:gap-16 items-center md:justify-center py-5 font-normal border-b-2  border-[#4187C6]">
        {menuItems.map((item, index) => (
          <Link key={index} href={item.path}>
            <p className="text-[#22222]">{item.label}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
