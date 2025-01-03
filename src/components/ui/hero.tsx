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
    "/cover-1.webp",
    "/cover-2.webp",
    "/cover-3.webp",
    "/cover-4.webp",
    "/cover-5.webp",
    "/cover-6.webp",
  ];
  return (
    <div className="bg-[#f4f8ff] ">
      <Carousel
        plugins={[plugin.current]}
        className="w-full  "
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent className="">
          {images.map((img, index) => (
            <CarouselItem className="" key={index}>
              <Card radius="none" className="h-[600px] ">
                <div className="relative w-full h-full overflow-hidden bg-gray-100">
                  <Image
                    removeWrapper
                    alt="Card background"
                    className="z-0 w-full h-full object-cover rounded-none"
                    src={img}
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-linear"></div>
                  {/* <div className="absolute inset-0 bg-gradient-to-l from-black/40 via-transparent to-transparent"></div> */}
                </div>
                <CardBody className="absolute inset-0 mb-16 ml-4 lg:ml-24  z-10 flex items-start justify-center">
                  <div className="mt-12  flex flex-col w-auto mb-4  ">
                    <h2 className="text-base  text-[#B0CEE8] tracking-widest font-medium ">
                      Dolphin Equipements
                    </h2>
                    <h1 className="mb-2 max-w-[30ch] font-medium text-2xl sm:text-3xl lg:text-4xl xl:text-5xl tracking-widest text-white ">
                      {" "}
                      Fournisseur des équipements hydrauliques
                    </h1>
                  </div>

                  <div className="flex flex-col items-center  gap-12  ">
                    <h3 className="text-base lg:text-lg self-start text-gray-200 font-normal ">
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
                          className="px-4 py-5 rounded-sm text-white font-normal  bg-transparent border-[#B0CEE8]/80"
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
        <CarouselPrevious className="absolute top-1/2 left-4 transform -translate-y-1/2 z-20 p-2 rounded-none bg-black/70 border-none text-white  hover:bg-white/40" />
        <CarouselNext className="absolute top-1/2 right-4 transform -translate-y-1/2 z-20 p-2 rounded-none bg-black/70 border-none text-white hover:bg-white/40" />
      </Carousel>
    </div>
  );
}
