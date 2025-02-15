"use client";

import React, { useEffect, useState, Suspense } from "react";
import Blog from "./Blog";
import Link from "next/link";
import BlogLoading from "./loading";
import { Blog as BlogType } from "./types";
import getData from "@/services/blogs/getData";

interface BlogsClientProps {
    initialPage: number;
    initialPageSize: number;
}

export default function BlogsClient({ initialPage, initialPageSize }: BlogsClientProps) {
    const [data, setData] = useState<{ blogs: BlogType[]; currentPage: number; totalPages: number; totalItems: number } | null>(null);
    const [loading, setLoading] = useState(true);
    const [page] = useState(initialPage);

    useEffect(() => {
        setLoading(true);
        async function fetchData() {
            const data = await getData(page, initialPageSize);
            setData(data);
            setLoading(false);
        }
        fetchData();
    }, [page, initialPageSize]);

    if (loading) {
        return <BlogLoading showPaginator={true} />;
    }

    if (!data) {
        return <div>خطایی در دریافت داده‌ها رخ داده است.</div>;
    }

    return (
        <section id="last-blogs" className="mb-8">
            <h2 className="text-2xl 2xs:text-sm font-semibold mb-4 dark:text-white sm:text-[24px] sm:font-bold">لیست نوشته ها</h2>
            <div className="grid grid-cols-1 gap-y-4">
                <Suspense fallback={<BlogLoading showPaginator={false} />}>
                    {data.blogs.map((blog) => (
                        <Blog key={blog.id} blog={blog} />
                    ))}
                </Suspense>
                {data.blogs.length === 0 && (
                    <div className="blog-item-empty">
                        <span>هیچ نوشته‌ای موجود نیست.</span>
                    </div>
                )}
            </div>
            <div className="flex items-center my-3 justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6 dark:bg-gradient-to-br dark:from-[rgb(46,13,114)] dark:from-35% dark:to-gray-500">
                <div className="flex flex-1 justify-between sm:hidden dark:text-white">
                    <Link href={`?page=${data.currentPage - 1}`} className={`relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 ${data.currentPage === 1 ? 'pointer-events-none opacity-50' : ''}`}>صفحه قبلی</Link>
                    <Link href={`?page=${data.currentPage + 1}`} className={`relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 ${data.currentPage === data.totalPages ? 'pointer-events-none opacity-50' : ''}`}>صفحه بعدی</Link>
                </div>
                <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                    <div>
                        <p className="text-sm text-gray-700 dark:text-white">
                            نمایش
                            <span className="font-medium"> {(data.currentPage - 1) * initialPageSize + 1} </span>
                            تا
                            <span className="font-medium"> {(data.currentPage - 1) * initialPageSize + data.blogs.length} </span>
                            از مجموع
                            <span className="font-medium"> {data.totalItems} </span>
                        </p>
                    </div>
                    <div>
                        <nav className="isolate inline-flex justify-center -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                            <Link href={`?page=${data.currentPage - 1}`} className={`paginator-arrow rounded-l-md ${data.currentPage === 1 ? 'pointer-events-none opacity-50' : ''}`}>
                                <span className="sr-only">صفحه قبلی</span>
                                <svg className="size-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                                    <path fillRule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25-4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                                </svg>
                            </Link>

                            {[...Array(data.totalPages)].map((_, index) => (
                                <Link href={`?page=${index + 1}`} key={index} className={`paginator-a ${data.currentPage === index + 1 ? 'paginator-a-current' : ''}`}>{index + 1}</Link>
                            ))}

                            <Link href={`?page=${data.currentPage + 1}`} className={`paginator-arrow rounded-r-md ${data.currentPage === data.totalPages ? 'pointer-events-none opacity-50' : ''}`}>
                                <span className="sr-only">صفحه بعدی</span>
                                <svg className="size-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                                    <path fillRule="evenodd" d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1-1.06 0Z" clipRule="evenodd" />
                                </svg>
                            </Link>
                        </nav>
                    </div>
                </div>
            </div>
        </section>
    );
}
