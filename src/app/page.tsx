import Image from "next/image";

export default function Home() {
  return (
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
        <div>Web | SDE | Back-end | Fullstack | Game-dev</div>
        <div>Website still under contruction!</div>
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
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          aryan.d.dalal@gmail.com
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
  );
}
