export interface Blog{
    id:string;
    title:string;
    contents?:Content[]
}
export interface Content{
    image?:string,
    carousel?:string[],
    text?:string,
    urls?:string[],
    bigText?:string,
}

export const myBlogs : Blog[] = [
    {
        id:"rust-compiler-badger",
        title:"The Badger compiler"
    },
    {
        id:"time-tablr",
        title:"Time Tablr",
        contents:[
            {
                text:"Knowing when your elective has class, in what class on which day just by searching through the endless excel sheets that faculty give us, get very tedous very fast."
            },
            {
                text:"To solve this very problem I made a website that would tell you your timetable just by typing your name or registraion number in it, and voila: your time table for this semester",
                image:'/images/TimeTablr.png'
            },
            {
                bigText:"How?",
                
            }
        ]
    }
];