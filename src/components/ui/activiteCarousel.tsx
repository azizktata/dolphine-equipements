"use client";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./carousel";
import ActiviteContainer from "./activiteContainer";
import Autoplay from "embla-carousel-autoplay";

export default function ActiviteCarousel() {
  const activites = [
    {
      title: "Maintenance et Réparation",
      description:
        "Nous offrons des services complets de maintenance et de réparation pour tous types d’équipements hydrauliques et pneumatiques.",
      image: "/act-1.webp",
    },
    {
      title: "Vente et Location",
      description:
        "Une large gamme d’équipements hydrauliques et pneumatiques disponibles dans nos boutiques à Tunis.",
      image: "/act-2.webp",
    },
    {
      title: "Conseil et Formation",
      description:
        "Une large gamme d’équipements hydrauliques et pneumatiques disponibles dans nos     boutiques à Tunis.",
      image: "/act-3.webp",
    },
  ];

  const plugin = React.useRef(Autoplay());
  return (
    <Carousel
      plugins={[plugin.current]}
      opts={{
        loop: true,
      }}
      className="w-full  py-6 m-auto"
    >
      <CarouselContent className="m-auto flex ">
        {activites.map((activite, index) => (
          <CarouselItem className=" " key={index}>
            <ActiviteContainer
              title={activite.title}
              description={activite.description}
              image={activite.image}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute top-1/2 left-4 transform -translate-y-1/2 z-20 p-2 rounded-none bg-black/70 border-none text-white  hover:bg-white/40" />
      <CarouselNext className="absolute top-1/2 right-4 transform -translate-y-1/2 z-20 p-2 rounded-none bg-black/70 border-none text-white hover:bg-white/40" />
    </Carousel>
  );
}
