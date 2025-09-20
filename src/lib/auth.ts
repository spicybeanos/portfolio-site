import jwt from 'jsonwebtoken';

export interface JWTPayload {
    authorized: boolean;
    timestamp: number;
    iat?: number;
    exp?: number;
}

export function verifyToken(token: string): JWTPayload | null {
    try {
        const JWT_SECRET = process.env.JWT_SECRET || 'your-super-secret-jwt-key';
        const decoded = jwt.verify(token, JWT_SECRET) as JWTPayload;
        return decoded;
    } catch (error) {
        console.error('JWT verification failed:', error);
        return null;
    }
}

export function isTokenValid(token: string): boolean {
    const payload = verifyToken(token);
    return payload !== null && payload.authorized === true;
}
