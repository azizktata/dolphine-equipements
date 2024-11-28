import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="py-8 flex flex-col items-center md:flex-row md:justify-center md:m-auto md:py-16 gap-6 bg-[#092844]">
      <div className="">
        <Image
          src={"/logo_dolphin.webp"}
          alt="logo dolphin"
          width={140}
          height={130}
          className="m-auto mb-8"
        />
      </div>

      <div className="flex flex-col gap-8 text-[#F5F5F5]  ml-4 sm:flex-row sm:justify-center">
        <div>
          <h3 className="text-xl font-normal uppercase mb-2 after:block after:w-full after:h-[1px] after:bg-[#488DCA] after:mt-2 after:rounded-md after:scale-x-50 after:origin-left">
            Informations
          </h3>
          <ul className="flex text-sm font-light flex-col gap-2 pl-2">
            <li>
              <a href="./#dolphin">Qui Sommes Nous</a>
            </li>
            <li>
              <a href="./services">Nos Services</a>
            </li>
            <li>
              <a href="./#activités"></a>
              Nos Activités
            </li>
            <li>
              <a href="./#partenaires">Nos Partenaires</a>
            </li>
            <li>
              <a href="./#emplacement">Notre Emplacement</a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-normal uppercase mb-2 after:block after:w-full after:h-[1px] after:bg-[#488DCA] after:mt-2 after:rounded-md after:scale-x-50 after:origin-left">
            produits
          </h3>
          <ul className="flex text-sm font-light flex-col gap-2 pl-2">
            <li>
              <Link href="../produits/hydrauliques">Hydrauliques</Link>
            </li>
            <li>
              <Link href="../produits/pneumatiques">Pneumatiques</Link>
            </li>
            <li>
              <Link href="../produits/nettoyage">
                Assainissement & Nettoyage
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-normal uppercase mb-2 after:content-[''] after:block after:w-full after:h-[1px] after:bg-[#488DCA] after:mt-2 after:rounded-md after:scale-x-50 after:origin-left">
            Coordonnées
          </h3>
          <ul className="flex text-sm font-light flex-col gap-2 pl-2 text-sm">
            <li className="flex items-start gap-1 lowercase ">
              {" "}
              <MapPin size={16} />{" "}
              <span className="sm:max-w-[190px]">
                Angle Rue d’egypte Rue d’espagne 2013, Ben arus Tunis
              </span>
            </li>
            <li className="flex items-center gap-1">
              {" "}
              <Phone size={16} /> +216 58 432 372
            </li>
            <li className="flex items-center gap-1">
              {" "}
              <Phone size={16} /> +216 31 405 705
            </li>
            <li className="flex items-center gap-1">
              {" "}
              <Mail size={16} /> dolphinequipements@orange.tn
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
