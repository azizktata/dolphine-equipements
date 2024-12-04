// import { setCachedData } from "@/utils/cache";
// import { NextResponse } from "next/server";



// export async function POST(){
//     try {
//         const url = process.env.ELEMENTS_URL;
//         if(!url) {
//             return NextResponse.json(
//                 { message: "ELEMENTS_URL is not defined" },
//                 { status: 500 }
//               );
//         }

//         const response = await fetch(url);
//         const data = await response.json();

//         if(!response.ok){
//             return NextResponse.json(
//                 { message: "Failed to fetch data from ELEMENTS_URL" },
//                 { status: 500 }
//               );
//         }
//         setCachedData(data);
//         return NextResponse.json({ message: "Cache updated successfully"});
//     } catch (error) {
//         console.error("Error updating cache:", error);
//         return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
//     }
// }