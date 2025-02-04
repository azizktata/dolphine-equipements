import React from "react";

import { getAll } from "@/utils/getProduits";
import RecursiveAccordion from "@/components/ui/recursiveAccordion";
import ListCardsV2 from "@/components/ui/listCardsV2";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import { Metadata } from "next";
export const metadata: Metadata = {
  description:
    "Découvrez nos produits hydrauliques, pneumatiques, et de maintenance et nettoyage industriel. Fournir des produits et services hydrauliques et pneumatiques de qualité. Basés à Tunis",
};
export default async function page() {
  const data = await getAll();

  return (
    <div className="bg-white">
      <div className="pt-16 pb-64 flex flex-col lg:flex-row w-[90%] gap-12  m-auto lg:justify-between items-start justify-center min-h-[100vh]">
        <div className="w-full mx-auto lg:w-[400px]">
          <RecursiveAccordion data={data} />
        </div>
        <div className="w-full lg:w-[calc(100%-350px)]">
          <Breadcrumb>
            <BreadcrumbList className="text-base font-medium text-gray-900 ">
              <BreadcrumbItem>
                <BreadcrumbLink href="/">acceuil</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/produits">produits</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <ListCardsV2 composants={data} />
        </div>
      </div>
    </div>
  );
}
