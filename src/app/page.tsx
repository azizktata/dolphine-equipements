import React from "react";
import Hero from "@/components/ui/hero";
import NextImage from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapIcon, Phone } from "lucide-react";

import Link from "next/link";
import ContactCarousel from "@/components/ui/contactCarousel";
import CardCategorie from "@/components/ui/cardCategorie";
import Image from "next/image";
import { getAll } from "@/utils/getProduits";
import { Composant, Data } from "@/types";
import ListCards from "@/components/ui/listCards";
import ActiviteCarousel from "@/components/ui/activiteCarousel";

export default async function Home() {
  const partenairs = [
    "/partenaire-1.webp",
    // "/partenaire-2.webp",
    "/partenaire-3.jpg",
    "/partenaire-4.webp",
    "/partenaire-5.webp",
    // "/partenaire-7.webp",
    "/partenaire-8.webp",
    "/partenaire-9.webp",
    // "/partenaire-10.webp",
    // "/partenaire-11.webp",
  ];
  const data = await getAll();

  function findElementByTitle(data: Composant[], title: string): Data | null {
    for (const item of data) {
      if (
        decodeURIComponent(item.title).toLowerCase().replace(/ /g, "-") ===
        decodeURIComponent(title)
      ) {
        return item as Data;
      }
      if (item.children) {
        const found: Data | null = findElementByTitle(item.children, title);
        if (found) {
          return found;
        }
      }
    }
    return null;
  }
  const composantsHyd = findElementByTitle(data.children, "hydrauliques");
  const composantsPneum = findElementByTitle(data.children, "pneumatiques");
  const composantsAs = findElementByTitle(
    data.children,
    "assainissement-et-nettoyage"
  );
  return (
    <>
      <main>
        <Hero />
        <section>
          <ContactCarousel />
        </section>
        <section>
          <div className="flex justify-between items-center w-[90%] mx-auto mt-16">
            <h1 className="text-4xl font-medium">Nos Catégories</h1>
            <Link href="/produits">
              <Button className="bg-[#4187C6] hidden md:flex rounded-xl text-base lg:text-lg px-10 py-7 text-white  font-normal  hover:bg-[#1F3A75]">
                Voir nos produits
              </Button>
            </Link>
          </div>
          <div className="flex flex-col items-center gap-4 w-[90%]  mx-auto md:flex-row  justify-center my-16">
            <CardCategorie title="Hydrauliques" img="/hydrauliques-v1.png" />
            <CardCategorie title="Pneumatiques" img="/hydrauliques-v1.png" />
            <CardCategorie
              title="Assainissement et nettoyage"
              img="/hydrauliques-v1.png"
            />
            <Link href="/produits">
              <Button className="bg-[#4187C6] flex md:hidden  rounded-xl text-base lg:text-lg px-10 py-7 text-white  font-normal  hover:bg-[#1F3A75]">
                Voir nos produits
              </Button>
            </Link>
          </div>
        </section>
        <section className="w-[90%] mx-auto my-8">
          <h1 className="text-3xl font-semibold self-start">
            Qui sommes-nous ?
          </h1>
          <div>
            <div
              id="dolphin"
              className="w-full lg:w-[90%] mt-8 lg:mt-0  gap-2 mx-auto flex flex-col sm:flex-row sm:jusitfy-between   items-center"
            >
              <div className="flex flex-col items-center sm:items-start order-2 sm:order-1 w-full sm:w-1/2 m-auto">
                <h1 className="text-3xl sm:text-2xl text-center  text-gray-800 font-medium mb-2  lg:text-4xl xl:text-5xl ">
                  Dolphin Equipements
                </h1>
                <h2 className="text-base tracking-widest sm:text-sm sm:tracking-normal  md:text-base text-center mb-4  text-[#2E699E] md:tracking-wide font-medium ">
                  Votre partenaire hydraulique & services
                </h2>
                <p className="mb-16 max-w-[45ch] lg:text-lg  font-light text-gray-600">
                  Nous appertenons aux groupe FLEXIMAT France, specialisé depuis
                  plus de{" "}
                  <span className="text-[#2E699E] font-medium"> 20 ans </span>{" "}
                  dans les domaines de la maintenance, des composants, du
                  transport de fluide ainsi que de la mise en propreté des
                  circuits hydrauliques
                </p>

                <Link className="self-start " href="/qui-sommes-nous">
                  <Button className="bg-[#2E699E] rounded-sm text-base lg:text-lg px-4 py-6 ml-4 sm:ml-0 text-white  font-normal  hover:bg-[#1F3A75]">
                    plus d&apos;infos
                    <ArrowRight size={24} />
                  </Button>
                </Link>
              </div>
              <div className=" md:w-[50%] order-1 md:order-2">
                <NextImage
                  src={"/logo_dolphin.webp"}
                  alt="logo dolphin"
                  width={320}
                  height={250}
                  className="md:w-full md:h-full xl:p-16"
                  priority
                />
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="flex justify-between items-center w-[90%] mx-auto mt-16">
            <h1 className="text-4xl font-medium">Découvrez plus</h1>
            <Link href="/produits">
              <Button className="bg-[#4187C6] hidden md:flex rounded-xl text-base lg:text-lg px-10 py-7 text-white  font-normal  hover:bg-[#1F3A75]">
                Voir nos produits
              </Button>
            </Link>
          </div>

          <div id="hydrauliques" className="flex flex-col">
            <div className="flex justify-between items-center w-[90%] mx-auto mt-16">
              <h1 className="text-2xl font-medium">Hydrauliques</h1>
              <Link
                href="/produits/hydrauliques"
                className="flex items-center gap-2 text-[#4187C6]"
              >
                Plus de produits
                <Image
                  src="/right-arrow.svg"
                  alt="arrow right"
                  className="hidden sm:flex"
                  width={32}
                  height={32}
                />
              </Link>
            </div>
            <div className="w-[90%] mx-auto">
              {composantsHyd && (
                <ListCards composants={composantsHyd} type="hydrauliques" />
              )}
            </div>
          </div>
          <div id="Pneumatiques" className="flex flex-col">
            <div className="flex justify-between items-center w-[90%] mx-auto mt-16">
              <h1 className="text-2xl font-medium">Pneumatiques</h1>
              <Link
                href="/produits/pneumatiques"
                className="flex items-center gap-2 text-[#4187C6]"
              >
                Plus de produits
                <Image
                  src="/right-arrow.svg"
                  alt="arrow right"
                  className="hidden sm:flex"
                  width={32}
                  height={32}
                />
              </Link>
            </div>
            <div className="w-[90%] mx-auto">
              {composantsPneum && (
                <ListCards composants={composantsPneum} type="pneumatiques" />
              )}
            </div>
          </div>
          <div id="Assainissements et nettoyage" className="flex flex-col">
            <div className="flex justify-between items-center w-[90%] mx-auto mt-16">
              <h1 className="text-2xl font-medium">
                Assainissements et nettoyage
              </h1>
              <Link
                href="/produits/assainissement-et-nettoyage"
                className="flex items-center gap-2 text-[#4187C6]"
              >
                Plus de produits
                <Image
                  src="/right-arrow.svg"
                  alt="arrow right"
                  className="hidden sm:flex"
                  width={32}
                  height={32}
                />
              </Link>
            </div>
            <div className="w-[90%] mx-auto">
              {composantsAs && (
                <ListCards
                  composants={composantsAs}
                  type="assainissement-et-nettoyage"
                />
              )}
            </div>
          </div>
        </section>

        <section
          id="nos-marques"
          className="mx-auto mt-16 flex flex-col w-[90%] mb-8"
        >
          <h1 className="text-3xl font-semibold">Nos Marques</h1>
          <div className="  grid grid-cols-2 sm:grid-cols-3 gap-16 max-w-5xl w-full mx-auto  items-center mt-8">
            {partenairs.map((img, index) => (
              <Image
                src={img}
                alt="hydrauliques"
                width={175}
                height={175}
                className="object-fill"
                key={index}
              />
            ))}
          </div>
        </section>

        <section id="activités" className="bg-[#4187C6] mt-16 text-white">
          <div className="w-[90%] mx-auto py-16">
            <h1 className="text-3xl font-semibold">Nos Activités</h1>
            <ActiviteCarousel />
          </div>
        </section>

        <div className="w-[90%] mx-auto py-8 mb-8 ">
          <h1 className="text-3xl font-semibold mb-16">Contactez-nous</h1>
          <div className="flex flex-col items-center justify-center mt-2 gap-8">
            <h3 className="font-semibold text-2xl">Plus de détails</h3>
            <p className="text-gray-800 text-lg font-light text-center">
              Pour plus de détails sur nos produits et services, contactez-nous
              par téléphone ou consultez notre position sur la carte ci-dessous.
            </p>
            <div className="flex items-center gap-8">
              <Button className="bg-[#4085C6] rounded-xs text-base lg:text-lg px-4 py-6 text-white  font-normal  hover:bg-[#1F3A75]">
                <MapIcon size={24} />
                Localisation
              </Button>
              <Button className="bg-[#4085C6] rounded-xs text-base lg:text-lg px-4 py-6 text-white  font-normal  hover:bg-[#1F3A75]">
                <Phone size={24} />
                58 432 376
              </Button>
            </div>
          </div>
        </div>
        <div className="w-[90%] mx-auto h-full rounded-xl border border-[#4085C6] mb-8">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3193.8974444571472!2d10.18840837640533!3d36.820977366527195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd348b69ba1b1d%3A0x544a1cf0ed915d93!2sRue%20Mohamed%20Badra%2C%20Tunis!5e0!3m2!1sfr!2stn!4v1733904716247!5m2!1sfr!2stn"
            style={{
              border: 0,
              width: "100%",
              height: "480px",
              borderRadius: "1rem",
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
