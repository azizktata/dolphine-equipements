"use client";

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Image } from "@nextui-org/image";
import { Button } from "./button";
import { Card, CardBody } from "@nextui-org/card";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="bg-[#f4f8ff] ">
      <Carousel className="w-full  ">
        <CarouselContent className="">
          <CarouselItem className="">
            <Card radius="none" className="h-[800px] ">
              <div className="relative w-full h-full overflow-hidden bg-gray-100">
                <Image
                  removeWrapper
                  alt="banniéres des équipemets hydraulique"
                  className="z-0 w-full h-full object-cover rounded-none"
                  src="/hero-2.jpeg"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-[#4187C6CC]/60 "></div>
                {/* <div className="absolute inset-0 bg-gradient-to-l from-black/40 via-transparent to-transparent"></div> */}
              </div>
              <CardBody className="absolute inset-0 mb-16  z-10 flex items-center justify-center gap-12">
                <div className="mt-12  flex flex-col w-auto   ">
                  <h1 className="text-center text-4xl sm:text-5xl   md:text-7xl max-w-5xl leading-normal text-white font-semibold">
                    {" "}
                    Fournisseur des <br></br> équipements hydrauliques
                  </h1>
                </div>

                <div className="flex flex-col items-center   ">
                  <h3 className="text-base md:text-lg lg:text-xl text-center text-white font-medium ">
                    Explorez nos nombreux produits hydrauliques.
                    <br /> Nous vous souhaitons la bienvenue dans nos boutiques
                    à Tunis.
                  </h3>
                </div>
                <Button
                  asChild
                  className="bg-[#4187C6] rounded-sm text-base lg:text-lg px-12 py-7 text-white rounded-md  font-light  hover:bg-[#1F3A75] "
                >
                  <Link href="/produits">
                    <p className="text-white ">Découvrir plus</p>
                  </Link>
                </Button>
              </CardBody>
            </Card>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  );
}
