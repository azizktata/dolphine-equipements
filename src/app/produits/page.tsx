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

export default async function page() {
  const data = await getAll();

  return (
    <div className="bg-[#f4f8ff]">
      <div className="pt-16 pb-64 flex flex-col lg:flex-row w-[90%] gap-16  m-auto lg:justify-between lg:items-baseline justify-center min-h-[100vh]">
        <div className="hidden lg:block lg:w-[400px]">
          <RecursiveAccordion data={data} />
        </div>
        <div className="flex-1 border">
          <Breadcrumb>
            <BreadcrumbList className="text-base">
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Acceuil</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>
                  <BreadcrumbLink className="text-[#4588c5]">
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
