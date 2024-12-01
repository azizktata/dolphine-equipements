import React from "react";
import { Card, CardBody } from "@nextui-org/card";
import { Image } from "@nextui-org/image";

export default function page() {
  return (
    <div>
      <div className="w-full mb-16">
        <Card className="h-[400px] rounded-none">
          <div className="relative w-full h-full">
            <Image
              removeWrapper
              alt="Card background"
              className="z-0 w-full h-full object-cover rounded-none"
              src={"/cover-4.webp"}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-linear"></div>
            {/* <div className="absolute inset-0 bg-gradient-to-l from-black/40 via-transparent to-transparent"></div> */}
          </div>
          <CardBody className="absolute inset-0 mb-16 z-10 flex items-start justify-center">
            {/* <div className="mt-12  flex flex-col  w-auto mb-6  "> */}
            <div className="max-w-[60ch] mx-auto flex flex-col items-center">
              <h1 className="mb-2  font-medium text-xl sm:text-3xl lg:text-4xl xl:text-5xl tracking-widest text-white ">
                {" "}
                Qui Sommes Nous?
              </h1>
              <p className="text-lg  text-[#B0CEE8] tracking-widest font-medium ">
                Dolphin Equipements
              </p>
            </div>
          </CardBody>
        </Card>
      </div>
      <div className="max-w-[65ch] px-4 mx-auto mb-16 flex flex-col items-start justify-center">
        <h1 className="text-2xl lg:text-4xl mb-8 lg:mb-16 font-semibold text-center tracking-wide">
          Qui est Dolhin Equipements?
        </h1>

        <div className="mb-8">
          <h3 className="text-lg font-medium text-gray-900 lg:text-2xl mb-2 ">
            Fournisseur D&apos;équipement Hydraulique
          </h3>
          <p className="max-w-[60ch] text-lg text-gray-700 font-light">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book.
          </p>
        </div>
        <div className="mb-8">
          <h3 className="text-lg font-medium text-gray-900 lg:text-2xl mb-2">
            Nos Secteurs
          </h3>
          <p className="max-w-[60ch] text-lg text-gray-700 font-light">
            survived not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum
            passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        <div className="mb-8">
          <h3 className="text-lg font-medium text-gray-900 lg:text-2xl mb-2">
            Nos Activités
          </h3>
          <p className="max-w-[60ch] text-lg text-gray-700 font-light">
            survived not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum
            passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        <div className="mb-8">
          <h3 className="text-lg font-medium text-gray-900 lg:text-2xl mb-2">
            Nos Produits
          </h3>
          <p className="max-w-[60ch] text-lg text-gray-700 font-light">
            survived not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum
            passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
    </div>
  );
}
