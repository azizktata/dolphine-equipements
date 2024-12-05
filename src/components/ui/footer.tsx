import { Facebook, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#092844] text-[#F5F5F5] py-12 px-8">
      <div className="container mx-auto flex flex-col items-center md:flex-row md:justify-between md:items-start gap-12">
        <div className="flex flex-col items-center ">
          <Image
            src="/logo_dolphin.webp"
            alt="Dolphin Logo"
            width={140}
            height={130}
            className="mb-4"
          />
          <p className="text-center max-w-[30ch]  text-sm font-light">
            Votre partenaire en équipements hydrauliques et pneumatiques.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-12">
          <div>
            <h3 className="text-xl font-medium uppercase mb-4 relative after:block after:w-12 after:h-[2px] after:bg-[#488DCA] after:mt-1">
              Informations
            </h3>
            <ul className="space-y-2 text-lg text-gray-100 pl-2">
              <li className="hover:text-gray-300">
                <Link href="/">Acceuil</Link>
              </li>
              <li className="hover:text-gray-300">
                <Link href="/qui-sommes-nous">Qui sommes nous</Link>
              </li>
              <li className="hover:text-gray-300">
                <Link href="/contactez-nous">Contactez-nous</Link>
              </li>
              <li className="hover:text-gray-300">
                <Link href="/#activités">Nos Activités</Link>
              </li>
              <li className="hover:text-gray-300">
                <Link href="/#partenaires">Nos Partenaires</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-medium uppercase mb-4 relative after:block after:w-12 after:h-[2px] after:bg-[#488DCA] after:mt-1">
              Produits
            </h3>
            <ul className="space-y-2 text-lg text-gray-100 pl-2">
              <li className="hover:text-gray-300">
                <Link href="/produits/hydrauliques">Hydrauliques</Link>
              </li>
              <li className="hover:text-gray-300">
                <Link href="/produits/pneumatiques">Pneumatiques</Link>
              </li>
              <li className="hover:text-gray-300">
                <Link href="/produits/assainissement-et-nettoyage">
                  Assainissement & Nettoyage
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-medium uppercase mb-4 relative after:block after:w-12 after:h-[2px] after:bg-[#488DCA] after:mt-1">
              Coordonnées
            </h3>
            <ul className="space-y-3 text-sm text-gray-100 ">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="flex-shrink-0 mt-1" />
                <span>
                  Angle Rue d’Egypte Rue d’Espagne 2013, Ben Arous, Tunis
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Image
                  src="/whatsapp.svg"
                  width={16}
                  height={16}
                  alt="WhatsApp"
                />
                +216 58 432 372
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} />
                +216 31 405 705
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} />
                dolphinequipements@orange.tn
              </li>
              <li className="flex items-center gap-2">
                <Facebook size={16} />
                Dolphin Equipements
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 text-center text-sm font-light text-gray-400 border-t border-gray-600 pt-4">
        © 2024 Dolphin Equipements. Tous droits réservés.
      </div>
    </footer>
  );
}
