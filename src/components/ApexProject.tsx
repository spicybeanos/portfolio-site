import { Project } from "@/types";
import Image from "next/image";
import ILink from "./ILink";


export function ApexProject(
    {
        blog,
        description,
        id,
        repo_link,
        title,
        demo_link,
        images_url,
        prog_langs,
        technologies
    }
        : Project
) {
    return (
        <>
            <div className="max-w-[80vw] w-190 gap-5 transition-all delay-100 bg-(--background) hover:bg-[#222] rounded-tr-4xl rounded-bl-4xl p-3 m-2 flex flex-row justify-stretch ">
                <div className='flex flex-col'>
                    <h1 className="text-center">{title}</h1>
                    <div className="m-3 flex flex-row gap-4 overflow-x-auto">
                        {
                            images_url &&
                            images_url.map((img) => (
                                <img
                                    src={img}
                                    className="w-70 h-70 bg-white rounded-tr-3xl rounded-bl-3xl"
                                />
                            ))
                        }
                    </div>
                    {
                        repo_link &&
                        <ILink url={repo_link}>
                            <div className="gap-1 flex flex-row">
                                <Image
                                    aria-hidden
                                    src="/github.svg"
                                    alt="Globe icon"
                                    width={16}
                                    height={16}
                                />
                                Repo link
                            </div>
                        </ILink>
                    }

                    <div className="p-2">
                        {description}
                    </div>
                </div>
            </div>
        </>
    )
}