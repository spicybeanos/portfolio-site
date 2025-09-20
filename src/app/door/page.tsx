

export default function Door(){
    
    return (
    <div className="flex flex-col justify-center h-[60vh]">
        <form
            action="/api/door"
            method="POST"
            className="flex flex-col items-center"
        >
            <div>Khul ja sim sim</div>
            <input
                type="text"
                name="passkey"
                placeholder="Enter passkey"
                className="border-1 border-gray-500 p-2 m-2"
                required
            />
            <button type="submit" className="border-1 border-white p-2 m-2">Unlock</button>
        </form>
    </div>
    );
}