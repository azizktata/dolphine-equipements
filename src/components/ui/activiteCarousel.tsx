"use client";
import React from "react";
import { Carousel, CarouselContent, CarouselItem } from "./carousel";
import ActiviteContainer from "./activiteContainer";
import Autoplay from "embla-carousel-autoplay";
import { type CarouselApi } from "@/components/ui/carousel";

export default function ActiviteCarousel() {
  const activites = [
    {
      title: "Maintenance et Réparation",
      description:
        "Nous offrons des services complets de maintenance et de réparation pour tous types d’équipements hydrauliques et pneumatiques.",
      image: "/act-4.webp",
    },
    {
      title: "Vente et Location",
      description:
        "Une large gamme d’équipements hydrauliques et pneumatiques disponibles dans nos boutiques à Tunis.",
      image: "/act-3.webp",
    },
    {
      title: "Conseil et Formation",
      description:
        "Une large gamme d’équipements hydrauliques et pneumatiques disponibles dans nos     boutiques à Tunis.",
      image: "/act-4.webp",
    },
  ];

  const plugin = React.useRef(Autoplay());
  const totalSlides = activites.length;
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [api, setApi] = React.useState<CarouselApi | null>(null);

  React.useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setActiveIndex(api.selectedScrollSnap());
    };

    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <div className="relative w-full flex flex-col items-center gap-8">
      <Carousel
        plugins={[plugin.current]}
        opts={{
          loop: true,
        }}
        className="w-full  py-6 m-auto"
        setApi={setApi}
      >
        <CarouselContent className="m-auto flex ">
          {activites.map((activite, index) => (
            <CarouselItem key={index}>
              <ActiviteContainer
                title={activite.title}
                description={activite.description}
                image={activite.image}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* <CarouselPrevious className="absolute top-1/2 left-4 transform -translate-y-1/2 z-20 p-2 rounded-none bg-black/70 border-none text-white  hover:bg-white/40" />
        <CarouselNext className="absolute top-1/2 right-4 transform -translate-y-1/2 z-20 p-2 rounded-none bg-black/70 border-none text-white hover:bg-white/40" /> */}
      </Carousel>
      <div className=" justify-center    transform  flex gap-2 w-[60%]">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <div
            key={index}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === activeIndex ? "bg-white w-10" : "bg-blue-300 w-6"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}
