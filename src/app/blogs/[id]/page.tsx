import Link from "next/link";
import { myBlogs } from "@/lib/my_blogs";

export default async function Blog(
    {
        params,
    }: {
        params: Promise<{ id: string }>
    }
) {
    const { id } = await params;

    return (
        <div className='flex flex-col min-h-[100vh] p-6'>
            <div className="">
                <Link href='/' className="border-b-1 border-white hover:border-b-3 transition-all duration-100">
                    Home
                </Link>
            </div>
            <h1 className="w-full text-center">
                {
                    myBlogs.find(b => b.id == id)?.title
                }
            </h1>
            
        </div>
    )
}