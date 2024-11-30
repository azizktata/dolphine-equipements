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
import { Composant, Data } from "@/types";
import RecursiveAccordion from "@/components/ui/recursiveAccordion";
export default async function page({
  params,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  params: any;
}) {
  const paramss = await params;
  const title = paramss[" slug"][paramss[" slug"].length - 1];

  const data = await getAll();

  function findElementByTitle(data: Composant[], title: string): Data | null {
    for (const item of data) {
      if (item.title.toLowerCase().replace(/ /g, "-") === title) {
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
  const composants = findElementByTitle(data.children, title);

  return (
    <div className="bg-[#f4f8ff]">
      <Header />
      <div className="pt-16 pb-64 flex flex-col lg:flex-row w-[90%] gap-16 lg:w-[1024px] m-auto lg:justify-between lg:items-baseline justify-center min-h-[100vh]">
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
                <BreadcrumbLink href="/produits">Produits</BreadcrumbLink>
              </BreadcrumbItem>
              {paramss[" slug"].length > 0
                ? paramss[" slug"].map((item: string) => (
                    <BreadcrumbList key={item}>
                      <BreadcrumbSeparator />
                      <BreadcrumbItem>
                        <BreadcrumbPage>
                          <BreadcrumbLink href=".">{item}</BreadcrumbLink>
                        </BreadcrumbPage>
                      </BreadcrumbItem>
                    </BreadcrumbList>
                  ))
                : null}
            </BreadcrumbList>
          </Breadcrumb>

          {composants && <ListCards composants={composants} />}
        </div>
      </div>

      <Footer />
    </div>
  );
}
