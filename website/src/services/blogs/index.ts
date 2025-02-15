import { Blog, BlogListParams } from "../../components/Blog/types";
import { api } from "../api";

// تابع برای دریافت لیست بلاگ‌ها
const getBlogs = async (params: BlogListParams): Promise<{ blogs: Blog[], totalItems: number }> => {
    try {
        const response = await api.get("/api/blogs", { params });
        return response.data;
    } catch (error) {
        console.error("Error fetching blogs:", error);
        throw error; // برای مدیریت خطا در کامپوننت‌ها
    }
};

// تابع برای دریافت یک بلاگ
const getBlog = async (id: number): Promise<Blog> => {
    try {
        const response = await api.get(`/api/blogs/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching blog:", error);
        throw error;
    }
};

// تابع برای ایجاد بلاگ جدید
const createBlog = async (data: Omit<Blog, 'id'>): Promise<Blog> => {
    try {
        const response = await api.post("/api/blogs", data);
        return response.data;
    } catch (error) {
        console.error("Error creating blog:", error);
        throw error;
    }
};

// تابع برای ویرایش یک بلاگ
const updateBlog = async (id: number, data: Omit<Blog, 'id'>): Promise<Blog> => {
    try {
        const response = await api.put(`/api/blogs/${id}`, data);
        return response.data;
    } catch (error) {
        console.error("Error updating blog:", error);
        throw error;
    }
};

// تابع برای حذف یک بلاگ
const deleteBlog = async (id: number): Promise<void> => {
    try {
        await api.delete(`/api/blogs/${id}`);
    } catch (error) {
        console.error("Error deleting blog:", error);
        throw error;
    }
};

export { getBlogs, createBlog, getBlog, updateBlog, deleteBlog }; // export توابع
