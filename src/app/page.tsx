import React from "react";
import Header from "@/components/ui/header";
import Hero from "@/components/ui/hero";
import NextImage from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import CardSvg from "@/components/ui/cardSvg";
import { Image } from "@nextui-org/image";
import CarouselPartenaire from "@/components/ui/carouselPartenaire";
import Footer from "@/components/ui/footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <div className="my-32">
        <div className="w-[90%] m-auto flex flex-col items-center">
          <NextImage
            src={"/logo_dolphin.webp"}
            alt="logo dolphin"
            width={288}
            height={250}
          />
          <h1 className="text-3xl mb-3 font-bold text-center">
            Dolphin Equipements
          </h1>
          <h3 className="text-xl mb-6  text-center">
            Votre partenaire hydraulique & services
          </h3>
          <p className="mb-8">
            Nous appertenons aux groupe FLEXIMAT France, specialisé depuis plus
            de 20 ans dans les domaines de la maintenance, des composants, du
            transport de fluide ainsi que de la mise en propreté des circuits
            hydrauliques
          </p>

          <Button className="mr-auto">
            voir composants <ArrowRight size={24} />
          </Button>
        </div>
      </div>
      <div className="flex flex-col gap-6 mb-32">
        <CardSvg
          title="Hydroliques"
          description="Une référence en matière de composants  hydrauliques et pneumatiques TrΔle®. Pompes, moteurs, mini-blocs d'alimentation, diviseurs, vannes, vannes sélectives, électrovannes et bien plus encore"
          image="/engine.svg"
        />
        <CardSvg
          title="Pneumatiques"
          description="Une référence en matière de composants  hydrauliques et pneumatiques TrΔle®. Pompes, moteurs, mini-blocs d'alimentation, diviseurs, vannes, vannes sélectives, électrovannes et bien plus encore"
          image="/tyre.svg"
        />
        <CardSvg
          title="Assainissement & Nettoyage"
          description="Une référence en matière de composants  hydrauliques et pneumatiques TrΔle®. Pompes, moteurs, mini-blocs d'alimentation, diviseurs, vannes, vannes sélectives, électrovannes et bien plus encore"
          image="/water-pump.svg"
        />
      </div>

      <div className="mb-32">
        <div className="flex flex-col w-[90%] m-auto items-center">
          <div className="flex flex-col items-center mb-8">
            <h2 className="text-2xl bold text-center mb-6">
              Vente, Négoce, étude
            </h2>
            <p className="text-[#828C96] text-center mb-4">
              {" "}
              pour tous équipements hydraulique & pneumatique dans secteurs
              Industries, BTP, Marine
            </p>
            <Image
              width={300}
              height={240}
              alt="NextUI hero Image with delay"
              src="/activite-1.webp"
              className="w-full"
            />
          </div>
          <div className="flex flex-col items-center mb-8">
            <h2 className="text-2xl bold text-center mb-6">
              Maintenace et Réparation
            </h2>
            <p className="text-[#828C96] text-center mb-4">
              {" "}
              pour tous équipements hydraulique & pneumatique dans secteurs
              Industries, BTP, Marine
            </p>
            <Image
              width={300}
              height={240}
              alt="NextUI hero Image with delay"
              src="/activite-2.webp"
              className="w-full"
            />
          </div>
          <div className="flex flex-col items-center mb-8">
            <h2 className="text-2xl bold text-center mb-6">
              Assainissement & Nettoyage
            </h2>
            <p className="text-[#828C96] text-center mb-4">
              {" "}
              Filtration, flushing circuits hydrauliques, Service repair
              YAHTING, Accessoirs secteur assainissement et Nettoyeur Haute
              pression
            </p>
            <Image
              width={300}
              height={240}
              alt="NextUI hero Image with delay"
              src="/activite-3.webp"
              className="w-full"
            />
          </div>
        </div>
      </div>
      <div className="mb-32 ">
        <CarouselPartenaire />
      </div>

      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3196.3435477984444!2d10.223686475685739!3d36.762325072257866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd379bc05dd4d5%3A0x26a7e7cff34d891e!2sDOLPHIN%20EQUIPEMENTS!5e0!3m2!1sfr!2stn!4v1732542346492!5m2!1sfr!2stn"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <Footer />
    </>
  );
}
