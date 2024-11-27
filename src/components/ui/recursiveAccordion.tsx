"use client";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

import { usePathname } from "next/navigation";

export default function RecursiveAccordion({ data, active }) {
  const renderAccordionItems = (elements, currentPath) => {
    return elements.map((element) => (
      <AccordionItem key={element.title} value={element.title.toLowerCase()}>
        <AccordionTrigger className="accordion-trigger">
          {element.title}
        </AccordionTrigger>
        <AccordionContent className="pl-3">
          {/* Recursively render child elements if any */}
          {element.elements &&
            element.elements.length > 0 &&
            renderAccordionItems(element.elements, currentPath)}
        </AccordionContent>
      </AccordionItem>
    ));
  };
  const currentPath = usePathname();
  return (
    <Accordion type="multiple" collapsible="true">
      <AccordionItem value="composants">
        <AccordionTrigger>Composants</AccordionTrigger>
        <AccordionContent className="pl-3">
          {/* Dynamically render the first level of elements */}
          {data.elements && renderAccordionItems(data.elements, currentPath)}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
