import { BlogProps } from "./types";
import React, { Suspense } from "react";
import Link from "next/link";

const BlogLoading = React.lazy(() => import('@/components/Blog/loading'));

export default function Blog(props: BlogProps) {
    const { blog } = props;
    return (
        <Suspense fallback={<BlogLoading showPaginator={true} />}>
            <div className="blog-item-full">
                <Link href={`/blog/${blog.slug}/${blog.id}`}>{blog.title}</Link>
            </div>
        </Suspense>
    );
}
