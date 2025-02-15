// src/services/getData.ts
import { getBlogs } from "@/services/blogs";
import { Blog as BlogType } from "@/components/Blog/types";

interface BlogsProps {
    blogs: BlogType[];
    currentPage: number;
    totalPages: number;
    totalItems: number;
}

export default async function getData(page: number, pageSize: number): Promise<BlogsProps> {
    const response = await getBlogs({ page, limit: pageSize });
    const totalItems = response.totalItems;
    const totalPages = Math.ceil(totalItems / pageSize);
    return {
        blogs: response.blogs,
        currentPage: page,
        totalPages,
        totalItems,
    };
}
