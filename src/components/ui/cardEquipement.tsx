"use client";

import React from "react";

import { Image } from "@nextui-org/image";
import { Card, CardBody, CardFooter } from "@nextui-org/card";
export default function CardEquipement({
  title,
  img,
}: {
  title: string;
  img: string;
}) {
  return (
    <>
      <Card shadow="sm" isPressable onPress={() => console.log("item pressed")}>
        <CardBody className="overflow-visible bg-[#F5F5F5] p-0">
          <Image
            shadow="sm"
            radius="lg"
            width="100%"
            alt={title}
            className="w-full object-cover h-[140px]"
            src={img}
          />
        </CardBody>
        <CardFooter className="text-small justify-center py-4">
          <b>{title}</b>
        </CardFooter>
      </Card>
    </>
  );
}
