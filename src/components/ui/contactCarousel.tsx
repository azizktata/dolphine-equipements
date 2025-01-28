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
            className=" md:basis-1/2  xl:basis-1/3 flex justify-center gap-10 items-center font-medium text-lg"
            key={index}
          >
            <Image src="/dot.svg" alt="dot" width={16} height={16} />
            {contact}
            <Image
              src="/dot.svg"
              alt="dot"
              className="md:hidden lg:block"
              width={16}
              height={16}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
