import './slide_link.css'

export default function SlideLink({ url, compact, children }: { url: string, compact?: boolean, children: React.ReactNode }) {
    return (
        <>
            {compact && <a className='slide pl-1 pr-1' href={url} target='_blank'>
                {children}
            </a>}
            {
                !compact &&
                <a className='slide p-2' href={url} target='_blank'>
                    {children}
                </a>
            }
        </>
    )
}