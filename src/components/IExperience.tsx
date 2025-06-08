import ApexExperience from './Apex/ApexExperience';
import StaryExperience from './Stary/StaryExerience';
import { Experience } from '@/types';

//rounded-tr-xl rounded-bl-xl
//{ title, tags, url, description }: { title: string, tags: string, url?: string, description: string }
export default function IExperience({ title, org, tags, url, description, image_url, is_present, from, to,id,blog }: Experience) {
    return (
        <ApexExperience
            title={title}
            description={description}
            is_present={is_present}
            image_url={image_url}
            org={org}
            tags={tags}
            url={url}
            from={from}
            to={to}
            id={id}
            blog={blog}
        />
    )
}