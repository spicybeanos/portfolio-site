

export default function Pill({ text } : { text: string }) {
    return (<>
        <div className="font-[Poppins] rounded-full p-1 pl-3 pr-3 border border-solid border-sm border-white">
            {text}
        </div>
    </>)
}