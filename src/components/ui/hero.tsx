"use client";

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Image } from "@nextui-org/image";
import { Button } from "./button";
import { ArrowDown, Map } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function Hero() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  const images = [
    "/cover-2.webp",
    "/cover-3.webp",
    "/cover-4.webp",
    "/cover-5.webp",
  ];
  return (
    <div className="bg-[#f4f8ff] py-4">
      <div className="flex flex-col    items-center justify-center  m-auto   bg-[#f4f8ff]">
        <div className="mt-16 text-center text-xl md:text-3xl  ">
          <div className="flex flex-col w-auto mb-6">
            <Badge
              variant="outline"
              className="text-[#D4AF37] font-light self-end"
            >
              +20 ans d&apos;experiance
            </Badge>
            <h1 className="mb-2  text-[#002566] ">
              {" "}
              Fournisseur D&apos;équipement Hydraulique
            </h1>
            <p className="text-sm text-gray-500 tracking-widest font-normal self-center">
              Dolphin Equipements
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-6 w-[350px] lg:w-[400px]">
          <h3 className="text-center font-light text-sm text-gray-400  ">
            Explorez nos nombreux produits hydrauliques.
            <br /> Nous vous souhaitons la bienvenue dans nos boutiques à Tunis.
          </h3>
          <div className="flex gap-2">
            <a href="#dolphin">
              <Button className="bg-[#488DCA] rounded-sm lg:self-start hover:bg-[#285C8A]">
                Explorer
                <ArrowDown size={24} />
              </Button>
            </a>
            <a
              target="_blank"
              href="https://www.google.com/maps/place/DOLPHIN+EQUIPEMENTS/@36.7623251,10.2236865,17z/data=!3m1!4b1!4m6!3m5!1s0x12fd379bc05dd4d5:0x26a7e7cff34d891e!8m2!3d36.7623251!4d10.2262614!16s%2Fg%2F11t4fw6lrr?entry=ttu&g_ep=EgoyMDI0MTEyNC4xIKXMDSoASAFQAw%3D%3D"
            >
              <Button variant={"outline"} className=" rounded-sm lg:self-start">
                Voir location
                <Map size={24} />
              </Button>
            </a>
          </div>
        </div>
      </div>
      <Carousel
        plugins={[plugin.current]}
        className="w-full lg:w-[90%] m-auto mt-16 "
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent className="">
          {images.map((img, index) => (
            <CarouselItem className="" key={index}>
              <div className="p-1 w-full">
                <Image
                  src={img}
                  alt="hydrauliques"
                  width={"100%"}
                  height={480}
                  className="object-cover"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden lg:flex" />
        <CarouselNext className="hidden lg:flex" />
      </Carousel>
    </div>
  );
}
