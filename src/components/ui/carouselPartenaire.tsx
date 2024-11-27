"use client";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";
import { Image } from "@nextui-org/image";
export default function CarouselPartenaire() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  const partenairs = [
    "/partenaire-1.webp",
    "/partenaire-2.webp",
    "/partenaire-3.webp",
    "/partenaire-4.webp",
    "/partenaire-5.webp",
    "/partenaire-6.webp",
    "/partenaire-7.webp",
    "/partenaire-8.webp",
    "/partenaire-9.webp",
  ];
  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full  m-auto"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent className="m-auto ">
        {partenairs.map((img, index) => (
          <CarouselItem
            className="basis-1/2 lg:basis-1/3 flex justify-center items-center"
            key={index}
          >
            <Image
              src={img}
              alt="hydrauliques"
              width={350}
              height={120}
              className="object-fill"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
