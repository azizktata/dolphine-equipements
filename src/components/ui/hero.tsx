"use client";

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";
import { Image } from "@nextui-org/image";
import { Button } from "./button";
import { ArrowDown, ArrowRight, Map, MapPinIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function Hero() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  const images = ["/cover-2.webp", "/cover-3.webp"];
  return (
    <div className="bg-[#f4f8ff] py-4">
      <div className="flex flex-col   items-center justify-center  m-auto   bg-[#f4f8ff]">
        <div className="mt-16 text-center text-4xl lg:text-5xl ">
          <div className="flex flex-col mb-6">
            <Badge
              variant="outline"
              className="text-[#D4AF37] font-light self-end"
            >
              +20 ans d'experiance
            </Badge>
            <h1 className="mb-2">
              {" "}
              <span className="text-[#488DCA] font-bold">Dolphin </span>
              Equipements
            </h1>
            <p className="text-sm text-gray-500  font-normal self-center">
              Fournisseur d'équipement hydraulique
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-6 w-[380px]">
          <h3 className="text-center text-sm text-gray-400  ">
            Explorez nos nombreux produits hydrauliques.
            <br /> Nous vous souhaitons la bienvenue dans nos boutiques à Tunis
          </h3>
          <div className="flex gap-2">
            <Button className="bg-[#488DCA] rounded-sm lg:self-start">
              Explorer
              <ArrowDown size={24} />
            </Button>
            <Button variant={"outline"} className=" rounded-sm lg:self-start">
              Voir location
              <Map size={24} />
            </Button>
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
                {/* <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-4xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card> */}
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
        <CarouselPrevious className="hidden" />
        <CarouselNext className="hidden" />
      </Carousel>
    </div>
  );
}
