import { Project } from "@/types";
import Image from "next/image";
import ILink from "../ILink";
import Pill from "../pill";


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
            <div className="max-w-[80vw] w-190 gap-5 transition-all delay-100 bg-(--background) hover:bg-[#222] border border-[#222] border-solid border-2 rounded-tr-4xl rounded-bl-4xl p-3 m-2 flex flex-row justify-stretch ">
                <div className='flex flex-col'>
                    <h1 className="text-center">{title}</h1>
                    <div className="m-3 flex flex-row gap-4 overflow-x-auto">
                        {
                            images_url &&
                            images_url.map((img, index) => (

                                <img
                                    key={index}
                                    src={img}
                                    className="aspect-square object-cover w-70 h-70 rounded-tr-3xl rounded-bl-3xl"
                                />

                            ))
                        }
                    </div>
                    <div className="flex flex-row">
                        {
                            blog &&
                            <ILink stay_page={false} url={`/blogs/${id}`}>
                                Read More
                            </ILink>
                        }
                        {
                            repo_link &&
                            <ILink stay_page={false} url={repo_link}>
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
                    </div>

                    <div className="p-2 flex flex-row gap-1">
                        
                    </div>
                    <div className="p-2 flex flex-row gap-1">
                        {
                            prog_langs &&
                            prog_langs.map((p, k) => (
                                <Pill
                                    key={k}
                                >
                                    {p}
                                </Pill>
                            ))
                        }
                        {
                            technologies &&
                            technologies.map((p, k) => (
                                <div
                                    className="p-1 border border-white text-black bg-white rounded-md text-xs"
                                    key={k}
                                >
                                    {p}
                                </div>
                            ))
                        }
                    </div>

                    <div className="p-2">
                        {description}
                    </div>
                </div>
            </div>
        </>
    )
}