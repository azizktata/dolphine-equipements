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
              <h1 className="mb-2  font-medium text-3xl lg:text-5xl  tracking-widest text-white ">
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
      <div className="max-w-[70ch] px-4 mx-auto mb-16 flex flex-col items-start justify-center">
        <h1 className="text-3xl lg:text-4xl mb-16  font-semibold text-center tracking-wide">
          À Propos de Dolphin Équipements
        </h1>

        <div className="mb-12 lg:mb-16">
          <h3 className="text-2xl font-medium text-gray-800 lg:text-3xl mb-4 ">
            Votre Partenaire en Solutions Hydrauliques et Pneumatiques
          </h3>
          <p className="max-w-[60ch] text-lg text-gray-700 font-light">
            Bienvenue chez Dolphin Équipements, un acteur incontournable dans le
            domaine de l&apos;hydraulique et des services en Tunisie.
            <span className="block mt-2"></span>
            En tant que membre du groupe FLEXIMAT France, fort de plus de 20 ans
            d&apos;expertise, nous sommes fiers de proposer des solutions
            innovantes et adaptées aux besoins des professionnels dans divers
            secteurs, tels que l&apos;industrie, le BTP et la marine.
          </p>
        </div>
        <div className="mb-12 lg:mb-16">
          <h3 className="text-2xl font-medium text-gray-800 lg:text-3xl mb-4">
            Notre Mission
          </h3>
          <p className="max-w-[60ch] text-lg text-gray-700 font-light">
            Fournir des produits et services hydrauliques et pneumatiques de
            qualité, conçus pour optimiser vos performances et garantir la
            durabilité de vos équipements.
            <span className="block mt-2"></span>
            Que ce soit pour la vente, la maintenance ou le nettoyage des
            circuits hydrauliques, nous nous engageons à vous accompagner avec
            expertise et professionnalisme.
          </p>
        </div>
        <div className="mb-12 lg:mb-16 ">
          <h3 className="text-2xl font-medium text-gray-800 lg:text-3xl mb-4  ">
            Nos Activités
          </h3>
          <ul className="max-w-[70ch] text-lg text-gray-700 font-light space-y-4 leading-relaxed">
            <li>
              <span className="font-medium text-gray-700">
                Vente et négoce:
              </span>{" "}
              Une large gamme d’équipements hydrauliques et pneumatiques
              disponibles dans nos boutiques à Tunis.
            </li>
            <li>
              <span className="font-medium text-gray-700">
                Étude et conseil:
              </span>{" "}
              Des solutions personnalisées adaptées à vos besoins spécifiques.
            </li>
            <li>
              <span className="font-medium text-gray-700">
                Maintenance et réparation:
              </span>{" "}
              Des services rapides et fiables pour prolonger la durée de vie de
              vos équipements.
            </li>
            <li>
              <span className="font-medium text-gray-700">
                Assainissement et nettoyage:
              </span>{" "}
              Filtration, flushing hydraulique, accessoires de nettoyage, et
              nettoyeurs haute pression pour des performances optimales.
            </li>
          </ul>
        </div>
        <div className="mb-12 lg:mb-16 ">
          <h3 className="text-2xl font-medium text-gray-800 lg:text-3xl mb-4  ">
            {" "}
            Pourquoi Choisir Dolphin Équipements ?
          </h3>
          <ul className="max-w-[70ch] text-lg text-gray-700 font-light space-y-4 leading-relaxed mb-6">
            <li>
              <span className="font-medium text-gray-700">
                Expertise reconnue:
              </span>{" "}
              Grâce à notre appartenance au groupe FLEXIMAT France.
            </li>
            <li>
              <span className="font-medium text-gray-700">
                Produits de qualité:
              </span>{" "}
              Adaptés aux exigences des secteurs industriels, du BTP et de la
              marine.
            </li>
            <li>
              <span className="font-medium text-gray-700">
                Services personnalisés:
              </span>{" "}
              Un accompagnement de proximité pour répondre à tous vos besoins.
            </li>
          </ul>
          <p className="text-lg max-w-[70ch] text-gray-700 font-light leading-relaxed">
            Chez{" "}
            <span className="font-medium text-gray-700">
              Dolphin Équipements
            </span>
            , nous faisons bien plus que vendre des équipements : nous devenons
            votre partenaire de confiance pour toutes vos solutions hydrauliques
            et pneumatiques.
            <span className="block mt-2">
              Venez nous rencontrer à <span className="font-medium">Tunis</span>{" "}
              et découvrez comment nous pouvons vous aider à optimiser vos
              performances et garantir la fiabilité de vos équipements !
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
