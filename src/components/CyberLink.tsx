// import CSS from "csstype";
import './cyber_link.css';

export default function CyberLink({  url, children }: {  url: string, children: React.ReactNode }) {
    return (
        <>
            <a className="button" href={url} target="_blank">
                <span className="button_lg">
                    <span className="button_sl"></span>
                    <span className="button_text">{children}</span>
                </span>
            </a>
        </>
    )

}