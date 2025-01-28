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
  const plugin = React.useRef(
    Autoplay({
      delay: 1500, // No pause, keep it moving
      stopOnInteraction: false, // Don't stop when user interacts
      stopOnMouseEnter: false, // Don't stop when hovering
    })
  );

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
            className=" sm:basis-1/2  xl:basis-1/3 flex justify-center gap-10 items-center font-semibold text-sm  md:text-base text-[#222222] "
            key={index}
          >
            <Image
              src="/dot.svg"
              alt="dot"
              className="sm:hidden"
              width={10}
              height={10}
            />
            {contact}
            <Image
              src="/dot.svg"
              alt="dot"
              className="mx-0 sm:mx-4 md:mx-8 lg:mx-24"
              width={10}
              height={10}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
