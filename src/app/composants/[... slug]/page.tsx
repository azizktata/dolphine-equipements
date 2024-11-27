import React from "react";
import { Image } from "@nextui-org/image";
import { Card, CardBody, CardFooter } from "@nextui-org/card";
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
import RecursiveAccordion from "@/components/ui/recursiveAccordion";
export default async function page({ params }: { params: { slug: string[] } }) {
  const paramss = await params;
  const title = paramss[" slug"][paramss[" slug"].length - 1];
  const currentPath = "composants/" + paramss[" slug"].join("/");
  console.log(currentPath);
  const data = await getAll();

  function findElementByTitle(data, title) {
    for (const item of data) {
      if (item.title.toLowerCase().replace(/ /g, "-") === title) {
        return item;
      }
      if (item.elements) {
        const found = findElementByTitle(item.elements, title);
        if (found) {
          return found;
        }
      }
    }
    return null;
  }
  const composants = findElementByTitle(data.elements, title);

  return (
    <>
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
              ? paramss[" slug"].map((item, index) => (
                  <>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      <BreadcrumbPage>
                        <BreadcrumbLink href=".">{item}</BreadcrumbLink>
                      </BreadcrumbPage>
                    </BreadcrumbItem>
                  </>
                ))
              : null}
          </BreadcrumbList>
        </Breadcrumb>

        <ListCards composants={composants} />
      </div>

      <Footer />
    </>
  );
}
