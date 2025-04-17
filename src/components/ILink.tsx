import CyberLink from "./CyberLink.tsx";
import SlideLink from "./SlideLink.tsx";


export default function ILink({ url, children }: { url: string, children: React.ReactNode }) {
    return (
        <>
            <SlideLink url={url}>
                {children}
            </SlideLink>
        </>
    )
}