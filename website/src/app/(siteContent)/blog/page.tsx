import { Metadata } from "next";
import BlogsClient from "@/components/Blog/BlogsClient";

export const metadata: Metadata = {
    title: "نوشته ها | حمیدرضا رضایی",
    description:
        "سلام به همه!" +
        " من حمیدرضا رضایی هستم. 🚀✨ برنامه نویس حرفه‌ای پایتون، و عاشق ساختن سایت‌های شگفت‌انگیز. تخصص من در فریم‌ورک‌های Django ، 🌐 ASP.NET 🐍 و Next.js🌟 است. همیشه در حال کاوش در دنیای کد هستم و تلاش می‌کنم بهترین وب‌سایت‌ها را بسازم! 💪👨‍💻" +
        "به دنیای دیجیتال خوش آمدید! 🌍📲",
};

interface PageParams {
    searchParams: Promise<{ page?: string }>;
}

export default async function Blogs({ searchParams }: PageParams) {
    const { page } = await searchParams;
    const currentPage = page && !isNaN(Number(page)) ? Number(page) : 1;
    const pageSize = 8;

    return (
        <BlogsClient initialPage={currentPage} initialPageSize={pageSize} />
    );
}
