import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { NextRequest } from 'next/server'; // Import NextRequest

dotenv.config();

const prisma = new PrismaClient();
const SECRET_KEY = process.env.SECRET_KEY;

if (!SECRET_KEY) {
    throw new Error("SECRET_KEY is not defined in the environment variables");
}

interface AuthPayload {
    id: number;
    role: string;
    isActive: boolean;
}

// GET method (برای کاربران)
export const GET = async (req: NextRequest) => { // Use NextRequest
    try {
        const urlParams = new URL(req.url).searchParams;
        const id = urlParams.get('id');

        if (id) {
            const user = await prisma.user.findUnique({ where: { id: Number(id) } });
            return new Response(JSON.stringify(user), { status: 200 });
        } else {
            const users = await prisma.user.findMany();
            return new Response(JSON.stringify(users), { status: 200 });
        }
    } catch (error) {
        console.error("Error fetching users:", error); // Log the error
        return new Response(JSON.stringify({ error: 'Failed to fetch users' }), { status: 500 });
    }
}

// POST method (ثبت‌نام)
export const POST = async (req: NextRequest) => { // Use NextRequest
    try {
        const body = await req.json();
        const { username, email, password, first_name } = body;

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await prisma.user.create({
            data: {
                username,
                email,
                password: hashedPassword,
                first_name: first_name
            }
        });

        return new Response(JSON.stringify(newUser), { status: 201 });
    } catch (error) {
        console.error("Error creating user:", error); // Log the error
        return new Response(JSON.stringify({ error: 'Failed to create user' }), { status: 500 });
    }
}

// PUT method (ورود به سیستم)
export const PUT = async (req: NextRequest) => { // Use NextRequest
    try {
        const body = await req.json();
        const { username, password } = body;

        const user = await prisma.user.findUnique({ where: { username } });
        if (!user) {
            return new Response(JSON.stringify({ error: 'User not found' }), { status: 404 });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return new Response(JSON.stringify({ error: 'Invalid credentials' }), { status: 401 });
        }

        const role = user.isSuperuser ? 'superuser' : (user.isStaff ? 'staff' : 'user');

        const token = jwt.sign(
            {
                id: user.id,
                role,
                isActive: user.isActive,
            } as AuthPayload, // Type assertion here
            SECRET_KEY,
            { expiresIn: '1h' }
        );

        return new Response(JSON.stringify({ token }), { status: 200 });
    } catch (error) {
        console.error("Error during login:", error); // Log the error
        return new Response(JSON.stringify({ error: 'Failed to login' }), { status: 500 });
    }
}

// DELETE method (برای کاربران)
export const DELETE = async (req: NextRequest) => {  // Use NextRequest
    try {
        const urlParams = new URL(req.url).searchParams;
        const id = urlParams.get('id');
        if (!id) {
            return new Response(JSON.stringify({ error: 'User ID is required' }), { status: 400 });
        }

        await prisma.user.delete({ where: { id: Number(id) } });
        return new Response(null, { status: 204 });
    } catch (error) {
        console.error("Error deleting user:", error); // Log the error
        return new Response(JSON.stringify({ error: 'Failed to delete user' }), { status: 500 });
    }
}