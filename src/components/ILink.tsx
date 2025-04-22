// import CyberLink from "./CyberLink";
import SlideLink from "./SlideLink";


export default function ILink({ url, compact, children }: { url: string, compact?: boolean, children: React.ReactNode }) {
    return (
        <>
            <SlideLink url={url} compact={compact}>
                {children}
            </SlideLink>
        </>
    )
}