import React from "react";
import { Card, CardBody } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import CarouselPartenaire from "@/components/ui/carouselPartenaire";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Qui sommes-nous? | Dolphin équipements",
  description:
    "Dolphin équipements, fournir des produits et services hydrauliques et pneumatiques de qualité, conçus pour optimiser vos performances et garantir la durabilité de vos équipements.",
};

export default function page() {
  return (
    <>
      <div className="flex flex-col">
        <div className="w-full mb-16">
          <Card className="h-[500px] rounded-none">
            <div className="relative w-full h-full">
              <Image
                removeWrapper
                alt="Card background"
                className="z-0 w-full h-full object-cover rounded-none"
                src={"/cover-6.webp"}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-linear"></div>
            </div>
            <CardBody className="absolute inset-0 mb-16 z-10 flex items-start justify-center">
              <div className="max-w-[60ch] mx-auto flex flex-col items-center">
                <h1 className="mb-2  font-medium text-3xl lg:text-5xl  tracking-widest text-white ">
                  {" "}
                  Qui sommes nous?
                </h1>
                <p className="text-lg  text-[#B0CEE8] tracking-widest font-medium ">
                  Dolphin Equipements
                </p>
              </div>
            </CardBody>
          </Card>
        </div>
        <section className="overflow-hidden pt-8 lg:pt-20 pb-12  lg:pb-[90px] bg-white dark:bg-dark">
          <div className="container mx-auto">
            <div className="flex flex-wrap items-center justify-between -mx-4">
              <div className="w-[90%] mx-auto px-4  lg:w-6/12">
                <div className="flex items-center -mx-3 sm:-mx-4">
                  <div className="w-full px-3 sm:px-4 xl:w-1/2">
                    <div className="py-3 sm:py-4">
                      <Image
                        src="/pompes.webp"
                        alt=""
                        className="w-full rounded-2xl"
                      />
                    </div>
                    <div className="py-3 sm:py-4">
                      <Image
                        src="/hydrauliquess.webp"
                        alt=""
                        className="w-full rounded-2xl"
                      />
                    </div>
                  </div>
                  <div className="w-full px-3 sm:px-4 xl:w-1/2">
                    <div className="relative z-10 my-4">
                      <Image
                        src="/distributeurs.webp"
                        alt=""
                        className="w-full rounded-2xl"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-[90%] px-4 mx-auto lg:w-1/2 xl:w-5/12">
                <div className="mt-10 lg:mt-0">
                  <h2 className="mb-5 text-3xl font-bold text-dark dark:text-white sm:text-[40px]/[48px]">
                    Votre Partenaire en Solutions Hydrauliques et Pneumatiques
                  </h2>
                  <p className="mb-5 text-lg text-gray-800 font-light">
                    Bienvenue chez Dolphin Équipements, un acteur incontournable
                    dans le domaine de l&apos;hydraulique et des services en
                    Tunisie.
                  </p>
                  {/* <p className="mb-8 text-lg text-gray-800 font-light">
                    Fournir des produits et services hydrauliques et
                    pneumatiques de qualité, conçus pour optimiser vos
                    performances et garantir la durabilité de vos équipements.
                  </p> */}
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="flex flex-col lg:flex-row justify-between lg:w-[90%] xl:w-[85%] lg:self-center">
          <div className="w-[90%] md:w-auto  mx-auto   self-center lg:self-start  mb-16 flex flex-col items-start ">
            <div className="mb-12  lg:mb-16">
              <h3 className="text-2xl font-medium text-gray-800 lg:text-3xl mb-4   after:content-[''] after:block after:w-1/4 after:h-[2px] after:bg-[#4085C6] after:mt-2 after:rounded-md after:scale-x-100 after:origin-left">
                Qui sommes nous?
              </h3>
              <p className="max-w-[70ch] text-lg text-gray-700 font-light">
                En tant que membre du groupe FLEXIMAT France, fort de plus de 20
                ans d&apos;expertise, nous sommes fiers de proposer des
                solutions innovantes et adaptées aux besoins des professionnels
                dans divers secteurs, tels que l&apos;industrie, le BTP.
              </p>
            </div>

            <div className="mb-12 lg:mb-16">
              <h3 className="text-2xl font-medium text-gray-800 lg:text-3xl mb-4 after:content-[''] after:block after:w-1/4 after:h-[2px] after:bg-[#4085C6] after:mt-2 after:rounded-md after:scale-x-100 after:origin-left">
                Notre mission
              </h3>
              <p className="max-w-[60ch] text-lg text-gray-700 font-light">
                Fournir des produits et des services hydrauliques et
                pneumatiques de qualité, conçus pour garantir la durabilité de
                vos équipements
                <span className="block mt-2"></span>
                Que ce soit pour la vente, la maintenance ou le nettoyage des
                circuits hydrauliques, nous nous engageons à vous accompagner
                avec expertise et professionnalisme
              </p>
            </div>

            <div className="mb-12 lg:mb-16 ">
              <h3 className="text-2xl font-medium text-gray-800 lg:text-3xl mb-4  after:content-[''] after:block after:w-1/4 after:h-[2px] after:bg-[#4085C6] after:mt-2 after:rounded-md after:scale-x-100 after:origin-left">
                Nos valeurs
              </h3>
              <p className="max-w-[60ch] text-lg text-gray-700 font-light">
                Chez Dolphin Équipements, nos valeurs fondamentales sont le
                socle de notre engagement envers nos clients, nos partenaires et
                notre équipe.
              </p>
              <ul className="max-w-[70ch] text-lg text-gray-700 font-light space-y-4 leading-relaxed">
                <li>
                  <span className="font-medium text-gray-700">
                    Expertise et Excellence
                  </span>{" "}
                  Nous mettons notre savoir-faire au service de vos besoins en
                  garantissant des produits et services de qualité supérieure.
                </li>
                <li>
                  <span className="font-medium text-gray-700">
                    Innovation Continue
                  </span>{" "}
                  Nous adoptons des solutions novatrices pour répondre aux défis
                  modernes et offrir des performances optimales.
                </li>
                <li>
                  <span className="font-medium text-gray-700">
                    Proximité et Confiance
                  </span>{" "}
                  Nous construisons des relations durables basées sur la
                  transparence et la satisfaction de nos clients.
                </li>
              </ul>
            </div>
            <div className="mb-12 lg:mb-16 ">
              <h3 className="text-2xl font-medium text-gray-800 lg:text-3xl mb-4  after:content-[''] after:block after:w-1/4 after:h-[2px] after:bg-[#4085C6] after:mt-2 after:rounded-md after:scale-x-100 after:origin-left">
                {" "}
                Pourquoi choisir dolphin équipements ?
              </h3>
              <p className="max-w-[60ch] text-lg text-gray-700 font-light">
                Votre partenaire en solutions hydrauliques et pneumatiques vous
                offre
              </p>
              <ul className="max-w-[70ch] text-lg text-gray-700 font-light space-y-4 leading-relaxed mb-6">
                <li>
                  Expertise reconnue: Grâce à notre appartenance au groupe
                  FLEXIMAT France.
                </li>
                <li>
                  Des services personnalisés pour répondre à tous vos besoins.
                </li>
                <li>
                  Des produits de qualité, adaptés aux exigences des secteurs
                  industriels, du BTP.
                </li>
              </ul>
              <p className="text-lg max-w-[70ch] text-gray-700 font-light leading-relaxed">
                Chez{" "}
                <span className="font-medium text-gray-700">
                  Dolphin Équipements
                </span>
                , nous faisons bien plus que vendre des équipements, nous sommes
                votre partenaire de confiance pour toutes vos solutions
                hydrauliques et pneumatiques.
                <span className="block mt-2">
                  C’est à <span className="font-medium">Tunis</span> que vous
                  pouvez découvrir comment optimiser vos performances et
                  garantir la fiabilité de vos équipements !
                </span>
              </p>
            </div>
          </div>
          <div className="hidden xl:w-1/2 xl:px-16 xl:flex flex-col gap-32  items-center">
            <div className="flex jusitfy-between gap-8">
              <Image
                src="/partenaire-1.webp"
                alt=""
                className="w-full rounded-2xl"
              />
              {/* <Image
                src="/partenaire-2.webp"
                alt=""
                className="w-full rounded-2xl"
              /> */}
              <Image
                src="/partenaire-4.webp"
                alt=""
                className="w-full rounded-2xl"
              />
            </div>
            {/* <div className="flex items-center gap-20">
              <Image
                src="/partenaire-3.webp"
                alt=""
                className="w-full rounded-2xl bg-gray-800"
              />
            </div> */}
            <div className="flex items-center gap-8">
              <Image
                src="/partenaire-5.webp"
                alt=""
                className="w-full rounded-2xl"
              />
              <Image
                src="/partenaire-9.webp"
                alt=""
                className="w-full rounded-2xl"
              />
            </div>
            <div className="flex gap-16">
              <Image
                src="/partenaire-7.webp"
                alt=""
                className="w-full rounded-2xl"
              />
              <Image
                src="/partenaire-8.webp"
                alt=""
                className="w-full rounded-2xl"
              />
            </div>
            {/* <div className="flex gap-16 items-center">
              <Image
                src="/partenaire-11.webp"
                alt=""
                height={100}
                width={200}
                className="w-full rounded-2xl"
              />
              <Image
                src="/partenaire-10.webp"
                alt=""
                className="w-full  rounded-2xl"
              />
            </div> */}
          </div>
        </div>
        <div className=" bg-[#E9F1F7] py-16 lg:py-32 mb-32 xl:hidden">
          <CarouselPartenaire />
        </div>
      </div>
    </>
  );
}
