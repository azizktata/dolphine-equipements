import { Data } from "@/types";
// import { cache } from "react";
import { memoize} from "nextjs-better-unstable-cache"

export const getAll = memoize (async (): Promise<Data> => {

  try {
    const url = process.env.ELEMENTS_URL;
    if (!url) {
      throw new Error("URL is not defined");
    }
    const res = await fetch(url);
    const data = await res.json();
    
    if (!res.ok){
      throw new Error("Failed to fetch data");
    }

    return data;
  } catch  {
    // console.error(error);
    return { title: "", children: [] };
  } 
}, {
  persist: true,
  duration: 6800,
  revalidateTags: ()=> ['produits:elements'],
  suppressWarnings: true, 
  // log: ['datacache', 'verbose', 'dedupe'],
  // logid: 'produits:elements',
})



      
