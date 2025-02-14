// src/app/api/blogs/route.ts
import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const prisma = new PrismaClient();
const SECRET_KEY = process.env.SECRET_KEY;

if (!SECRET_KEY) {
    throw new Error("SECRET_KEY is not defined in the environment variables");
}

interface JWTPayload {
    id: number;
    role: string;
    isActive: boolean;
}

const verifyToken = async (req: Request, roles: string[]): Promise<JWTPayload> => {
    const token = req.headers.get('Authorization')?.split(' ')[1];
    if (!token) {
        throw new Error('No token provided');
    }

    try {
        const decoded = jwt.verify(token, SECRET_KEY) as JWTPayload; // Type assertion
        if (!roles.includes(decoded.role)) {
            throw new Error('Access denied');
        }
        return decoded;
    } catch (error) {
        throw new Error('Failed to authenticate token' + error);
    }
};

// GET method (برای پست‌ها)
export const GET = async (req: Request) => {
    try {
        const urlParams = new URL(req.url).searchParams;
        const page = parseInt(urlParams.get('page') ?? '1');
        const pageSize = parseInt(urlParams.get('limit') ?? '8');

        const publishedPosts = await prisma.blog.findMany({
            where: { published: true },
            skip: (page - 1) * pageSize,
            take: pageSize,
        });

        const totalPosts = await prisma.blog.count({
            where: { published: true },
        });

        return new Response(JSON.stringify({
            blogs: publishedPosts,
            totalItems: totalPosts, // اضافه کردن تعداد کل آیتم‌ها
            currentPage: page,
            totalPages: Math.ceil(totalPosts / pageSize),
        }), { status: 200 });
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
