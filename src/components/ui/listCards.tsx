"use client";

import React from "react";
import { Image } from "@nextui-org/image";
import { Card, CardBody, CardFooter } from "@nextui-org/card";
import { useRouter, usePathname } from "next/navigation";
import { Data } from "@/types";

export default function ListCards({ composants }: { composants: Data }) {
  const router = useRouter();
  const currentPath = usePathname();
  return (
    <div className="my-8 w-full">
      <div className="gap-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
        {composants.elements.map((item, index) => (
          <Card
            key={index}
            shadow="sm"
            isPressable
            onPress={() => {
              if (item.elements) {
                router.push(
                  `${currentPath}/${item.title
                    .toLowerCase()
                    .replace(/ /g, "-")}`
                );
              }
            }}
          >
            <CardBody className="overflow-visible bg-[#F5F5F5] p-0">
              <Image
                shadow="sm"
                radius="lg"
                width="100%"
                alt={item.title}
                className="w-full object-cover h-[140px]"
                src={item.img}
              />
            </CardBody>

            <CardFooter className="text-small font-light justify-center py-4">
              <b>{item.title}</b>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
