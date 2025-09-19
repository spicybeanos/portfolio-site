import { NextRequest, NextResponse } from 'next/server';
import { createHash } from 'crypto';

export async function POST(req: NextRequest) {
    const body = await req.formData();
    const passkey = body.get('passkey') as string | null;

    if (!passkey) {
        return NextResponse.json({ error: 'Missing passkey' }, { status: 400 });
    }

    const DOOR_SALT = process.env.DOOR_SALT || '';
    const DOOR_PASS = process.env.DOOR_PASS || '';

    function hash(input: string) {
        return createHash('sha256').update(input).digest('hex');
    }

    const inputHash = hash(passkey + DOOR_SALT);
    const validHash = hash(DOOR_PASS + DOOR_SALT);

    if (inputHash === validHash) {
        return NextResponse.json({ success: true }, { status: 200 });
    } else {
        return NextResponse.json({ error: 'Invalid passkey' }, { status: 400 });
    }
}