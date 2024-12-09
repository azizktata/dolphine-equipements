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
  const composants = findElementByTitle(data.children, title);

  return (
    <div className="">
      <div className="pt-16 pb-64 flex flex-col lg:flex-row w-[90%]  gap-16  m-auto lg:justify-between lg:items-baseline justify-center min-h-[100vh]">
        <div className="hidden  lg:flex lg:w-[400px]  flex-col gap-6  border-right">
          <RecursiveAccordion data={data} />
        </div>
        <div className="flex-1">
          <Breadcrumb>
            <BreadcrumbList className="text-base">
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Accueil</BreadcrumbLink>
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
                          <BreadcrumbLink
                            className="capitalize text-[#4588c5]"
                            href="."
                          >
                            <span>
                              {decodeURIComponent(item).replace(/-/g, " ")}
                            </span>
                          </BreadcrumbLink>
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
    </div>
  );
}
