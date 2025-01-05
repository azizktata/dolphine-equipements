import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import { getAll } from "@/utils/getProduits";

import ListCards from "@/components/ui/listCards";
import RecursiveAccordion from "@/components/ui/recursiveAccordion";
import { Metadata } from "next";

export const metadata: Metadata = {
  description:
    "Découvrez nos produits hydrauliques, pneumatiques, et de maintenance et nettoyage industriel. Fournir des produits et services hydrauliques et pneumatiques de qualité. Basés à Tunis",
};
export default async function page() {
  const data = await getAll();

  return (
    <div className="">
      <div className="pt-16 pb-64 flex flex-col lg:flex-row w-[90%] gap-12  m-auto lg:justify-between lg:items-start justify-center min-h-[100vh]">
        <div className="w-[90%] mx-auto lg:w-[350px]">
          <RecursiveAccordion data={data} />
        </div>
        <div className=" flex-1 ">
          <Breadcrumb className="hidden sm:flex">
            <BreadcrumbList className="text-base">
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Accueil</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>
                  <BreadcrumbLink className="text-blue-600">
                    Produits
                  </BreadcrumbLink>
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <ListCards composants={data} />
        </div>
      </div>
    </div>
  );
}
