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
import { Map } from "lucide-react";
import { Card, CardBody } from "@nextui-org/card";

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
      {/* <div className="flex flex-col    items-center justify-center  m-auto   bg-[#f4f8ff]">
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
      </div> */}
      <Carousel
        plugins={[plugin.current]}
        className="w-full w-[90%] m-auto "
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent className="">
          {images.map((img, index) => (
            <CarouselItem className="" key={index}>
              {/* <div className="p-1 w-full">
                <Image
                  src={img}
                  alt="hydrauliques"
                  width={"100%"}
                  height={480}
                  className="object-cover"
                />
              </div> */}
              <Card className="h-[450px] ">
                <div className="relative w-full h-full">
                  <Image
                    removeWrapper
                    alt="Card background"
                    className="z-0 w-full h-full object-cover"
                    src={img}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-transparent to-transparent"></div>
                  <div className="absolute inset-0 bg-gradient-to-l from-black/40 via-transparent to-transparent"></div>
                </div>
                <CardBody className="absolute inset-0 mb-16 ml-4 lg:ml-14 z-10 flex items-start justify-center">
                  <div className="mt-16  text-2xl md:text-3xl  ">
                    <div className="flex flex-col w-auto mb-6">
                      <h1 className="mb-2 w-[350px] font-normal  text-gray-100 ">
                        {" "}
                        Fournisseur D&apos;équipement Hydraulique
                      </h1>
                      <p className="text-sm  text-[#488DCA] tracking-widest font-normal ">
                        Dolphin Equipements
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col items-center gap-8 w-[250px] sm:w-[350px] lg:w-[450px]">
                    <h3 className=" font-light  text-gray-200  ">
                      Explorez nos nombreux produits hydrauliques.
                      <br /> Nous vous souhaitons la bienvenue dans nos
                      boutiques à Tunis.
                    </h3>
                    <div className="flex gap-2 self-start">
                      <a
                        target="_blank"
                        href="https://www.google.com/maps/place/DOLPHIN+EQUIPEMENTS/@36.7623251,10.2236865,17z/data=!3m1!4b1!4m6!3m5!1s0x12fd379bc05dd4d5:0x26a7e7cff34d891e!8m2!3d36.7623251!4d10.2262614!16s%2Fg%2F11t4fw6lrr?entry=ttu&g_ep=EgoyMDI0MTEyNC4xIKXMDSoASAFQAw%3D%3D"
                      >
                        <Button
                          variant={"outline"}
                          className=" rounded-sm text-white/90 bg-transparent border-[#488DCA]/50"
                        >
                          Voir Localisation
                          <Map size={24} />
                        </Button>
                      </a>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden lg:flex" />
        <CarouselNext className="hidden lg:flex" />
      </Carousel>
    </div>
  );
}
