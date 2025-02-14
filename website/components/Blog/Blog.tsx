import React, { Suspense } from "react";
import BlogLoading from "./loading";
import { BlogProps } from "./types";

export default function Blog(props: BlogProps) {
    const { blog } = props;
    return (
        <Suspense fallback={<BlogLoading />}>
            <div className="blog-item-full">
                <a href={`/blogs/${blog.id}`}>{blog.title}</a>
            </div>
        </Suspense>
    );
}
