import { NextRequest, NextResponse } from 'next/server';
import { isTokenValid } from '@/lib/auth';

export async function GET(req: NextRequest) {
    // Get token from Authorization header
    const authHeader = req.headers.get('authorization');
    const token = authHeader?.replace('Bearer ', '');

    if (!token) {
        return NextResponse.json({ error: 'Missing authorization token' }, { status: 401 });
    }

    if (!isTokenValid(token)) {
        return NextResponse.json({ error: 'Invalid or expired token' }, { status: 401 });
    }

    // Token is valid, proceed with protected content
    return NextResponse.json({ 
        message: 'Access granted to protected content',
        timestamp: new Date().toISOString()
    }, { status: 200 });
}

export async function POST(req: NextRequest) {
    // Alternative: Get token from request body or cookies
    const body = await req.json();
    const token = body.token || req.cookies.get('auth-token')?.value;

    if (!token) {
        return NextResponse.json({ error: 'Missing authorization token' }, { status: 401 });
    }

    if (!isTokenValid(token)) {
        return NextResponse.json({ error: 'Invalid or expired token' }, { status: 401 });
    }

    // Token is valid, proceed with protected action
    return NextResponse.json({ 
        success: true,
        message: 'Protected action completed successfully'
    }, { status: 200 });
}
