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
import Link from "next/link";
import { Metadata } from "next";

type Props = {
  params: Promise<{ " slug": string | string[] }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // read route params
  const paramss = await params;
  const title = paramss[" slug"][paramss[" slug"].length - 1];

  return {
    title: title
      .split("-")
      .join(" ")
      .replace(/^\w/, (c) => c.toUpperCase()),
  };
}
export default async function page({ params }: Props) {
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
    <>
      <div className="">
        <div className="pt-16 pb-64 flex flex-col lg:flex-row w-[90%]  gap-12  m-auto lg:justify-between lg:items-start justify-center min-h-[100vh]">
          {/* <div className="  lg:flex lg:w-[400px]  flex-col gap-6  border-right"> */}
          <div className="w-[90%] mx-auto lg:w-[350px]">
            <RecursiveAccordion data={data} />
          </div>
          <div className="flex-1">
            <Breadcrumb className="hidden sm:flex">
              <BreadcrumbList className="text-base">
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">Accueil</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="/produits">Produits</BreadcrumbLink>
                </BreadcrumbItem>
                {Array.isArray(paramss[" slug"]) && paramss[" slug"].length > 0
                  ? paramss[" slug"].map((item: string, index: number) => (
                      <BreadcrumbList key={item}>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                          <BreadcrumbPage>
                            <Link
                              href="."
                              className={`text-base ${
                                index === paramss[" slug"].length - 1
                                  ? "text-blue-600"
                                  : "text-gray-500"
                              }`}
                            >
                              <span>
                                {decodeURIComponent(item)
                                  .replace(/-/g, " ")
                                  .replace(/^\w/, (c) => c.toUpperCase())}
                              </span>
                            </Link>
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
    </>
  );
}
