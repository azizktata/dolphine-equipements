import React from "react";
import { Card, CardBody } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

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
    // <Card className="min-w-[350px] max-w-[450px] m-auto border-[#FCFAF3] flex-1 ">
    //   <CardContent className="pt-4 ">
    //     <Image
    //       src={image ?? "/globe.svg"}
    //       alt="hydrauliques"
    //       width={64}
    //       height={64}
    //       className="text-[#316F9E] "
    //     />
    //   </CardContent>
    //   <CardHeader>
    //     <CardTitle className="lg:text-xl font-medium tracking-wide">
    //       {title}
    //     </CardTitle>
    //     <CardDescription>
    //       <p className="text-lg text-gray-500 font-light">{description}</p>
    //     </CardDescription>
    //   </CardHeader>
    //   <CardFooter>
    //     {/* <Button variant="outline">Cancel</Button> */}
    //     <Link
    //       href={
    //         title === "Hydroliques"
    //           ? "./produits/hydrauliques"
    //           : title === "Pneumatiques"
    //           ? "./produits/pneumatiques"
    //           : "./produits/assainissement-et-nettoyage"
    //       }
    //     >
    //       <Button className="px-4 py-5 bg-[#488DCA] rounded-sm text-base lg:self-start hover:bg-[#285C8A] mt-8">
    //         voir produits
    //       </Button>
    //     </Link>
    //   </CardFooter>
    // </Card>
    <Card className="max-w-md  m-auto border-[#FCFAF3]  flex-1 ">
      <div className="relative w-full h-full group bg-gray-200">
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover transition-opacity duration-300 group-hover:brightness-75"
          src={image}
          width={350}
          height={300}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-linear"></div>
        {/* <div className="absolute inset-0 bg-gradient-to-l from-black/40 via-transparent to-transparent"></div> */}

        <CardBody className="absolute inset-0 mb-16 z-10 flex flex-col items-center justify-center transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 opacity-0 translate-y-5">
          <h1 className="mb-2 text-center font-medium text-xl sm:text-2xl lg:text-4xl tracking-widest text-white">
            {title}
          </h1>
          <Link href={linkHref}>
            <Button
              variant={"outline"}
              className="px-4 py-5 mt-5 rounded-sm text-white font-normal  bg-transparent border-[#B0CEE8]/80"
            >
              voir produits
            </Button>
          </Link>
        </CardBody>
      </div>
    </Card>
  );
}
