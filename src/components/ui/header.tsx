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
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = ["Nos Activités", "Composants", "Nos Partenaires"];
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
        <NavbarBrand className="flex flex-col gap-2">
          {/* <AcmeLogo /> */}
          <Image
            src={"/logo_dolphin.svg"}
            alt="hydrauliques"
            width={46}
            height={46}
            className="text-[#316F9E] "
          />
          {/* <p className="text-xs text-inherit tracking-wide hidden sm:block">
            Dolphine Equipements
          </p> */}
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4 " justify="center">
        <NavbarItem>
          <Link className="text-[#F5F5F5]" href="#">
            Nos Activités
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className="text-[#F5F5F5]"
            href="/composants"
            aria-current="page"
          >
            Composants
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-[#F5F5F5]" href="#">
            Nos Partenaires
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button className="text-[#488DCA]" variant="outline">
            <Phone size={16} />
            <Link className="text-[#488DCA]" href="/login">
              +216 53 488 169
            </Link>
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full"
              href={item === "Composants" ? "/composants" : ""}
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
