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

// GET method (برای استپ‌های پروژه)
export const GET = async (req: Request) => {
    try {
        const urlParams = new URL(req.url).searchParams;
        const limitStr = urlParams.get('limit') ?? '5'; // استفاده از فاصله‌ی اطمینان برای مقدار پیش‌فرض
        const limit = parseInt(limitStr);

        const projectSteps = await prisma.projectStep.findMany({
            take: limit
        });
        return new Response(JSON.stringify(projectSteps), { status: 200 });
    } catch (error: unknown) {
        return new Response(JSON.stringify({ error: error instanceof Error ? error.message : 'Failed to fetch project steps' }), { status: 500 });
    }
}

// POST method (برای استپ‌های پروژه)
export const POST = async (req: Request) => {
    try {
        const user = await verifyToken(req, ['superuser', 'staff']);
        const body = await req.json();
        const { stepName, stepDesc, stepImage, projectId } = body;
        const newStep = await prisma.projectStep.create({
            data: {
                stepName,
                stepDesc,
                stepImage,
                projectId,
            }
        });
        return new Response(JSON.stringify(newStep), { status: 201 });
    } catch (error: unknown) {
        return new Response(JSON.stringify({ error: error instanceof Error ? error.message : 'Failed to create project step' }), { status: 500 });
    }
}
