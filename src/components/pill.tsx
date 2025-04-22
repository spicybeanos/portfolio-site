

export default function Pill({ children } : { children: React.ReactNode }) {
    return (<>
        <div className="font-[Poppins] bg-[#555] text-white text-xs rounded-full p-0.5 pl-2 pr-2">
            {children}
        </div>
    </>)
}