// src/app/api/projects/[id]/route.ts
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

// GET method (برای دریافت یک پروژه مشخص)
export const GET = async (req: Request) => {
    try {
        const urlParams = new URL(req.url).pathname.split('/');
        const id = urlParams[urlParams.length - 1];
        const project = await prisma.project.findUnique({
            where: { id: Number(id) },
            include: { steps: true }, // شامل استپ‌های پروژه
        });
        return new Response(JSON.stringify(project), { status: 200 });
    } catch (error: unknown) {
        return new Response(JSON.stringify({ error: error instanceof Error ? error.message : 'Failed to fetch project' }), { status: 500 });
    }
}

// PUT method (برای ویرایش یک پروژه مشخص)
export const PUT = async (req: Request) => {
    try {
        await verifyToken(req, ['superuser']);
        const urlParams = new URL(req.url).pathname.split('/');
        const id = urlParams[urlParams.length - 1];
        const body = await req.json();
        const { name, slug, desc, image, reason, problemStatement, problemStatementImage } = body;
        const updatedProject = await prisma.project.update({
            where: { id: Number(id) },
            data: {
                name,
                slug,
                desc,
                image,
                reason,
                problemStatement,
                problemStatementImage,
            }
        });
        return new Response(JSON.stringify(updatedProject), { status: 200 });
    } catch (error: unknown) {
        return new Response(JSON.stringify({ error: error instanceof Error ? error.message : 'Failed to update project' }), { status: 500 });
    }
}

// DELETE method (برای حذف یک پروژه مشخص)
export const DELETE = async (req: Request) => {
    try {
        await verifyToken(req, ['superuser']);
        const urlParams = new URL(req.url).pathname.split('/');
        const id = urlParams[urlParams.length - 1];
        await prisma.project.delete({
            where: { id: Number(id) }
        });
        return new Response(null, { status: 204 });
    } catch (error: unknown) {
        return new Response(JSON.stringify({ error: error instanceof Error ? error.message : 'Failed to delete project' }), { status: 500 });
    }
}
