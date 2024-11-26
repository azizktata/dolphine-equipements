import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <footer className="py-8">
      <Image
        src={"/logo_dolphin.webp"}
        alt="logo dolphin"
        width={140}
        height={130}
        className="m-auto mb-8"
      />

      <div className="flex flex-col gap-8 ml-4">
        <div>
          <h3 className="text-xl uppercase mb-2">Informations</h3>
          <ul className="flex flex-col gap-2 pl-2">
            <li>Qui Sommes Nous</li>
            <li>Nos Produits</li>
            <li>Nos Activités</li>
            <li>Nos Partenaires</li>
            <li>Notre Emplacement</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl uppercase mb-2">composant</h3>
          <ul className="flex flex-col gap-2 pl-2">
            <li>hydrauliques</li>
            <li>pneumatiques</li>
            <li>assainissement & nettoyage</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl uppercase mb-2">Coordonnées</h3>
          <ul className="flex flex-col gap-2 pl-2 text-sm">
            <li className="flex items-start gap-1 lowercase">
              {" "}
              <MapPin size={16} /> Angle Rue d’egypte Rue d’espagne 2013, Ben
              arus Tunis
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
