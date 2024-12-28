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
              className="data-[state=open]:border-none "
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
                className={`[&_svg]:hidden hover:bg-gray-100 pl-3 text-base data-[state=open]:font-semibold ${
                  element.title.toLowerCase() ===
                  decodeURIComponent(
                    currentPath.split("/").pop() || ""
                  ).replace(/-/g, " ")
                    ? "font-bold text-blue-800"
                    : "text-gray-700"
                }`}
              >
                {element.title}
              </AccordionTrigger>
              <AccordionContent className="pl-3  text-base font-light">
                {renderAccordionItems(element.children, currentPath)}
              </AccordionContent>
            </AccordionItem>
          </>
        ) : (
          <AccordionContent className="pl-3 hover:bg-gray-100 pt-3 text-left text-base">
            {element.title}
          </AccordionContent>
        )}
      </Accordion>
    ));
  };
  const currentPath = usePathname();
  return (
    <div className="border-r border-b pr-8 pb-16 shadow-sm">
      <Accordion type="multiple" defaultValue={["produits"]}>
        <AccordionItem
          className="data-[state=open]:border-none"
          value="produits"
        >
          <AccordionTrigger className=" border-none  text-xl data-[state=open]:font-bold track-widest font-light">
            Produits
          </AccordionTrigger>
          <AccordionContent className="pl-3">
            {data.children && renderAccordionItems(data.children, currentPath)}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
