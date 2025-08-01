// import CyberLink from "./CyberLink";
import SlideLink from "./SlideLink";


export default function ILink({ url, stay_page, compact, children }: { url: string, stay_page: boolean, compact?: boolean, children: React.ReactNode }) {
    return (
        <>
            <SlideLink url={url} compact={compact} stay_page={stay_page}>
                {children}
            </SlideLink>
        </>
    )
}