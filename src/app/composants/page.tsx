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

export default async function page() {
  const data = await getAll();
  return (
    <>
      <Header />
      <div className="my-4">
        <div className="w-[90%] m-auto py-4">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Acceuil</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-blue">
                  Composants
                </BreadcrumbPage>
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
