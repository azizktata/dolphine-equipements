"use client";

import React from "react";

import { Card, CardBody, CardFooter } from "@nextui-org/card";
import { useRouter, usePathname } from "next/navigation";
import { Data } from "@/types";
import { toast } from "sonner";
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem } from "./carousel";

export default function ListCardsV2({
  composants,
  type,
}: {
  composants: Data;
  type?: string;
}) {
  const router = useRouter();
  const currentPath = usePathname();

  if (composants.children.length === 0) {
    toast.error("Erreur lors du chargement des données");
    return;
  }

  return (
    <div className="my-8 w-full">
      <div className="w-full grid sm:grid-cols-2 md:grid-cols-3   gap-4 ">
        {composants.children.map((item, index) => (
          <div key={index} className="flex flex-col flex-1   w-full">
            <Card
              className="bg-[#4085C626] w-full border border-[#4085C6]"
              isPressable={item.children && item.children.length > 0}
              onPress={() => {
                if (item.children && item.children.length > 0) {
                  router.push(
                    `${currentPath}/${item.title
                      .toLowerCase()
                      .replace(/ /g, "-")}`
                  );
                }
              }}
            >
              <CardBody className="overflow-visible bg-white p-0 border-none flex-1 w-full">
                <Image
                  width={200}
                  height={330}
                  alt={item.title}
                  className="w-full h-[257px] object-cover" // Ensure image takes up full width of the card
                  src={item.image || "https://placehold.co/200x250?text="}
                />
                <div className="absolute inset-0 bg-[#4187C6CC]/10"></div>
              </CardBody>
              <CardFooter className="text-xs sm:text-sm lg:text-base flex font-normale justify-between py-5 bg-white text-left text-gray-800  ">
                <b>{item.title}</b>
                <Image
                  src="/right-arrow.svg"
                  alt="arrow-right"
                  width={32}
                  height={32}
                  className="ml-2"
                />
              </CardFooter>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
