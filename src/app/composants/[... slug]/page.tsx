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
import { getAll } from "@/utils/getComposants";
import ListCards from "@/components/ui/listCards";
import { Composant, Data } from "@/types";
export default async function page({
  params,
}: {
  params: { [" slug"]: string[] };
}) {
  const paramss = await params;
  const title = paramss[" slug"][paramss[" slug"].length - 1];

  const data = await getAll();

  function findElementByTitle(data: Composant[], title: string): Data | null {
    for (const item of data) {
      if (item.title.toLowerCase().replace(/ /g, "-") === title) {
        return item as Data;
      }
      if (item.elements) {
        const found: Data | null = findElementByTitle(item.elements, title);
        if (found) {
          return found;
        }
      }
    }
    return null;
  }
  const composants = findElementByTitle(data.elements, title);

  return (
    <div className="bg-[#f4f8ff]">
      <Header />
      <div className="mt-16 mb-64 flex flex-col w-[90%]  lg:w-[986px] m-auto  justify-center ">
        {/* <div className="hidden lg:block lg:w-[350px]">
          <RecursiveAccordion data={data} active={currentPath} />
        </div> */}

        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Acceuil</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/composants">Composants</BreadcrumbLink>
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

      <Footer />
    </div>
  );
}
