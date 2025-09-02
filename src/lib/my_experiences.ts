import { Experience } from "@/types";

export const experiences : Experience[] = [
    {
       title:"Fullstack Intern",
        description:"",
        id:"bdu",
        is_present:false,
        image_url:"/logos/BDU.png",
        org:"BizDateUp",
        url:"https://www.bizdateup.com/",
        tags:["react",'express','REST','axios','tailwind','docker',"postgre","sql","supabase"],
        from:new Date("2025-06-05"),
        to:new Date("2025-08-05"),
        blog:false 
    },    
    {
        title:"Technical Head",
        description:"Lead a team of front-end developers and made the front-end and back-end of the website, as well as an app for organizers to scan user QRs to verify pass bought",
        id:"solstice",
        is_present:false,
        image_url:"/logos/solstice.svg",
        org:"Tech Solstice 2025",
        tags:["svelte","svelteKit","typescript","ReactNative","node.js","postgre","sql","supabase"],
        from:new Date("2025-02-01"),
        to:new Date("2025-04-08"),
        url:"https://solstice.mitblrfest.org",
        blog:false
    },
    {
        title:"Application Developer Intern",
        description:"Built a DotNET script to fetch data from a paid third-party API and cache it locally to avoid repeated expensive calls and designed a React web dashboard to visualize stored financial data in an interactive and accessible layout.",
        id:"nuvama",
        is_present:false,
        image_url:"/logos/nuvama.png",
        org:"Nuvama Wealth",
        tags:["C#",".NET","React"],
        from:new Date("2024-06-02"),
        to:new Date("2024-07-04"),
        blog:false
    },
]