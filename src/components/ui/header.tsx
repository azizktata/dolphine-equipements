"use client";

import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/navbar";

import { Phone } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Button } from "./button";
import Image from "next/image";
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    { label: "Accueil", path: "/" },
    { label: "Nos produits", path: "/produits" },
    { label: "Contactez-nous", path: "/contactez-nous" },
  ];
  const handleWhatsAppCall = () => {
    const phoneNumber = "21658432372";
    const url = `https://wa.me/${phoneNumber}`;
    window.open(url, "_blank");
  };
  const handleMenuItemClick = () => {
    setIsMenuOpen(false); // Close the menu when an item is clicked
  };
  const currentPath = usePathname();
  return (
    <Navbar
      shouldHideOnScroll
      isBordered
      onMenuOpenChange={setIsMenuOpen}
      className="bg-white py-4 lg:px-4 border-[#4187C6] border-b-3"
      isMenuOpen={isMenuOpen}
      maxWidth="full"
    >
      <NavbarBrand className=" max-w-[250px]">
        <Link className="text-white " href="/">
          <Image
            src={"/logo.svg"}
            alt="logo dolphin"
            width={211}
            height={60}
            priority
          />
        </Link>
      </NavbarBrand>

      <NavbarContent
        className=" hidden md:flex gap-4 lg:gap-8 font-medium "
        justify="start"
      >
        <NavbarItem>
          <Link
            className={
              currentPath.includes("/")
                ? "text-[#222222] text-sm sm:text-base lg:text-lg "
                : "text-[#222222] text-sm sm:text-base lg:text-lg hover:text-gray-400 cursor-pointer"
            }
            href="/"
          >
            Accueil
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Link
            className={
              currentPath.includes("/produits")
                ? "text-[#222222] text-sm sm:text-base lg:text-lg"
                : "text-[#222222]  text-sm sm:text-base lg:text-lg hover:text-gray-400 cursor-pointer"
            }
            href={"/produits"}
          >
            Nos produits
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Link
            className={
              currentPath.includes("/contactez-nous")
                ? "text-[#222222] text-sm sm:text-base lg:text-lg"
                : "text-[#222222]  text-sm sm:text-base lg:text-lg hover:text-gray-400 cursor-pointer"
            }
            href="/contactez-nous"
          >
            Contactez-nous
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent className="md:hidden" justify="end">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>
      <NavbarContent className="hidden md:flex gap-2 lg:gap-4" justify="end">
        <NavbarItem>
          <a
            target="_blank"
            href="https://www.google.com/maps/place/DOLPHIN+EQUIPEMENTS/@36.7623251,10.2236865,17z/data=!3m1!4b1!4m6!3m5!1s0x12fd379bc05dd4d5:0x26a7e7cff34d891e!8m2!3d36.7623251!4d10.2262614!16s%2Fg%2F11t4fw6lrr?entry=ttu&g_ep=EgoyMDI0MTEyNC4xIKXMDSoASAFQAw%3D%3D"
          >
            <Button
              className="bg-[#4187C640] text-[#222222] text-sm lg:text-base font-normal capitalize px-5 py-5 lg:px-6 lg:py-6"
              variant="outline"
            >
              <Image
                src={"/maps.svg"}
                alt="logo google maps"
                width={22}
                height={22}
                priority
              />
              localisation
            </Button>
          </a>
        </NavbarItem>
        <NavbarItem>
          <Button
            className="bg-[#4187C640] text-[#222222] text-sm lg:text-base font-normal px-5 py-5 lg:px-6 lg:py-6"
            variant="outline"
            onClick={handleWhatsAppCall}
          >
            <Phone size={16} color="#4085C6" />
            58 432 376
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="flex flex-col gap-8 pt-24 ">
        {menuItems.map((item, index) => (
          <NavbarMenuItem
            className="border-b pb-2 text-xl"
            key={`${item}-${index}`}
          >
            <Link
              onClick={handleMenuItemClick}
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full"
              href={item.path}
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
