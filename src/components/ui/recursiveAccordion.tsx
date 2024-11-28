// "use client";
// import React from "react";
// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion";

// import { usePathname } from "next/navigation";

// export default function RecursiveAccordion({ data, active }) {
//   const renderAccordionItems = (elements, currentPath) => {
//     return elements.map((element) => (
//       <AccordionItem key={element.title} value={element.title.toLowerCase()}>
//         <AccordionTrigger className="accordion-trigger">
//           {element.title}
//         </AccordionTrigger>
//         <AccordionContent className="pl-3">
//           {element.elements &&
//             element.elements.length > 0 &&
//             renderAccordionItems(element.elements, currentPath)}
//         </AccordionContent>
//       </AccordionItem>
//     ));
//   };
//   const currentPath = usePathname();
//   return (
//     <Accordion type="multiple">
//       <AccordionItem value="composants">
//         <AccordionTrigger>Composants</AccordionTrigger>
//         <AccordionContent className="pl-3">
//           {data.elements && renderAccordionItems(data.elements, currentPath)}
//         </AccordionContent>
//       </AccordionItem>
//     </Accordion>
//   );
// }
