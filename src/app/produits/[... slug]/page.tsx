import React from "react";

import { getAll } from "@/utils/getProduits";
import { Composant, Data } from "@/types";
import RecursiveAccordion from "@/components/ui/recursiveAccordion";
import { Metadata } from "next";
import ListCardsV2 from "@/components/ui/listCardsV2";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";

type Props = {
  params: Promise<{ " slug": string | string[] }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // read route params
  const paramss = await params;
  const title = paramss[" slug"][paramss[" slug"].length - 1];

  return {
    title: decodeURIComponent(
      title
        .split("-")
        .join(" ")
        .replace(/^\w/, (c) => c.toUpperCase())
    ),
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
      <div className="bg-white">
        <div className="pt-16 pb-64 flex flex-col lg:flex-row w-[90%]  gap-8  m-auto lg:justify-between lg:items-start justify-center min-h-[100vh]">
          <div className="w-full mx-auto lg:w-[400px]">
            <RecursiveAccordion data={data} />
          </div>
          <div className="flex-1 ">
            {/* <h1 className="text-base md:text-xl font-semibold capitalize">
              {decodeURIComponent(title)
                .replace(/-/g, " ")
                .replace(/^\w/, (c) => c.toUpperCase())}
            </h1> */}
            <Breadcrumb>
              <BreadcrumbList className="text-base font-medium text-gray-900 ">
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">acceuil</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="/produits">produits</BreadcrumbLink>
                </BreadcrumbItem>
                {Array.isArray(paramss[" slug"]) && paramss[" slug"].length > 0
                  ? paramss[" slug"].map((item: string, index) => (
                      <BreadcrumbList key={item}>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                          <BreadcrumbPage>
                            <Link
                              href={
                                Array.isArray(paramss[" slug"])
                                  ? `/produits/${paramss[" slug"]
                                      .slice(0, index + 1) // Ensure it slices the path up to the current item
                                      .map((s: string) => decodeURIComponent(s)) // Decode each slug segment
                                      .join("/")}`
                                  : "."
                              }
                              className="text-base font-medium"
                            >
                              {decodeURIComponent(item).replace(/-/g, " ")}
                            </Link>
                          </BreadcrumbPage>
                        </BreadcrumbItem>
                      </BreadcrumbList>
                    ))
                  : null}
              </BreadcrumbList>
            </Breadcrumb>
            {composants && <ListCardsV2 composants={composants} />}
          </div>
        </div>
      </div>
    </>
  );
}
