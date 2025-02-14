import React, { Suspense } from "react";
import BlogLoading from "./loading";
import { BlogProps } from "./types";
import Link from "next/link";

export default function Blog(props: BlogProps) {
    const { blog } = props;
    return (
        <Suspense fallback={<BlogLoading />}>
            <div className="blog-item-full">
                <Link href={`/blog/${blog.slug}/${blog.id}`}>{blog.title}</Link>
            </div>
        </Suspense>
    );
}
