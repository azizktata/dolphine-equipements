"use client";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { usePathname, useRouter } from "next/navigation";
import { Composant, Data } from "@/types";

export default function RecursiveAccordion({ data }: { data: Data }) {
  const router = useRouter();

  const renderAccordionItems = (elements: Composant[], currentPath: string) => {
    const activeItems = currentPath
      .split("/")
      .map((item) => decodeURIComponent(item).replace(/-/g, " "))
      .filter(Boolean);

    function getAllParentTitles(
      title: string,
      elements: Composant[],
      parents: string[] = []
    ) {
      const containsTitle = (
        children: Composant[],
        targetTitle: string
      ): boolean => {
        // console.log(activeItems);
        for (const child of children) {
          if (child.title === targetTitle) {
            return true;
          }
          if (child.children && containsTitle(child.children, targetTitle)) {
            return true;
          }
        }
        return false;
      };

      for (const item of elements) {
        if (item.children && containsTitle(item.children, title)) {
          parents.push(item.title);

          getAllParentTitles(item.title, elements, parents);
        }

        if (item.children && item.children.length > 0) {
          getAllParentTitles(title, item.children, parents);
        }
      }

      return parents;
    }

    return elements.map((element) => (
      <Accordion key={element.title} type="multiple" defaultValue={activeItems}>
        {element.children && element.children.length > 0 ? (
          <>
            <AccordionItem
              className="data-[state=open]:border-none mt-4  border-0 "
              value={element.title.toLowerCase()}
            >
              <AccordionTrigger
                onClick={() => {
                  const allParents = getAllParentTitles(
                    element.title,
                    data.children
                  );
                  router.push(
                    `/produits/${[...allParents, element.title]
                      .map((title) => title.toLowerCase().replace(/ /g, "-"))
                      .join("/")}`
                  );
                }}
                className={`accordion-trigger pl-2  font-medium text-left text-sm  
                    data-[state=open]:tracking-wide
                  ${
                    element.title.toLowerCase() ===
                    decodeURIComponent(
                      currentPath.split("/").pop() || ""
                    ).replace(/-/g, " ")
                      ? "text-[#4187C6] py-1 data-[state=open]:underline"
                      : "text-[#656565] py-0"
                  } ${
                  element.title === "Hydrauliques" ||
                  element.title === "Pneumatiques" ||
                  element.title === "Assainissement et Nettoyage"
                    ? "bg-[#4187C6] text-white  rounded-md  px-3 py-3 font-medium"
                    : ""
                }`}
              >
                {element.title}
              </AccordionTrigger>
              <AccordionContent className="pl-8  py-2 text-[#656565] font-medium">
                {" "}
                {renderAccordionItems(element.children, currentPath)}
              </AccordionContent>
            </AccordionItem>
          </>
        ) : (
          <AccordionContent className="pl-2 py-3 pb-0 text-left text-sm   text-[#656565]">
            {element.title}
          </AccordionContent>
        )}
      </Accordion>
    ));
  };
  const currentPath = usePathname();
  return (
    <>
      <h1 className="text-base font-semibold  uppercase mb-6">categories</h1>
      <div className="shadow-md bg-[#E6F3FB] rounded-xl px-2 py-2 ">
        <div className="max-h-[500px]   custom-scrollbar px-3">
          <Accordion type="multiple" defaultValue={["produits"]}>
            <AccordionItem
              className="data-[state=open]:border-none "
              value="produits"
            >
              <AccordionContent className=" text-[#656565]">
                {data.children &&
                  renderAccordionItems(data.children, currentPath)}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </>
  );
}
