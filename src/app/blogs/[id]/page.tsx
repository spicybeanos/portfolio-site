
export default async function Blog(
    {
        params,
    }: {
        params: Promise<{ id: string }>
    }
) {
    const { id } = await params
    return (
        <div className='flex flex-col'>
            
        </div>
    )
}