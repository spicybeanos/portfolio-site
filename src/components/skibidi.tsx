import './slide_link.css'

export default function SlideLink({ url, children }: { url: string, children: React.ReactNode }) {
    return (
        <>
            <a className='slide' href={url} target='_blank'>
                {children}
            </a>
        </>
    )
}