// import CyberLink from "./CyberLink";
import SlideLink from "./SlideLink";


export default function ILink({ url, children }: { url: string, children: React.ReactNode }) {
    return (
        <>
            <SlideLink url={url}>
                {children}
            </SlideLink>
        </>
    )
}