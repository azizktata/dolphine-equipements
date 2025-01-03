import React from "react";
import Hero from "@/components/ui/hero";
import NextImage from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import CardSvg from "@/components/ui/cardSvg";
import CarouselPartenaire from "@/components/ui/carouselPartenaire";
import Link from "next/link";
import ActiviteContainer from "@/components/ui/activiteContainer";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <div className="my-24">
          <div
            id="dolphin"
            className="w-[90%]  lg:w-[85%] xl:w-[80%]  gap-2 m-auto flex flex-col md:flex-row md:jusitfy-between   items-center"
          >
            <div className=" md:w-[55%] lg:w-[45%]">
              <NextImage
                src={"/logo_dolphin.webp"}
                alt="logo dolphin"
                width={320}
                height={250}
                className="md:w-full md:h-full xl:p-16"
                priority
              />
            </div>

            <div className="flex flex-col items-center md:items-start  m-auto">
              <h1 className="text-2xl tracking-widest text-gray-800 font-medium mb-2  lg:text-4xl xl:text-5xl ">
                Dolphin Equipements
              </h1>
              <h2 className="text-base text-center mb-4  text-[#2E699E] tracking-widest font-medium ">
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

              <Link className="self-start" href="/qui-sommes-nous">
                <Button className="bg-[#2E699E] rounded-sm text-base lg:text-lg px-4 py-6 ml-6 md:ml-0 text-white  font-normal  hover:bg-[#1F3A75]">
                  plus d&apos;infos
                  <ArrowRight size={24} />
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <section className="bg-[#0B1A28] pt-16 pb-8  mb-16">
          <div className="flex flex-col gap-4 items-center  md:flex-row w-[90%]  mx-auto">
            <CardSvg
              title="Hydrauliques"
              description="Une référence en matière de composants  hydrauliques et pneumatiques TrΔle®. Pompes, moteurs, mini-blocs d'alimentation, diviseurs, vannes, vannes sélectives, électrovannes et bien plus encore"
              image="/hydrauliques-2.webp"
            />
            <CardSvg
              title="Pneumatiques"
              description="Une référence en matière de composants  hydrauliques et pneumatiques TrΔle®. Pompes, moteurs, mini-blocs d'alimentation, diviseurs, vannes, vannes sélectives, électrovannes et bien plus encore"
              image="/pneumatique.webp"
            />
            <CardSvg
              title="Assainissement et nettoyage"
              description="Une référence en matière de composants  hydrauliques et pneumatiques TrΔle®. Pompes, moteurs, mini-blocs d'alimentation, diviseurs, vannes, vannes sélectives, électrovannes et bien plus encore"
              image="/lavage.webp"
            />
          </div>
        </section>
        <div id="activités" className="text-center py-8 mb-8 lg:mb-16">
          <h2 className="text-4xl tracking-wide font-medium text-gray-800 mt-2">
            Nos Activités
          </h2>

          <div className="flex justify-center items-center mt-2">
            <span className="w-10 border-t border-gray-300"></span>
            <span className="mx-1 text-[#30085E]">&#10072;</span>
            <span className="mx-1 text-[#30085E]">&#10072;</span>
            <span className="mx-1 text-[#30085E]">&#10072;</span>
            <span className="w-10 border-t border-gray-300"></span>
          </div>
        </div>
        <div className="mb-32">
          <div className="flex flex-col gap-8 lg:w-[90%] mx-auto">
            <ActiviteContainer
              title="Vente et négoce"
              description="Une large gamme d’équipements hydrauliques et pneumatiques disponibles dans nos boutiques à Tunis."
              image="/act-1.webp"
            />
            <ActiviteContainer
              title="Maintenace et Réparation"
              description="Nous offrons des services complets de maintenance et de réparation pour tous types d’équipements hydrauliques et pneumatiques."
              image="/act-2.webp"
              inverted={true}
              bgColor="bg-[#F7EDDB]"
            />
            <ActiviteContainer
              title="Étude et conseil"
              description="Des solutions personnalisées adaptées à vos besoins spécifiques.pour tous types d’équipements hydrauliques et pneumatiques."
              image="/act-3.webp"
              bgColor="bg-[#CBCCDC]"
            />
          </div>
        </div>
        <div id="partenaires" className=" bg-[#E9F1F7] py-16 lg:py-32 mb-32">
          <CarouselPartenaire />
        </div>
        <div className="text-center py-8 mb-8 ">
          <h2 className="text-3xl lg:text-4xl tracking-wide font-medium text-gray-800 mt-2">
            Vous êtes les Bienvenus
          </h2>

          <div className="flex justify-center items-center mt-2">
            <span className="w-10 border-t border-gray-300"></span>
            <span className="mx-1 text-[#30085E]">&#10072;</span>
            <span className="mx-1 text-[#30085E]">&#10072;</span>
            <span className="mx-1 text-[#30085E]">&#10072;</span>
            <span className="w-10 border-t border-gray-300"></span>
          </div>
        </div>
        <div className="w-full h-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3193.8974444571472!2d10.18840837640533!3d36.820977366527195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd348b69ba1b1d%3A0x544a1cf0ed915d93!2sRue%20Mohamed%20Badra%2C%20Tunis!5e0!3m2!1sfr!2stn!4v1733904716247!5m2!1sfr!2stn"
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
