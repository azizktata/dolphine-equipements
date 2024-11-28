import Footer from "@/components/ui/footer";
import Header from "@/components/ui/header";
import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

export default function loading() {
  return (
    <div className="bg-[#f4f8ff]">
      <Header />
      <div className="mt-16 mb-64 gap-8 flex flex-col w-[90%]  lg:w-[986px] m-auto  justify-center ">
        {/* <div className="hidden lg:block lg:w-[350px]">
      <RecursiveAccordion data={data} active={currentPath} />
    </div> */}

        <Skeleton className="h-4 w-[250px]" />
        <div className="flex gap-4">
          <div className="flex flex-col space-y-3">
            <Skeleton className="h-[125px] w-[250px] rounded-xl" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[250px]" />
              <Skeleton className="h-4 w-[200px]" />
            </div>
          </div>
          <div className="flex flex-col space-y-3">
            <Skeleton className="h-[125px] w-[250px] rounded-xl" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[250px]" />
              <Skeleton className="h-4 w-[200px]" />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
