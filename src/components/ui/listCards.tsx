"use client";

import React from "react";
import { Image } from "@nextui-org/image";
import { Card, CardBody, CardFooter } from "@nextui-org/card";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
export default function ListCards({ composants }) {
  const router = useRouter();
  const currentPath = usePathname();
  //   console.log(currentData);
  return (
    <div className="my-8">
      <h2 className="mb-4 text-xl">Composants</h2>
      <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
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
              {/* <Link
                href={`/composants/${item.title
                  .toLowerCase()
                  .replace(/ /g, "-")}`}
                key={index}
              > */}
              <Image
                shadow="sm"
                radius="lg"
                width="100%"
                alt={item.title}
                className="w-full object-cover h-[140px]"
                src={item.img}
              />
              {/* </Link> */}
            </CardBody>

            <CardFooter className="text-small justify-center py-4">
              <b>{item.title}</b>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
