import React from "react";
// import { Skeleton } from "@/components/ui/skeleton";

export default function loading() {
  return (
    // <div className="">
    //   <div className="pt-16 pb-64 flex flex-col lg:flex-row w-[90%] gap-8  m-auto lg:justify-between lg:items-start justify-center min-h-[100vh]">
    //     <div className="hidden  lg:flex lg:w-[400px]  flex-col gap-6">
    //       <Skeleton className="h-4 w-[250px]" />
    //       <Skeleton className="h-4 w-[200px]" />
    //       <Skeleton className="h-4 w-[200px]" />
    //       <Skeleton className="h-4 w-[200px]" />
    //       <Skeleton className="h-4 w-[250px]" />
    //       <Skeleton className="h-4 w-[200px]" />
    //       <Skeleton className="h-4 w-[250px]" />
    //       <Skeleton className="h-4 w-[200px]" />
    //       <Skeleton className="h-4 w-[200px]" />
    //     </div>
    //     <div className="flex-1">
    //       <Skeleton className="h-4 w-[250px] mb-8" />
    //       <div className="flex flex-col md:flex-row gap-4">
    //         <div className="flex flex-col space-y-3">
    //           <Skeleton className="h-[125px] w-[250px] rounded-xl" />
    //           <div className="space-y-2">
    //             <Skeleton className="h-4 w-[250px]" />
    //             <Skeleton className="h-4 w-[200px]" />
    //           </div>
    //         </div>
    //         <div className="flex flex-col space-y-3">
    //           <Skeleton className="h-[125px] w-[250px] rounded-xl" />
    //           <div className="space-y-2">
    //             <Skeleton className="h-4 w-[250px]" />
    //             <Skeleton className="h-4 w-[200px]" />
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
}
