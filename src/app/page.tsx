import React from "react";
import Header from "@/components/ui/header";
import Hero from "@/components/ui/hero";
import NextImage from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
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
        <div className="w-[90%]  lg:w-[80%] xl:w-[1024px]  m-auto flex flex-col md:flex-row md:jusitfy-between md:gap-16 items-center">
          <div className="md:w-[45%]">
            <NextImage
              src={"/logo_dolphin.webp"}
              alt="logo dolphin"
              width={320}
              height={250}
              className="md:w-full md:h-full "
            />
          </div>

          <div className="flex flex-col items-center md:items-start md:w-[45%]">
            <h1 className="text-3xl mb-3 font-bold xl:text-4xl ">
              <span className="text-[#316F9E]">Dolphin </span>
              Equipements
            </h1>
            <h3 className="text-lg text-gray-800  mb-6 pl-1 ">
              Votre partenaire{" "}
              <span className="text-[#D4AF37] font-medium"> hydraulique</span> &
              services
            </h3>
            <p className="mb-16 max-w-sm text-gray-600">
              Nous appertenons aux groupe FLEXIMAT France, specialisé depuis
              plus de{" "}
              <span className="text-[#D4AF37] font-medium"> 20 ans </span> dans
              les domaines de la maintenance, des composants, du transport de
              fluide ainsi que de la mise en propreté des circuits hydrauliques
            </p>
            <div className="flex self-start">
              <Button className="mr-auto bg-[#488DCA] rounded-xs">
                voir composants
              </Button>
              <Button className="mr-auto bg-[#1F3A75] rounded-xs">
                <ArrowRight size={24} />
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-[#E9F1F7] py-16 mb-32">
        <CarouselPartenaire />
      </div>
      <div className="text-center py-8 ">
        <h2 className="text-3xl font-bold text-[#092844] mt-2">Nos Services</h2>

        <div className="flex justify-center items-center mt-2">
          <span className="w-10 border-t border-gray-300"></span>
          <span className="mx-1 text-[#D4AF37]">&#10072;</span>
          <span className="mx-1 text-[#D4AF37]">&#10072;</span>
          <span className="mx-1 text-[#D4AF37]">&#10072;</span>
          <span className="w-10 border-t border-gray-300"></span>
        </div>
      </div>
      <div className="flex flex-col gap-6 mb-32 md:flex-row md:flex-wrap md:w-[95%] lg:w-[80%]  md:mx-auto">
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

      <div className="text-center py-8 ">
        <h2 className="text-3xl font-bold text-gray-800 mt-2">Nos Activités</h2>

        <div className="flex justify-center items-center mt-2">
          <span className="w-10 border-t border-gray-300"></span>
          <span className="mx-1 text-[#D4AF37]">&#10072;</span>
          <span className="mx-1 text-[#D4AF37]">&#10072;</span>
          <span className="mx-1 text-[#D4AF37]">&#10072;</span>
          <span className="w-10 border-t border-gray-300"></span>
        </div>
      </div>
      <div className="mb-32">
        <div className="flex flex-col w-[90%] lg:w-[80%] xl:w-[60%] m-auto items-center">
          <div className="flex flex-col items-center  md:w-[100%] md:flex-row md:jusitfy-between mb-8 md:gap-4 md:mx-auto">
            <div className="md:w-[45%] ">
              <h2 className="text-2xl bold text-center md:text-left mb-6 after:content-[''] after:block after:w-full after:h-[2px] after:bg-[#488DCA] after:mt-3 after:rounded-md after:scale-x-50 after:origin-left">
                Vente, Négoce, étude
              </h2>

              <p className="hidden lg:block text-[#828C96]  mb-4 w-[350px] text-left">
                Nous proposons une gamme complète de services adaptés à vos
                besoins en équipements hydrauliques et pneumatiques
              </p>
              <p className="text-[#828C96] text-center mb-4 w-[280px] md:text-left">
                {" "}
                Pour tous équipements hydraulique & pneumatique dans secteurs
                Industries, BTP, Marine
              </p>
            </div>
            <div className="md:w-[55%] md:h-[280px] md:bg-[#F7EDDB] ">
              <Image
                width={350}
                height={280}
                alt="NextUI hero Image with delay"
                src="/activite-1.webp"
                className="object-cover  md:my-4 md:mr-4 md:w-full md:h-full rounded-xs md:-ml-3"
              />
            </div>
          </div>
          <div className="flex flex-col items-center  md:w-[100%] md:flex-row md:jusitfy-between mb-8 md:gap-4 md:mx-auto">
            <div className="md:w-[45%]">
              <h2 className="text-2xl bold text-center mb-6 md:text-left after:content-[''] after:block after:w-full after:h-[2px] after:bg-[#488DCA] after:mt-3 after:rounded-md after:scale-x-50 after:origin-left">
                Maintenace et Réparation
              </h2>
              <p className="hidden lg:block text-[#828C96]  mb-4 w-[350px] text-left">
                Nous offrons des services complets de maintenance et de
                réparation pour tous types d’équipements hydrauliques et
                pneumatiques
              </p>
              <p className="text-[#828C96] text-center mb-4 w-[280px] md:text-left">
                {" "}
                Pour tous équipements hydraulique & pneumatique dans secteurs
                Industries, BTP, Marine
              </p>
            </div>
            <div className="md:w-[55%] md:h-[280px] md:bg-[#F7EDDB] ">
              <Image
                width={350}
                height={280}
                alt="NextUI hero Image with delay"
                src="/activite-2.webp"
                className="object-cover  md:my-4 md:mr-4 md:w-full md:h-full rounded-xs md:-ml-3"
              />
            </div>
          </div>
          <div className="flex flex-col items-center  md:w-[100%] md:flex-row md:jusitfy-between mb-8 md:gap-4 md:mx-auto">
            <div className="md:w-[45%]">
              <h2 className="text-2xl bold text-center mb-6 md:text-left after:content-[''] after:block after:w-full after:h-[2px] after:bg-[#488DCA] after:mt-3 after:rounded-md after:scale-x-50 after:origin-left">
                Assainissement & Nettoyage
              </h2>
              <p className="text-[#828C96] text-center mb-4 w-[280px] lg:w-[350px] md:text-left">
                {" "}
                Nous offrons des services d’assainissement et nettoyage,
                incluant filtration, flushing hydraulique, réparation yachting,
                accessoires d’assainissement et nettoyeurs haute pression.
              </p>
            </div>
            <div className="md:w-[55%] md:h-[280px] md:bg-[#F7EDDB] ">
              <Image
                width={350}
                height={280}
                alt="NextUI hero Image with delay"
                src="/activite-3.webp"
                className="object-cover  md:my-4 md:mr-4 md:w-full md:h-full rounded-xs md:-ml-3"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="text-center py-8 ">
        <h2 className="text-3xl font-bold text-gray-800 mt-2">
          Notre Emplacement
        </h2>

        <div className="flex justify-center items-center mt-2">
          <span className="w-10 border-t border-gray-300"></span>
          <span className="mx-1 text-[#D4AF37]">&#10072;</span>
          <span className="mx-1 text-[#D4AF37]">&#10072;</span>
          <span className="mx-1 text-[#D4AF37]">&#10072;</span>
          <span className="w-10 border-t border-gray-300"></span>
        </div>
      </div>
      <div className="w-full h-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3196.3435477984444!2d10.223686475685739!3d36.762325072257866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd379bc05dd4d5%3A0x26a7e7cff34d891e!2sDOLPHIN%20EQUIPEMENTS!5e0!3m2!1sfr!2stn!4v1732542346492!5m2!1sfr!2stn"
          style={{
            border: 0,
            width: "100%",
            height: "420px",
          }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <Footer />
    </>
  );
}
