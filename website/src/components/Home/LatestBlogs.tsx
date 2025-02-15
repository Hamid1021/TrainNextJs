import React from "react";
import Blog from "../Blog/Blog";
import { Blog as BlogType } from "../Blog/types";

interface LatestBlogsProps {
    blogs: BlogType[];
}

const LatestBlogs = ({ blogs }: LatestBlogsProps) => {
    return (
        <section id="last-blogs" className="mb-8">
            <h2 className="text-2xl 2xs:text-sm font-semibold mb-4 dark:text-white sm:text-[24px] sm:font-bold">اخرین نوشته ها</h2>
            <div className="grid grid-cols-1 gap-y-4">
                {blogs.map((blog) => (
                    <Blog key={blog.id} blog={blog} />
                ))}
                {blogs.length === 0 && (
                    <div className="blog-item-empty">
                        <a href="#">هیچ نوشته‌ای موجود نیست.</a>
                    </div>
                )}
            </div>
        </section>
    );
};

export default LatestBlogs;
