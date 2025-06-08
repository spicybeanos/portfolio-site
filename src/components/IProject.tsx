import { Project } from "@/types";
import { ApexProject } from "./Apex/ApexProject";


export function IProject(
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
        <ApexProject
            blog={blog}
            description={description}
            id={id}
            repo_link={repo_link}
            title={title}
            demo_link={demo_link}
            images_url={images_url}
            prog_langs={prog_langs}
            technologies={technologies}
        />
    );
}