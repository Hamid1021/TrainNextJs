import { Metadata } from "next";
import { Blog as BlogType } from "../../../../../../components/Blog/types";
import Link from "next/link";
import jalaali from "jalaali-js";

export const metadata: Metadata = {
    title: "بلاگ | حمیدرضا رضایی",
    description: "جزئیات بلاگ.",
};

interface BlogProps {
    blog: BlogType;
    author: { username: string; email: string | null; first_name: string; last_name: string | null };
}

async function getBlog(id: string): Promise<{ blog: BlogType, author: { username: string; email: string | null; first_name: string; last_name: string | null } } | null> {
    const res = await fetch(`/api/blogs/${id}`);
    if (!res.ok) {
        return null;
    }
    const blog = await res.json();

    // دریافت اطلاعات نویسنده
    const authorRes = await fetch(`/api/users?id=${blog.authorId}`);
    if (!authorRes.ok) {
        return null;
    }
    const author = await authorRes.json();

    return { blog, author };
}

const SingleBlog: React.FC<BlogProps> = ({ blog, author }) => {
    if (!blog) {
        return <p>بلاگ پیدا نشد.</p>;
    }

    const jDate = jalaali.toJalaali(new Date(blog.createdAt));
    const formattedDate = `${jDate.jy}/${jDate.jm}/${jDate.jd} ${new Date(blog.createdAt).toLocaleTimeString('fa-IR')}`;

    return (
        <div className="p-6 bg-white rounded-lg shadow-md dark:bg-gray-800 mb-5">
            <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">{blog.title}</h1>
            <p className="text-lg mb-6 text-gray-700 dark:text-gray-300 text-justify">{blog.content}</p>
            <div className="mb-4 text-gray-600 dark:text-gray-300">
                <span className="block">نویسنده: {author.first_name} {author.last_name || ''}</span>
                <span className="block">ایمیل: {author.email || 'N/A'}</span>
                <span className="block">تاریخ: {formattedDate}</span>
                <span className="block">بازدید: {blog.visit}</span>
            </div>
            <Link href="/blog">
                <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">بازگشت به لیست بلاگ‌ها</button>
            </Link>
        </div>
    );
};

const Page = async ({ params }: { params: Promise<{ id: string; slug: string }> }) => {
    const p = await params;
    const blogData = await getBlog(p.id);

    if (!blogData) {
        return <p>بلاگ پیدا نشد.</p>;
    }

    return <SingleBlog blog={blogData.blog} author={blogData.author} />;
};

export default Page;
