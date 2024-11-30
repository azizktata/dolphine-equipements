"use client";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
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
    "/partenaire-4.png",
    "/partenaire-5.png",
    "/partenaire-6.webp",
    "/partenaire-7.png",
    "/partenaire-8.png",
    "/partenaire-9.png",
    "/partenaire-10.png",
  ];
  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full  m-auto"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent className="m-auto flex  ">
        {partenairs.map((img, index) => (
          <CarouselItem
            className="basis-1/2 lg:basis-1/3 flex justify-center items-center"
            key={index}
          >
            <Image
              src={img}
              alt="hydrauliques"
              width={"100%"}
              height={120}
              className="object-fill "
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
