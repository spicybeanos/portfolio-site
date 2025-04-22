
// app/api/experience/route.ts
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY! // Don't expose this to the client!
)

export async function GET() {
    const { data, error } = await supabase.from('experience').select('*')

    if (error) return Response.json({ error: error.message }, { status: 500 })
    return Response.json(data)
}
