import React from "react";
import { Card, CardBody } from "@nextui-org/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function CardSvg({
  title,

  image,
}: {
  title: string;
  description: string;
  image: string;
}) {
  const linkHref =
    title === "Hydrauliques"
      ? "./produits/hydrauliques"
      : title === "Pneumatiques"
      ? "./produits/pneumatiques"
      : "./produits/assainissement-et-nettoyage";
  return (
    <div className="flex flex-col flex-1 w-full m-auto">
      <Card radius="none" className="border-[#FCFAF3] w-full flex-1 ">
        <div className=" w-full group bg-gray-200">
          <div className="relative w-full h-[320px]">
            <Image
              alt="Card background"
              className="z-0  object-cover transition-opacity duration-300 group-hover:brightness-75"
              src={image}
              loading="lazy"
              fill
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-linear"></div>

          <CardBody className="absolute inset-0 mb-16 z-10 flex flex-col items-center justify-end transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 opacity-0 translate-y-5">
            <Link href={linkHref}>
              <Button
                variant={"outline"}
                className="px-4 py-5 mt-5 rounded-sm text-white font-normal  bg-transparent border-[#CBCCDC]/80"
              >
                voir produits
              </Button>
            </Link>
          </CardBody>
        </div>
      </Card>
      <div className="text-xl sm:text-sm md:text-md lg:text-xl xl:text-2xl text-center  font-light text-[#EBF3F9] justify-center py-4">
        <b> {title}</b>
      </div>
    </div>
  );
}
