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
  // const [openedItems, setOpenedItems] = React.useState<string[]>([]);
  const router = useRouter();

  const renderAccordionItems = (elements: Composant[], currentPath: string) => {
    const activeItems = currentPath
      .split("/")
      .map((item) => item.replace(/-/g, " "))
      .filter(Boolean);

    function getAllParentTitles(
      title: string,
      elements: Composant[],
      parents: string[] = []
    ) {
      for (const item of elements) {
        if (
          item.children &&
          item.children.some((child) => child.title === title)
        ) {
          parents.unshift(item.title);

          return getAllParentTitles(item.title, elements, parents);
        }
      }
      return parents;
    }

    return elements.map((element) => (
      <Accordion key={element.title} type="multiple" defaultValue={activeItems}>
        {element.children && element.children.length > 0 ? (
          <>
            <AccordionItem value={element.title.toLowerCase()}>
              <AccordionTrigger
                onClick={() => {
                  const allParents = getAllParentTitles(
                    element.title,
                    data.children
                  );
                  const newPath = `/produits/${[...allParents, element.title]
                    .map((title) => title.toLowerCase().replace(/ /g, "-"))
                    .join("/")}`;
                  router.push(newPath);
                }}
                className="accordion-trigger pb-2 text-lg  font-light capitalize"
              >
                {element.title}
              </AccordionTrigger>
              <AccordionContent className="pl-3  font-light">
                {renderAccordionItems(element.children, currentPath)}
              </AccordionContent>
            </AccordionItem>
          </>
        ) : (
          <AccordionContent className="pl-3 pt-1 text-lg">
            {element.title}
          </AccordionContent>
        )}
      </Accordion>
    ));
  };
  const currentPath = usePathname();
  return (
    <Accordion type="multiple" defaultValue={["produits"]}>
      <AccordionItem value="produits">
        <AccordionTrigger className="accordion-trigger text-lg font-light">
          Produits
        </AccordionTrigger>
        <AccordionContent className="pl-3">
          {data.children && renderAccordionItems(data.children, currentPath)}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
