import React, { Suspense, } from "react";
import BlogLoading from "./loading";
import { BlogProps } from "./types";

// فرض کنید Blog کامپوننت واقعی شما است
// const BlogComponent = lazy(() => import("./Blog")); // واردات پیش‌فرض به طور مستقیم

export default function Blog(props: BlogProps) {
    const { Blog } = props;
    return (
        <Suspense fallback={<BlogLoading />}>
            <div className="blog-item-full">
                <a href="#">{Blog.title}</a>
            </div>
        </Suspense>
    );
}
