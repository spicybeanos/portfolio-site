
export interface Experience {
    title: string;
    org?: string;
    tags?: string[];
    url?: string;
    description: string;
    image_url?: string;
    is_present: boolean;
    from:Date;
    to?:Date;
    id:string;
    blog:boolean;
}
export interface Project{
    id:string;
    title: string;
    description:string;
    repo_link:string;
    demo_link?:string;
    prog_langs?:string[];
    technologies?:string[];
    images_url?:string[];
    blog:boolean;
}