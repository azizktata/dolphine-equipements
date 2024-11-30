import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import { getAll } from "@/utils/getProduits";

import ListCards from "@/components/ui/listCards";
import RecursiveAccordion from "@/components/ui/recursiveAccordion";

export default async function page() {
  const data = await getAll();

  return (
    <>
      <Header />
      <div className="bg-[#f4f8ff]">
        <div className="pt-16 pb-64 flex flex-col lg:flex-row w-[90%] gap-8 lg:w-[986px] m-auto lg:justify-between lg:items-baseline justify-center min-h-[100vh]">
          <div className="hidden lg:block lg:w-[250px]">
            <RecursiveAccordion data={data} />
          </div>
          <div className="flex-1">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">Acceuil</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage className="text-blue">
                    Produits
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>

            <ListCards composants={data} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
