import './slide_link.css'

export default function SlideLink({ url, compact, stay_page, children }: { url: string, compact?: boolean, stay_page?: boolean, children: React.ReactNode }) {
    return (
        <>
            {
                compact &&
                <a className='slide pl-1 pr-1' href={url} target={stay_page ? '_blank' : ''}>
                    {children}
                </a>
            }
            {
                !compact &&
                <a className='slide p-2' href={url} target={stay_page ? '_blank' : ''}>
                    {children}
                </a>
            }
        </>
    )
}