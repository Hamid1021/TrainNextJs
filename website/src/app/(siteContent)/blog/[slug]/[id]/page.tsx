import { Metadata } from "next";
import { getBlog } from "@/services/blogs";
import { getUsers } from "@/services/users";
import { notFound } from "next/navigation";
import Link from "next/link";
import jalaali from "jalaali-js";
import { Blog as BlogType } from "@/components/Blog/types";

interface BlogProps {
    blog: BlogType;
    author: { username: string; email: string | null; first_name: string; last_name: string | null };
}

export const metadata: Metadata = {
    title: "نوشته | حمیدرضا رضایی",
    description:
        "سلام به همه!" +
        " من حمیدرضا رضایی هستم. 🚀✨ برنامه نویس حرفه‌ای پایتون، و عاشق ساختن سایت‌های شگفت‌انگیز. تخصص من در فریم‌ورک‌های Django ، 🌐 ASP.NET 🐍 و Next.js🌟 است. همیشه در حال کاوش در دنیای کد هستم و تلاش می‌کنم بهترین وب‌سایت‌ها را بسازم! 💪👨‍💻" +
        "به دنیای دیجیتال خوش آمدید! 🌍📲",
};

const SingleBlog: React.FC<BlogProps> = ({ blog, author }) => {
    if (!blog) {
        return <p>بلاگ پیدا نشد.</p>;
    }

    const jDate = jalaali.toJalaali(new Date(blog.createdAt));
    const formattedDate = `${jDate.jy}/${jDate.jm}/${jDate.jd} ${new Date(blog.createdAt).toLocaleTimeString("fa-IR")}`;

    return (
        <div className="p-6 bg-white rounded-lg shadow-md dark:bg-gray-800 mb-5">
            <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">{blog.title}</h1>
            <p className="text-lg mb-6 text-gray-700 dark:text-gray-300 text-justify">{blog.content}</p>
            <div className="mb-4 text-gray-600 dark:text-gray-300">
                <span className="block">
                    نویسنده: {author.first_name} {author.last_name || ""}
                </span>
                <span className="block">ایمیل: {author.email || "N/A"}</span>
                <span className="block">تاریخ: {formattedDate}</span>
                <span className="block">بازدید: {blog.visit}</span>
            </div>
            <Link href="/blog">
                <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">بازگشت به لیست بلاگ‌ها</button>
            </Link>
        </div>
    );
};

interface PageProps {
    params: Promise<{ id: string; }>;
}


const Page = async ({ params }: PageProps) => {
    const { id } = await params;

    if (!id) {
        notFound();
    }

    const blogData = await getBlog(Number(id));
    if (!blogData) {
        notFound();
    }

    const author = await getUsers(blogData.authorId);
    if (!author) {
        notFound();
    }

    return <SingleBlog blog={blogData} author={author} />;
};

export default Page;
