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

const verifyToken = async (req: Request | Request, roles: string[]): Promise<JWTPayload> => {
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

// GET method (برای پروژه‌ها)
export const GET = async (req: Request) => {
    try {
        const urlParams = new URL(req.url).searchParams;
        const limitStr = urlParams.get('limit') ?? '5'; // استفاده از فاصله‌ی اطمینان برای مقدار پیش‌فرض
        const limit = parseInt(limitStr);

        const projects = await prisma.project.findMany({
            take: limit
        });
        return new Response(JSON.stringify(projects), { status: 200 });
    } catch (error: unknown) {
        return new Response(JSON.stringify({ error: error instanceof Error ? error.message : 'Failed to fetch projects' }), { status: 500 });
    }
}

// POST method (برای پروژه‌ها)
export const POST = async (req: Request) => {
    try {
        await verifyToken(req, ['superuser', 'staff']);
        const body = await req.json();
        const { name, slug, desc, image, reason, problemStatement, problemStatementImage, userId } = body;
        const newProject = await prisma.project.create({
            data: {
                name,
                slug,
                desc,
                image,
                reason,
                problemStatement,
                problemStatementImage,
                userId,
            }
        });
        return new Response(JSON.stringify(newProject), { status: 201 });
    } catch (error: unknown) {
        return new Response(JSON.stringify({ error: error instanceof Error ? error.message : 'Failed to create project' }), { status: 500 });
    }
}
