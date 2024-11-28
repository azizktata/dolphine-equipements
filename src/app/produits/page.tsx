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

export default async function page() {
  const data = await getAll();

  return (
    <>
      <Header />
      <div className="bg-[#f4f8ff]">
        <div className="pt-16 pb-64 flex flex-col w-[90%]  lg:w-[986px] m-auto  justify-center ">
          {/* <div className="hidden lg:block lg:w-[350px]">
          <RecursiveAccordion data={data} active={"composants"} />
        </div> */}

          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Acceuil</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-blue">Produits</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <ListCards composants={data} />
        </div>
      </div>
      <Footer />
    </>
  );
}
