import React from "react";
import Hero from "@/components/ui/hero";
import NextImage from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import CardSvg from "@/components/ui/cardSvg";
import { Image } from "@nextui-org/image";
import CarouselPartenaire from "@/components/ui/carouselPartenaire";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <div className="my-32">
          <div
            id="dolphin"
            className="w-[90%]  lg:w-[85%]   m-auto flex flex-col md:flex-row md:jusitfy-between  md:gap-8 items-center"
          >
            <div className=" md:w-[55%] lg:w-[45%]">
              <NextImage
                src={"/logo_dolphin.webp"}
                alt="logo dolphin"
                width={320}
                height={250}
                className="md:w-full md:h-full xl:p-16"
              />
            </div>

            <div className="flex flex-col items-center md:items-start  m-auto">
              <h1 className="text-2xl tracking-widest text-gray-800 font-medium mb-2 sm:text-3xl lg:text-4xl xl:text-5xl ">
                Dolphin Equipements
              </h1>
              <h2 className="text-base text-center mb-6  text-[#2E699E] tracking-widest font-medium ">
                Votre partenaire hydraulique & services
              </h2>
              <p className="mb-16  pl-6 md:pl-0  lg:text-lg  font-light text-gray-600">
                Nous appertenons aux groupe FLEXIMAT France, specialisé depuis
                plus de{" "}
                <span className="text-[#2E699E] font-medium"> 20 ans </span>{" "}
                dans les domaines de la maintenance, des composants, du
                transport de fluide ainsi que de la mise en propreté des
                circuits hydrauliques
              </p>

              <Link className="self-start" href="/about">
                <Button className="bg-[#2E699E] rounded-sm text-base lg:text-lg px-4 py-6 ml-6 md:ml-0 text-white  font-normal  hover:bg-[#1F3A75]">
                  voir plus
                  <ArrowRight size={24} />
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div id="partenaires" className=" bg-[#E9F1F7] py-16 lg:py-32 mb-32">
          <CarouselPartenaire />
        </div>
        {/* <div id="catalogues" className="text-center py-8 mb-16">
          <h2 className="text-3xl lg:text-4xl tracking-wide font-medium text-[#092844] mt-2">
            Notre Catalogues
          </h2>

          <div className="flex justify-center items-center mt-2">
            <span className="w-10 border-t border-gray-300"></span>
            <span className="mx-1 text-[#D4AF37]">&#10072;</span>
            <span className="mx-1 text-[#D4AF37]">&#10072;</span>
            <span className="mx-1 text-[#D4AF37]">&#10072;</span>
            <span className="w-10 border-t border-gray-300"></span>
          </div>
        </div> */}

        <div id="activités" className="text-center py-8 mb-8 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl tracking-wide font-medium text-gray-800 mt-2">
            Nos Activités
          </h2>

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
            <div className="flex flex-col items-center  md:w-[100%] md:flex-row md:jusitfy-between mb-8 md:gap-8 md:mx-auto">
              <div className="md:w-[45%] ">
                <h2 className="text-2xl bold text-center md:text-left mb-6 after:content-[''] after:block after:w-full after:h-[2px] after:bg-[#488DCA] after:mt-3 after:rounded-md after:scale-x-50 after:origin-center lg:after:origin-left">
                  Vente et négoce
                </h2>

                <p className="hidden text-lg font-light lg:block text-gray-600  mb-4  text-left">
                  Une large gamme d’équipements hydrauliques et pneumatiques
                  disponibles dans nos boutiques à Tunis.
                </p>
                <p className="text-gray-600 text-lg font-light text-center mb-4 md:text-left">
                  {" "}
                  Tous équipements hydraulique & pneumatique dans secteurs
                  Industries, BTP, Marine
                </p>
              </div>
              <div className="md:w-[50%] md:h-[280px] md:bg-[#F7EDDB] ">
                <Image
                  width={350}
                  height={280}
                  alt="NextUI hero Image with delay"
                  src="/activite-1.webp"
                  className="object-cover  md:my-4 md:mr-4 md:w-full md:h-full rounded-xs md:-ml-3"
                />
              </div>
            </div>
            <div className="flex flex-col items-center  md:w-[100%] md:flex-row md:jusitfy-between mb-8 md:gap-8 md:mx-auto">
              <div className="md:w-[45%]">
                <h2 className="text-2xl bold text-center mb-6 md:text-left after:content-[''] after:block after:w-full after:h-[2px] after:bg-[#488DCA] after:mt-3 after:rounded-md after:scale-x-50 after:origin-center lg:after:origin-left">
                  Maintenace et Réparation
                </h2>
                <p className="hidden lg:block font-light text-gray-600 text-lg  mb-4  text-left">
                  Nous offrons des services complets de maintenance et de
                  réparation pour tous types d’équipements hydrauliques et
                  pneumatiques
                </p>
                <p className="text-gray-600 font-light text-lg text-center mb-4  md:text-left">
                  {" "}
                  Pour tous équipements hydraulique & pneumatique dans secteurs
                  Industries, BTP, Marine
                </p>
              </div>
              <div className="md:w-[50%] md:h-[280px] md:bg-[#F7EDDB] ">
                <Image
                  width={350}
                  height={280}
                  alt="NextUI hero Image with delay"
                  src="/activite-2.webp"
                  className="object-cover  md:my-4 md:mr-4 md:w-full md:h-full rounded-xs md:-ml-3"
                />
              </div>
            </div>
            <div className="flex flex-col items-center  md:w-[100%] md:flex-row md:jusitfy-between mb-8 md:gap-8 md:mx-auto">
              <div className="md:w-[45%]">
                <h2 className="text-2xl bold text-center mb-6 md:text-left after:content-[''] after:block after:w-full after:h-[2px] after:bg-[#488DCA] after:mt-3 after:rounded-md after:scale-x-50 after:origin-center lg:after:origin-left">
                  Étude et conseil
                </h2>
                <p className="text-gray-600 font-light text-lg text-center mb-4  md:text-left">
                  {" "}
                  Des solutions personnalisées adaptées à vos besoins
                  spécifiques.pour tous types d’équipements hydrauliques et
                  pneumatiques
                </p>
              </div>
              <div className="md:w-[50%] md:h-[280px] md:bg-[#F7EDDB] ">
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
        <div className="flex flex-col gap-6 mb-32 md:flex-row w-[90%] mx-auto">
          <CardSvg
            title="Hydrauliques"
            description="Une référence en matière de composants  hydrauliques et pneumatiques TrΔle®. Pompes, moteurs, mini-blocs d'alimentation, diviseurs, vannes, vannes sélectives, électrovannes et bien plus encore"
            image="/hydrauliques.webp"
          />
          <CardSvg
            title="Pneumatiques"
            description="Une référence en matière de composants  hydrauliques et pneumatiques TrΔle®. Pompes, moteurs, mini-blocs d'alimentation, diviseurs, vannes, vannes sélectives, électrovannes et bien plus encore"
            image="/pneumatiques.webp"
          />
          <CardSvg
            title="Assainissement & Nettoyage"
            description="Une référence en matière de composants  hydrauliques et pneumatiques TrΔle®. Pompes, moteurs, mini-blocs d'alimentation, diviseurs, vannes, vannes sélectives, électrovannes et bien plus encore"
            image="/lavage.webp"
          />
        </div>
        <div className="text-center py-8 mb-8 ">
          <h2 className="text-3xl lg:text-4xl tracking-wide font-medium text-gray-800 mt-2">
            Vous êtes le Bienvenu
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
              height: "480px",
            }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="dolphin equipements map"
            aria-placeholder="Angle Rue d’egypte Rue d’espagne 2013, Ben arus Tunis"
          ></iframe>
        </div>
      </main>
    </>
  );
}
