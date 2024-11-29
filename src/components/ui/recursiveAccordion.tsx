"use client";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { usePathname } from "next/navigation";
import { Composant, Data } from "@/types";

export default function RecursiveAccordion({ data }: { data: Data }) {
  // const [openedItems, setOpenedItems] = React.useState<string[]>([]);

  const renderAccordionItems = (elements: Composant[], currentPath: string) => {
    const activeItems = currentPath
      .split("/")
      .map((item) => item.replace(/-/g, " "))
      .filter(Boolean);
    // const handleValueChange = (openItems) => {
    //   setOpenedItems(openItems);
    // };

    return elements.map((element) => (
      <Accordion
        key={element.title}
        type="multiple"
        defaultValue={activeItems}
        // onValueChange={(openItems) => handleValueChange(openItems)}
      >
        {element.children && element.children.length > 0 ? (
          <>
            <AccordionItem value={element.title.toLowerCase()}>
              {/* onClick={() => handleToggle(element.title)} */}
              <AccordionTrigger className="accordion-trigger pb-2  font-light">
                {element.title}
              </AccordionTrigger>
              <AccordionContent className="pl-3  font-light">
                {renderAccordionItems(element.children, currentPath)}
              </AccordionContent>
            </AccordionItem>
          </>
        ) : (
          <AccordionContent className="pl-3 pt-1">
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
        <AccordionTrigger className="text-base font-light">
          produits
        </AccordionTrigger>
        <AccordionContent className="pl-3">
          {data.children && renderAccordionItems(data.children, currentPath)}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
