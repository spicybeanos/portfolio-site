
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
}