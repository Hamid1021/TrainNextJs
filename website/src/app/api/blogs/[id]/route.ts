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

// GET method (برای دریافت یک پست مشخص)
export const GET = async (req: Request) => {
    try {
        const urlParams = new URL(req.url).pathname.split('/');
        const id = urlParams[urlParams.length - 1];
        const post = await prisma.blog.findUnique({
            where: { id: Number(id) }
        });
        return new Response(JSON.stringify(post), { status: 200 });
    } catch (error: unknown) {
        return new Response(JSON.stringify({ error: error instanceof Error ? error.message : 'Failed to fetch post' }), { status: 500 });
    }
}

// PUT method (برای ویرایش یک پست مشخص)
export const PUT = async (req: Request) => {
    try {
        await verifyToken(req, ['superuser']);
        const urlParams = new URL(req.url).pathname.split('/');
        const id = urlParams[urlParams.length - 1];
        const body = await req.json();
        const { title, content } = body;
        const updatedPost = await prisma.blog.update({
            where: { id: Number(id) },
            data: {
                title,
                content,
            }
        });
        return new Response(JSON.stringify(updatedPost), { status: 200 });
    } catch (error: unknown) {
        return new Response(JSON.stringify({ error: error instanceof Error ? error.message : 'Failed to update post' }), { status: 500 });
    }
}

// DELETE method (برای حذف یک پست مشخص)
export const DELETE = async (req: Request) => {
    try {
        await verifyToken(req, ['superuser']);
        const urlParams = new URL(req.url).pathname.split('/');
        const id = urlParams[urlParams.length - 1];
        await prisma.blog.delete({
            where: { id: Number(id) }
        });
        return new Response(null, { status: 204 });
    } catch (error: unknown) {
        return new Response(JSON.stringify({ error: error instanceof Error ? error.message : 'Failed to delete post' }), { status: 500 });
    }
}
