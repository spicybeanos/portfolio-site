import { Project } from "@/types";


export const projects: Project[] = [
    {
        id:'time-tablr',
        title:"Time Tablr",
        blog:true,
        description:"A website that generates your time table with all your electives and room numbers in place! No need to refer excel sheets and find your name in them to check what class you should go to next, this website has a precompiled list of all people and thier electives and what class they should go to, simply click the download button to download your timetable",
        repo_link:"",
        prog_langs:['TypeScript','Tailwind'],
        technologies:['React','NextJS'],
        demo_link:"https://time-tablr.vercel.app/"
    },
    {
        id: "rust-compiler-badger",
        title: "Compiler and interpreter",
        blog: false,
        description: "A compiler and interpreter suite written in the rust programming language for my custom programming language: badger-script. You can run the interpreter by the command `cargo run i [file path]` and compile it to IR code using `cargo run i [file path] (optional)[o/p file path]`, the output file will be written to `path/to/file.ir`",
        repo_link: "https://github.com/spicybeanos/badger-script",
        prog_langs:["rust"],
        technologies:["Compiler design"]
    },
    {
        id:"digi-wallet-express",
        title:"Digital Wallet System with Cash Management and Fraud Detection",
        blog:false,
        description:"A Digital wallet system with User Authentication & Session Management, Wallet Operations, Transaction Processing & Validation, Basic Fraud Detection Logic and Admin & Reporting APIs.",
        repo_link:"https://github.com/spicybeanos/infollion-assignment",
        prog_langs:["Javascript"],
        technologies:["Node.js","Express"]
    }
    ,
    {
        blog: false,
        description: "An app for the fest organizers to automatically verify what pass a user has bought and if the user has been given a band already, a replacement for the past, inefficient, manual, type-and-check method. Cut down admission into premium events by 65%. Made in react-native expo and typescript.",
        id: "sol-app",
        repo_link: "https://github.com/spicybeanos/solstice-verifier-app",
        title: "Solstice Fest organizer app",
        prog_langs:["Typescript","TSX"],
        technologies:["ReactNative"],
        images_url: ["/thumb/sol_app/1.jpg", "/thumb/sol_app/2.jpg", "/thumb/sol_app/3.jpg", "/thumb/sol_app/4.jpg"]
    },
    {
        id: "obj-byte",
        title: "Object-Byte-Converter",
        blog: false,
        repo_link: "https://github.com/spicybeanos/ObjectByteConverter",
        description: "A format that converts a c# object to a binary output with type-checking and more!",
        prog_langs:["C#"]
    }
]