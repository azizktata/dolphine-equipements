"use client";

import React from "react";
import { Image } from "@nextui-org/image";
import { Card, CardBody } from "@nextui-org/card";
import { useRouter, usePathname } from "next/navigation";
import { Data } from "@/types";

export default function ListCards({ composants }: { composants: Data }) {
  const router = useRouter();
  const currentPath = usePathname();
  return (
    <div className="my-8 w-full">
      <div className="gap-2 grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4   ">
        {composants.children.map((item, index) => (
          <div key={index} className="flex flex-col ">
            <Card
              shadow="sm"
              className="bg-transparent "
              isPressable
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
                  shadow="sm"
                  radius="sm"
                  width="100%"
                  alt={item.title}
                  className="w-full object-cover h-[200px]"
                  src={item.image !== "" ? item.image : undefined}
                />
              </CardBody>
            </Card>
            <div className="text-normal text-center lg:text-normal font-light  justify-center py-4">
              <b>{item.title}</b>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
