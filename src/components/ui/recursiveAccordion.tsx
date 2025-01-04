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
        console.log(activeItems);
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
              className="data-[state=open]:border-none   border-0 "
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
                className={` font-light  pl-2 text-[#D7E6F4] text-base data-[state=open]:text-lg  data-[state=open]:font-semibold data-[state=open]:tracking-wider ${
                  element.title.toLowerCase() ===
                  decodeURIComponent(
                    currentPath.split("/").pop() || ""
                  ).replace(/-/g, " ")
                    ? "font-bold text-lg text-blue-400"
                    : "text-[#D7E6F4]"
                }`}
              >
                <span
                  className={`${
                    element.title === "Hydrauliques" ||
                    element.title === "Pneumatiques" ||
                    element.title === "Assainissement et Nettoyage"
                      ? "font-medium text-lg"
                      : ""
                  }`}
                >
                  {element.title}
                </span>
              </AccordionTrigger>
              <AccordionContent className="pl-2    text-base font-light">
                {renderAccordionItems(element.children, currentPath)}
              </AccordionContent>
            </AccordionItem>
          </>
        ) : (
          <AccordionContent className="pl-2    pt-3 text-left  text-base">
            {element.title}
          </AccordionContent>
        )}
      </Accordion>
    ));
  };
  const currentPath = usePathname();
  return (
    <div className="  shadow-sm bg-[#0B1A28] rounded-xl px-6 py-8">
      <Accordion type="multiple" defaultValue={["produits"]}>
        <AccordionItem
          className="data-[state=open]:border-none "
          value="produits"
        >
          <AccordionContent className="pl-3  text-[#EBF3F9]">
            {data.children && renderAccordionItems(data.children, currentPath)}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
