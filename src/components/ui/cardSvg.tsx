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
    <Card className="w-[350px] m-auto">
      <CardContent className="pt-4">
        <Image
          src={image ?? "/globe.svg"}
          alt="hydrauliques"
          width={64}
          height={64}
        />
      </CardContent>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardFooter>
        {/* <Button variant="outline">Cancel</Button> */}
        <Button>voir composants</Button>
      </CardFooter>
    </Card>
  );
}
