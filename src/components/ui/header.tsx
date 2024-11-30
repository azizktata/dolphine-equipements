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
import { Link } from "@nextui-org/link";

import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = ["Nos Activités", "Nos Produits", "Notre Catalogues"];
  const currentPath = usePathname();
  return (
    <Navbar
      shouldHideOnScroll
      isBordered
      onMenuOpenChange={setIsMenuOpen}
      className="bg-[#092844] text-[#F5F5F5]"
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Link href="/">
            <Image
              src={"/logo_dolphin.svg"}
              alt="hydrauliques"
              width={46}
              height={46}
              className="text-[#316F9E] "
            />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-16 " justify="center">
        <NavbarItem>
          <Link className="text-gray-300" href="./#activités">
            Nos Activités
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            href="/produits"
            aria-current="page"
            className={
              currentPath.includes("/produits") ? "text-white" : "text-gray-300"
            }
          >
            Nos Produits
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-gray-300" href="./#catalogues">
            Notre Catalogues
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            className="text-[#488DCA] hover:text-[#285C8A] "
            variant="outline"
          >
            <Phone size={16} />
            +216 58 432 372
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="flex flex-col gap-8 pt-8 ">
        {menuItems.map((item, index) => (
          <NavbarMenuItem className="border-b pb-2 " key={`${item}-${index}`}>
            <Link
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full"
              href={
                item === "Nos Produits"
                  ? "/produits"
                  : item === "Notre Catalogues"
                  ? "./#catalogues"
                  : "./#activités"
              }
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
