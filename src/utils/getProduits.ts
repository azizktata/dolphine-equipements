import { Data } from "@/types";
import { cache } from "react";


export const getAll = cache (async (): Promise<Data> => {

  try {
    const url = process.env.ELEMENTS_URL;
    if (!url) {
      throw new Error("URL is not defined");
    }
    const res = await fetch(url, { next: { revalidate: 3600 } });
    const data = await res.json();
    
    if (!res.ok){
      throw new Error("Failed to fetch data");
    }

    return data;
  } catch  {
    return { title: "", children: [] };
  } 
})


// export const mockData = {
//     title: "produits",
//     elements: [
//       {
//         title: "Hydrauliques",
//         img: "/images/fruit-1.jpeg",
//         elements: [
//           {
//             title: "Accessoires",
//             img: "/images/fruit-1.jpeg",
//             elements: [
//               {
//                 title: "Accouplements",
//                 img: "/images/fruit-1.jpeg",
//                 elements: [
//                   { title: "Accouplements rigides", img: "/images/fruit-1.jpeg" },
//                   { title: "Accouplements flexibles", img: "/images/fruit-1.jpeg" },
//                 ],
//               },
//             ],
//           },
//           {
//             title: "Centrales",
//             img: "/images/fruit-2.jpeg",
//             elements: [
//               { title: "minis", img: "/images/fruit-1.jpeg" },
//               { title: "power pack", img: "/images/fruit-1.jpeg" },
//             ],
//           },
//           {
//             title: "Connectiques",
//             img: "/images/fruit-3.jpeg",
//             elements: [
//               {
//                 title: "Tubes Hydrauliques en Acier et en Inox",
//                 img: "/images/fruit-1.jpeg",
//                 elements: [
//                   { title: "Collier stauff", img: "/images/fruit-1.jpeg" },
//                   { title: "Raccords", img: "/images/fruit-1.jpeg" },
//                 ],
//               },
//               {
//                 title: "Tuyaux Hydrauliques et Industriels",
//                 img: "/images/fruit-1.jpeg",
//                 elements: [
//                   { title: "tuyaux-1", img: "/images/fruit-1.jpeg" },
//                   { title: "tuyaux-2", img: "/images/fruit-1.jpeg" },
//                 ],
//               },
//             ],
//           },
//         ],
//       },
//       {
//         title: "Pneumatiques",
//         img: "/images/fruit-2.jpeg",
//         elements: [
//           {
//             title: "Accessoires Pneumatiques",
//             img: "/images/fruit-1.jpeg",
//             elements: [
//               {
//                 title: "Compresseurs",
//                 img: "/images/fruit-1.jpeg",
//                 elements: [
//                   { title: "Compresseurs à piston", img: "/images/fruit-1.jpeg" },
//                   { title: "Compresseurs à vis", img: "/images/fruit-1.jpeg" },
//                 ],
//               },
//             ],
//           },
//           {
//             title: "Connectiques Pneumatiques",
//             img: "/images/fruit-2.jpeg",
//             elements: [
//               { title: "Tuyaux Pneumatiques", img: "/images/fruit-1.jpeg" },
//               { title: "Raccords Pneumatiques", img: "/images/fruit-1.jpeg" },
//             ],
//           },
//         ],
//       },
//       {
//         title: "Nettoyage",
//         img: "/images/fruit-3.jpeg",
//         elements: [
//           {
//             title: "Equipements de Nettoyage",
//             img: "/images/fruit-1.jpeg",
//             elements: [
//               {
//                 title: "Nettoyeurs Haute Pression",
//                 img: "/images/fruit-1.jpeg",
//                 elements: [
//                   { title: "Nettoyeurs à eau chaude", img: "/images/fruit-1.jpeg" },
//                   { title: "Nettoyeurs à eau froide", img: "/images/fruit-1.jpeg" },
//                 ],
//               },
//             ],
//           },
//           {
//             title: "Produits de Nettoyage",
//             img: "/images/fruit-2.jpeg",
//             elements: [
//               { title: "Dégraissants", img: "/images/fruit-1.jpeg" },
//               { title: "Détergents", img: "/images/fruit-1.jpeg" },
//             ],
//           },
//         ],
//       },
//     ],
//   };
      
