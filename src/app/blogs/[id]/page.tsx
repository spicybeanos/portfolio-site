'use client';

import Link from "next/link";
import { type Blog, myBlogs } from "@/lib/my_blogs";
import { useEffect, useState } from "react";
import { use } from "react";

export default function Blog({
    params,
}: {
    params: Promise<{ id: string }>
}) {
    const { id } = use(params);

    const [blog, setBlog] = useState<Blog | null>(null);
    const [error, setError] = useState(false);

    useEffect(() => {
        const b = myBlogs.find((b) => b.id === id);
        if (b) {
            setError(false);
            setBlog(b);
        } else {
            setError(true);
        }
    }, [id]);

    return (
        <div className="flex flex-col min-h-[100vh] p-6">
            <div className="">
                <Link
                    href="/"
                    className="border-b-1 border-white hover:border-b-3 transition-all duration-100"
                >
                    Home
                </Link>
            </div>
            {error &&
                <>
                    <div className="w-full items-center flex flex-col">
                        <h1>404</h1>
                        <div className=" text-center">
                            Could not find any blog with that ID
                        </div>
                    </div>

                </>

            }
            {!error && blog && (
                <>
                    <h1 className="w-full text-center">{blog.title}</h1>
                </>
            )}
        </div>
    );
}
