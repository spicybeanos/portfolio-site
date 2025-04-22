

import './exp.css'
import Pill from './pill'
import Image from "next/image";
import { Experience } from '../types';
import ILink from './ILink';

//rounded-tr-xl rounded-bl-xl
//{ title, tags, url, description }: { title: string, tags: string, url?: string, description: string }
export default function ApexExperience({ title, org, tags, url, description, image_url, is_present, from, to, id }: Experience) {
    return (
        <>

            <div className="max-w-[80vw] w-190 gap-5 transition-all delay-100 bg-(--background) hover:bg-[#222] rounded-tr-2xl rounded-bl-2xl p-3 m-2 flex flex-row justify-stretch">
                {
                    image_url &&
                    <img
                        className='bg-white transition-all delay-100 w-20 h-20 aspect-square object-cover rounded-tr-lg rounded-bl-lg hover:rounded-tr-xl hover:rounded-bl-xl filter'
                        alt='Company/Org logo'
                        src={image_url}
                    />
                }
                <div className='flex flex-col'>
                    <div className='w-100% flex items-start justify-between flex-wrap'>
                        <h1>{title}</h1>

                    </div>
                    <div className='flex flex-row'>
                        {
                            is_present &&
                            <div className='text-sm bg-[#444] pl-3 pr-3 rounded-full'>PRESENT</div>
                        }
                    </div>
                    {org && <div className='text-sm'>{org}</div>}
                    {url && <ILink compact url={url}>Visit</ILink>}
                    {tags &&
                        <div
                            className='flex flex-row gap-2 flex-wrap'
                        >
                            {tags.map((val) =>
                                (<Pill key={val}>{val}</Pill>)
                            )}
                        </div>

                    }

                    <p className='max-w-100% m-2 text-truncate text-[#bbb]'>{description}</p>
                </div>


            </div >
        </>
    )
}