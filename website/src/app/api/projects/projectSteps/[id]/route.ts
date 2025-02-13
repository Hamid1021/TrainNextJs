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

// GET method (برای دریافت یک استپ مشخص)
export const GET = async (req: Request) => {
    try {
        const urlParams = new URL(req.url).pathname.split('/');
        const id = urlParams[urlParams.length - 1];
        const step = await prisma.projectStep.findUnique({
            where: { id: Number(id) }
        });
        return new Response(JSON.stringify(step), { status: 200 });
    } catch (error: unknown) {
        return new Response(JSON.stringify({ error: error instanceof Error ? error.message : 'Failed to fetch project step' }), { status: 500 });
    }
}

// PUT method (برای ویرایش یک استپ مشخص)
export const PUT = async (req: Request) => {
    try {
        await verifyToken(req, ['superuser']);
        const urlParams = new URL(req.url).pathname.split('/');
        const id = urlParams[urlParams.length - 1];
        const body = await req.json();
        const { stepName, stepDesc, stepImage } = body;
        const updatedStep = await prisma.projectStep.update({
            where: { id: Number(id) },
            data: {
                stepName,
                stepDesc,
                stepImage,
            }
        });
        return new Response(JSON.stringify(updatedStep), { status: 200 });
    } catch (error: unknown) {
        return new Response(JSON.stringify({ error: error instanceof Error ? error.message : 'Failed to update project step' }), { status: 500 });
    }
}

// DELETE method (برای حذف یک استپ مشخص)
export const DELETE = async (req: Request) => {
    try {
        await verifyToken(req, ['superuser']);
        const urlParams = new URL(req.url).pathname.split('/');
        const id = urlParams[urlParams.length - 1];
        await prisma.projectStep.delete({
            where: { id: Number(id) }
        });
        return new Response(null, { status: 204 });
    } catch (error: unknown) {
        return new Response(JSON.stringify({ error: error instanceof Error ? error.message : 'Failed to delete project step' }), { status: 500 });
    }
}
