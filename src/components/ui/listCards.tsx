"use client";

import React from "react";

import { Card, CardBody, CardFooter } from "@nextui-org/card";
import { useRouter, usePathname } from "next/navigation";
import { Data } from "@/types";
import { toast } from "sonner";
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem } from "./carousel";

export default function ListCards({
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
    <div className="my-8 w-full ">
      <div className="flex sm:hidden">
        <Carousel
          // plugins={[plugin.current]}
          className="w-full  m-auto"
        >
          <CarouselContent className="m-auto flex ">
            {composants.children.map((item, index) => (
              <CarouselItem
                className=" flex justify-center items-center"
                key={index}
              >
                <div key={index} className="flex flex-col flex-1">
                  <Card
                    shadow="sm"
                    className="bg-transparent  "
                    isPressable={item.children && item.children.length > 0}
                    onPress={() => {
                      if (item.children && item.children.length > 0) {
                        router.push(
                          `produits/${type}/${currentPath}/${item.title
                            .toLowerCase()
                            .replace(/ /g, "-")}`
                        );
                      }
                    }}
                  >
                    <CardBody className="overflow-visible bg-white p-0 border-none ">
                      <Image
                        width={200}
                        height={250}
                        alt={item.title}
                        className="w-auto object-cover h-[257px]"
                        src={item.image || "https://placehold.co/200x250?text="}
                      />
                    </CardBody>
                    <CardFooter className="text-small justify-center py-5 bg-[#4187C6] text-white font-light text-lg">
                      <b>{item.title}</b>
                    </CardFooter>
                  </Card>
                  {/* <div className="text-normal text-center lg:text-normal font-light  justify-center py-4">
              <b> {item.title}</b>
            </div> */}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
      <div className="hidden sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {composants.children.map((item, index) => (
          <div key={index} className="flex flex-col ">
            <Card
              shadow="sm"
              className="bg-transparent  "
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
              <CardBody className="overflow-visible bg-white p-0 border-none ">
                <Image
                  width={200}
                  height={250}
                  alt={item.title}
                  className="w-auto object-cover h-[257px]"
                  src={item.image || "https://placehold.co/200x250?text="}
                />
              </CardBody>
              <CardFooter className="text-xs sm:text-sm lg:text-base justify-center py-5 bg-[#4187C6] text-white font-light text-lg">
                <b>{item.title}</b>
              </CardFooter>
            </Card>
            {/* <div className="text-normal text-center lg:text-normal font-light  justify-center py-4">
              <b> {item.title}</b>
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
}
