import { Data } from "@/types";
// import { cache } from "react";
import { memoize} from "nextjs-better-unstable-cache"

export const getAll = memoize (async (): Promise<Data> => {

  try {
    const url = process.env.ELEMENTS_URL;
    if (!url) {
      throw new Error("URL is not defined");
    }
    // console.log('url', url)
    const res = await fetch(url);
    const data = await res.json();
    
    

    return data;
  } catch  {
    // console.error(error);
    return { title: "", children: [] };
  } 
}, {
  persist: true,
  duration: 7200,
  revalidateTags: ()=> ['produits:elements'],
  suppressWarnings: true, 
  // log: ['datacache', 'verbose', 'dedupe'],
  // logid: 'produits:elements',
})



      
