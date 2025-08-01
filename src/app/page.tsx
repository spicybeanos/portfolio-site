'use client'

import ClickSpark from "@/components/ClickSpark";
import IExperience from "@/components/IExperience";
import ILink from "@/components/ILink";
import Image from "next/image";
import { useEffect, useState } from 'react'
import EmailIcon from '@/components/EmailIcon';
import GitHubIcon from '@/components/GitHubIcon';
import LinkedInIcon from '@/components/LinkedInIcon'
import WhatsappIcon from '@/components/WhatsappIcon'
import type { Experience } from '@/types'
import { supabase } from '@/lib/supa'
import { experiences } from "@/lib/my_experiences";
import { projects } from "@/lib/my_projects";
import { blob } from "stream/consumers";
import { IProject } from "@/components/IProject";
import RotatingText from '@/components/RotatingText';

export default function Home() {
  const [expSelected, setExpSelexted] = useState(true);

  return (
    <>
      <ClickSpark
        sparkColor='#fff'
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      >
        <div className="grid grid-rows-[20px_1fr_20px] items-top justify-items-center min-h-screen p-8 pb-20 ">
          <main className="flex flex-col flex-center items-center gap-[20px] row-start-2">
            <Image
              className="aspect-square object-cover rounded-full filter"
              src="/me.jpg"
              alt="Next.js logo"
              width={120}
              height={120}
              priority
            />
            <h1>Aryan Dalal</h1>

            {/* <div className="text-wrap">Web | SDE | Back-end | Fullstack | Mobile | Game-dev</div> */}
            <RotatingText
              texts={['Web', 'SDE', 'Back-end', 'Fullstack', 'Mobile', 'Game-dev']}
              mainClassName="px-2 sm:px-2 md:px-3 text-xl text-white font-bold overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
              staggerFrom={"last"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2000}
            />
            <div className="flex flex-row flex-wrap justify-center">
              <ILink url="https://www.linkedin.com/in/aryan-d-dalal/">
                <LinkedInIcon />
              </ILink>
              <ILink url="mailto:aryan.d.dalal@gmail.com">
                <EmailIcon />
              </ILink>
              <ILink url="/aryan_dalal_resume.pdf">Resume</ILink>
              <ILink url="https://github.com/spicybeanos">
                <GitHubIcon />
              </ILink>
              <ILink url="https://wa.me/8652207970">
                <WhatsappIcon />
              </ILink>
            </div>

            <div>Website still under contruction!</div>

            <div className="flex flex-row bg-[#090909] rounded-tr-2xl rounded-bl-2xl">
              <button
                className={"px-6 py-2 cursor-pointer rounded-tr-2xl rounded-bl-2xl " + (expSelected ? `bg-[#333] ` : ``)}
                onClick={() => { setExpSelexted(true) }}
              >
                <h3>Experience</h3>
              </button>
              <button
                className={"px-6 py-2 cursor-pointer rounded-tr-2xl rounded-bl-2xl " + (!expSelected ? `bg-[#333] ` : ``)}
                onClick={() => { setExpSelexted(false) }}
              >
                <h3>Projects</h3>
              </button>
            </div>

            <div className="flex items-start justify-start flex-col w-[100%]">
              {
                expSelected &&
                experiences.map((exp) => (
                  <IExperience
                    key={exp.id}
                    org={exp.org}
                    id={exp.id}
                    is_present={exp.is_present}
                    image_url={exp.image_url}
                    title={exp.title}
                    tags={exp.tags}
                    description={exp.description}
                    from={exp.from}
                    url={exp.url}
                    to={exp.to}
                    blog={exp.blog}
                  />
                ))
              }

              {
                !expSelected &&
                projects.map((proj) => (
                  <IProject
                    key={proj.id}
                    blog={proj.blog}
                    demo_link={proj.demo_link}
                    description={proj.description}
                    id={proj.id}
                    images_url={proj.images_url}
                    prog_langs={proj.prog_langs}
                    repo_link={proj.repo_link}
                    technologies={proj.technologies}
                    title={proj.title}
                  />
                ))
              }

            </div>



          </main>
          <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
            <a
              className="flex items-center gap-2 hover:underline hover:underline-offset-4"
              href="/aryan_dalal_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                aria-hidden
                src="/file.svg"
                alt="File icon"
                width={16}
                height={16}
              />
              My Resume
            </a>
            <a
              className="flex items-center gap-2 hover:underline hover:underline-offset-4"
              href="mailto:aryan.d.dalal@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                aria-hidden
                src="/mail.svg"
                alt="Globe icon"
                width={16}
                height={16}
              />
              Email me
            </a>
            <a
              className="flex items-center gap-2 hover:underline hover:underline-offset-4"
              href="https://github.com/spicybeanos"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                aria-hidden
                src="/github.svg"
                alt="Globe icon"
                width={16}
                height={16}
              />
              Git Hub
            </a>
            <a
              href="https://wa.me/8652207970"
              target="blank_"
              className="flex items-center gap-2 hover:underline hover:underline-offset-4"        >
              <Image
                aria-hidden
                src="/call-outline.svg"
                alt="Globe icon"
                width={16}
                height={16}
              />
              +91-86522 07970
            </a>
          </footer>
        </div>
      </ClickSpark>

    </>

  );
}
