"use client";

import React from "react";

import { Card, CardBody } from "@nextui-org/card";
import { useRouter, usePathname } from "next/navigation";
import { Data } from "@/types";
import { toast } from "sonner";
import Image from "next/image";

export default function ListCards({ composants }: { composants: Data }) {
  const router = useRouter();
  const currentPath = usePathname();

  if (composants.children.length === 0) {
    toast.error("Erreur lors du chargement des données");
    return;
  }

  return (
    <div className="my-8 w-full ">
      <div className="gap-2 grid grid-cols sm:grid-cols-2 lg:grid-cols-3   ">
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
                  className="w-auto object-cover h-[250px]"
                  src={item.image}
                />
              </CardBody>
            </Card>
            <div className="text-normal text-center lg:text-normal font-light  justify-center py-4">
              <b> {item.title}</b>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
