// src/app/(siteContent)/auth/login.tsx
"use client"; // افزودن این خط برای مشخص کردن کامپوننت سمت کلاینت

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // استفاده از next/navigation به جای next/router
import axios from "axios";
import Head from "next/head"; // افزودن Head برای SEO

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            router.push("/");
        }
    }, [router]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        try {
            const response = await axios.put("/api/users", { username, password });
            localStorage.setItem("token", response.data.token);
            router.push("/");
        } catch (err: unknown) {
            if (err instanceof Error) {
                setError("اطلاعات نامعتبر. لطفاً دوباره تلاش کنید.");
            }
        }
    };

    return (
        <div>
            <Head>
                <title>ورود به سایت | حمیدرضا رضایی</title>
                <meta name="description" content="وارد شوید تا به حساب کاربری خود دسترسی پیدا کنید و از ویژگی‌های اختصاصی لذت ببرید." />
                <meta name="robots" content="index, follow" />
            </Head>
            <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
                <div className="bg-white dark:bg-gray-800 p-8 rounded shadow-md w-full max-w-md">
                    <h2 className="text-2xl font-bold mb-6 dark:text-white">ورود</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">نام کاربری</label>
                            <input
                                type="text"
                                className="mt-1 p-2 border border-gray-300 dark:border-gray-600 rounded w-full bg-white dark:bg-gray-700 dark:text-white"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">رمز عبور</label>
                            <input
                                type="password"
                                className="mt-1 p-2 border border-gray-300 dark:border-gray-600 rounded w-full bg-white dark:bg-gray-700 dark:text-white"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        {error && <div className="mb-4 text-red-500 dark:text-red-400">{error}</div>}
                        <button
                            type="submit"
                            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold p-2 rounded"
                        >
                            ورود
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
