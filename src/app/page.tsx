'use client'

import IExperience from "@/components/IExperience";
import ILink from "@/components/ILink";
import Image from "next/image";
import { useEffect, useState } from 'react'
import type { Experience } from '@/types'
import { supabase } from '@/lib/supa'

export default function Home() {
  const [experiences, setExperiences] = useState<Experience[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchExperiences() {
      const { data, error } = await supabase
        .from('experience')
        .select('*')
        .order('from', { ascending: false }) // Optional: sort by latest

      if (error) {
        console.error('Error fetching experiences:', error.message)
      } else if (data) {
        const parsed: Experience[] = data.map((exp: any) => ({
          ...exp,
          from: new Date(exp.from),
          to: exp.to ? new Date(exp.to) : undefined,
        }))
        setExperiences(parsed)
      }

      setLoading(false)
    }

    fetchExperiences()
  }, [])


  return (
    <>
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
          <div className="text-wrap">Web | SDE | Back-end | Fullstack | Mobile | Game-dev</div>

          <div className="flex flex-row flex-wrap justify-center">
            <ILink url="https://www.linkedin.com/in/aryan-d-dalal/">
              LinkedIn
            </ILink>
            <ILink url="/resume.pdf">Resume</ILink>
            <ILink url="mailto:aryan.d.dalal@gmail.com">Email</ILink>
            <ILink url="https://github.com/spicybeanos">GitHub</ILink>
          </div>

          <div>Website still under contruction!</div>

          <h2>Experience</h2>
          {
            loading && <>
              <div>

              </div>
            </>
          }

          {
            !loading &&

            <div className="flex items-start justify-start flex-col w-[100%]">
              {
                experiences.map((exp, index) => (
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
                  />
                ))
              }

            </div>
          }


        </main>
        <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="/resume.pdf"
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
          <div
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"        >
            <Image
              aria-hidden
              src="/call-outline.svg"
              alt="Globe icon"
              width={16}
              height={16}
            />
            +91-86522 07970
          </div>
        </footer>
      </div>
    </>

  );
}
