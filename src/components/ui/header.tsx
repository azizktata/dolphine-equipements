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
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/dropdown";

import { Phone } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Button } from "./button";
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    { label: "Qui sommes nous", path: "/qui-sommes-nous" },
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
      className="bg-[#092844]"
      isMenuOpen={isMenuOpen}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="lg:hidden text-gray-200"
        />
        <NavbarBrand>
          <Link className="text-white hidden sm:flex" href="/">
            {/* <Image
              src={"/logo_dolphin.svg"}
              alt="hydrauliques"
              width={46}
              height={46}
              priority
              className="text-[#316F9E] "
            /> */}
            Dolphin Equipements
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden lg:flex gap-16 " justify="center">
        <NavbarItem>
          <Link
            className={
              currentPath.includes("/qui-sommes-nous")
                ? "text-white text-lg"
                : "text-gray-300 text-lg hover:text-gray-400 cursor-pointer"
            }
            href="/qui-sommes-nous"
          >
            Qui sommes nous
          </Link>
        </NavbarItem>
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <span
                className={
                  currentPath.includes("/produits")
                    ? "text-white text-lg"
                    : "text-gray-300 text-lg hover:text-gray-400 cursor-pointer"
                }
              >
                Nos produits
              </span>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="Produits Dolhpines"
            className="w-auto  text-center"
            itemClasses={{
              base: "gap-4",
            }}
          >
            <DropdownItem key="autoscaling">
              <Link className="text-base" href="/produits/hydrauliques">
                Hydrauliques
              </Link>
            </DropdownItem>
            <DropdownItem
              key="usage_metrics"
              // description="Real-time metrics to debug issues. Slow query added? We’ll show you exactly where."
              // startContent={icons.activity}
            >
              <Link className="text-base" href="/produits/pneumatiques">
                Pneumatiques
              </Link>
            </DropdownItem>
            <DropdownItem
              key="production_ready"
              // description="ACME runs on ACME, join us and others serving requests at web scale."
              // startContent={icons.flash}
            >
              <Link
                className="text-base"
                href="/produits/assainissement-et-nettoyage"
              >
                Assainissement
              </Link>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <NavbarItem>
          <Link
            className={
              currentPath.includes("/contactez-nous")
                ? "text-white text-lg"
                : "text-gray-300 text-lg hover:text-gray-400 cursor-pointer"
            }
            href="/contactez-nous"
          >
            Contactez-nous
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            className="text-[#2E699E] hover:text-[#1F3A75] "
            variant="outline"
            onClick={handleWhatsAppCall}
          >
            <Phone size={16} />
            +216 58 432 376
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="flex flex-col gap-8 pt-8 ">
        {menuItems.map((item, index) => (
          <NavbarMenuItem className="border-b pb-2 " key={`${item}-${index}`}>
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
