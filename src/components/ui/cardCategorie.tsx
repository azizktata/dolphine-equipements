import React from "react";
import { Image } from "@nextui-org/image";
import { Card, CardBody, CardFooter } from "@nextui-org/card";
export default function CardCategorie({
  title,
  img,
}: {
  title: string;
  img: string;
}) {
  return (
    <Card
      shadow="sm"
      isPressable
      className="flex-1 bg-[#4187C6] text-white rounded-lg  hover:shadow-[rgba(65,_135,_198,_0.4)_0px_35px_70px,_rgba(65,_135,_198,_0.3)_0px_25px_50px] transform transition-transform hover:scale-103 transition-shadow"
    >
      <CardBody className="overflow-visible bg-[#F5F5F5] p-0 ">
        <Image
          width="100%"
          alt={title}
          className="w-full object-cover h-[340px] rounded-b-none rounded-t-none border-b-2 border-gray-100"
          src={img}
        />
      </CardBody>
      <CardFooter className="text-small justify-center py-5 bg-[#4187C6] text-white font-light text-lg">
        <b>{title}</b>
      </CardFooter>
    </Card>
  );
}
