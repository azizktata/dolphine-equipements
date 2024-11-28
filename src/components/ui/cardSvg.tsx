import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CardSvg({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image: string;
}) {
  return (
    <Card className="w-[350px] m-auto border-[#FCFAF3] flex-1">
      <CardContent className="pt-4 ">
        <Image
          src={image ?? "/globe.svg"}
          alt="hydrauliques"
          width={64}
          height={64}
          className="text-[#316F9E] "
        />
      </CardContent>
      <CardHeader>
        <CardTitle className="lg:text-xl font-medium tracking-wide">
          {title}
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardFooter>
        {/* <Button variant="outline">Cancel</Button> */}
        <Link
          href={
            title === "Hydroliques"
              ? "./composants/hydrauliques"
              : title === "Pneumatiques"
              ? "./composants/pneumatiques"
              : "./composants/nettoyage"
          }
        >
          <Button className="bg-[#488DCA] rounded-sm lg:self-start hover:bg-[#285C8A]">
            voir composants
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
