"use client";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Image } from "@nextui-org/image";

export default function ContactCarousel() {
  const plugin = React.useRef(Autoplay());

  const partenairs = [
    "Contactez-nous sur: 58 432 376",
    "Contactez-nous sur: 58 432 376",
    "Contactez-nous sur: 58 432 376",
    "Contactez-nous sur: 58 432 376",
    "Contactez-nous sur: 58 432 376",
    "Contactez-nous sur: 58 432 376",
    "Contactez-nous sur: 58 432 376",
    "Contactez-nous sur: 58 432 376",
  ];
  return (
    <Carousel
      plugins={[plugin.current]}
      opts={{
        loop: true,
      }}
      className="w-full bg-[#F6F6F6] py-6 m-auto"
      // onMouseEnter={plugin.current.stop}
      // onMouseLeave={plugin.current.reset}
    >
      <CarouselContent className="m-auto flex ">
        {partenairs.map((contact, index) => (
          <CarouselItem
            className=" sm:basis-1/3 md:basis-1/4 flex justify-center gap-10 items-center font-medium text-lg"
            key={index}
          >
            <Image src="/dot.svg" alt="dot" width={16} height={16} />
            {contact}
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
