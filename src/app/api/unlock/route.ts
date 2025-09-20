import { NextRequest, NextResponse } from 'next/server';
import { createHash } from 'crypto';
import jwt from 'jsonwebtoken';

export async function POST(req: NextRequest) {
    let body: FormData;
    try {
        body = await req.formData();
    } catch (error) {
        return NextResponse.json({ error: 'Invalid or missing form data' }, { status: 400 });
    }

    if (!body) {
        return NextResponse.json({ error: 'Missing form data' }, { status: 400 });
    }

    const passkey = body.get('passkey') as string | null;

    if (!passkey) {
        return NextResponse.json({ error: 'Missing passkey' }, { status: 400 });
    }

    const DOOR_SALT = process.env.DOOR_SALT || '';
    const DOOR_PASS = process.env.DOOR_PASS || '';
    const JWT_SECRET = process.env.JWT_SECRET || 'your-super-secret-jwt-key';

    function hash(input: string) {
        return createHash('sha256').update(input).digest('hex');
    }

    const inputHash = hash(passkey + DOOR_SALT);
    const validHash = hash(DOOR_PASS + DOOR_SALT);

    if (inputHash === validHash) {
        // Generate JWT token valid for 8 hours
        const token = jwt.sign(
            { 
                authorized: true,
                timestamp: Date.now()
            },
            JWT_SECRET,
            { 
                expiresIn: '8h'
            }
        );

        return NextResponse.json({ 
            success: true, 
            token: token 
        }, { status: 200 });
    } else {
        return NextResponse.json({ error: 'Invalid passkey' }, { status: 400 });
    }
}