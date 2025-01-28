import Link from "next/link";
import React from "react";

export default function SubHeader() {
  const menuItems = [
    { label: "hydrauliques", path: "/produits/hydrauliques" },
    { label: "pneumatiques", path: "/produits/pneumatiques" },
    {
      label: "assainisement et nettoyage",
      path: "/produits/assainissement-et-nettoyage",
    },
  ];
  return (
    <div className=" ">
      <div className="flex w-full text-xs xs:text-sm   gap-2 xs:gap-4 lg:text-lg sm:gap-8 md:gap-12 lg:gap-16 items-center justify-center py-5 font-medium border-b-2  border-[#4187C6]">
        {menuItems.map((item, index) => (
          <Link key={index} href={item.path}>
            <p className="text-[#22222]">{item.label}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
