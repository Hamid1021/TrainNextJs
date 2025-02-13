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

// GET method (برای پروژه‌ها)
export const GET = async (req: Request) => {
    try {
        const projects = await prisma.project.findMany();
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
