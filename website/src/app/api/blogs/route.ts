import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const prisma = new PrismaClient();
const SECRET_KEY = process.env.SECRET_KEY;

if (!SECRET_KEY) {
    throw new Error("SECRET_KEY is not defined in the environment variables");
}

// Middleware for verifying token and roles
const verifyToken = async (req: Request, roles: string[]) => {
    const token = req.headers.get('Authorization')?.split(' ')[1];
    if (!token) throw new Error('No token provided');

    try {
        const decoded: any = jwt.verify(token, SECRET_KEY);
        if (!roles.includes(decoded.role)) throw new Error('Access denied');
        return decoded;
    } catch (error) {
        throw new Error('Failed to authenticate token');
    }
}

// GET method (برای پست‌ها)
export const GET = async (req: Request) => {
    try {
        const publishedPosts = await prisma.blog.findMany({
            where: { published: true }
        });
        return new Response(JSON.stringify(publishedPosts), { status: 200 });
    } catch (error: unknown) {
        return new Response(JSON.stringify({ error: error instanceof Error ? error.message : 'Failed to fetch posts' }), { status: 500 });
    }
}

// POST method (برای پست‌ها)
export const POST = async (req: Request) => {
    try {
        const user = await verifyToken(req, ['superuser', 'staff']);
        const body = await req.json();
        const { title, content, authorId } = body;
        const newPost = await prisma.blog.create({
            data: {
                title,
                content,
                authorId,
                published: user.role === 'superuser',
            }
        });
        return new Response(JSON.stringify(newPost), { status: 201 });
    } catch (error: unknown) {
        return new Response(JSON.stringify({ error: error instanceof Error ? error.message : 'Failed to create post' }), { status: 500 });
    }
}
