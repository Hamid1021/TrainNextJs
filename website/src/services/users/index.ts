import { api } from "../api";

// تابع برای دریافت کاربران
const getUsers = async (id?: number) => {
    try {
        const response = id ? await api.get(`/users?id=${id}`) : await api.get("/users");
        return response.data;
    } catch (error) {
        console.error("Error fetching users:", error);
        throw error;
    }
};

// تابع برای ثبت‌نام کاربر جدید
const createUser = async (userData: { username: string; email: string; password: string; first_name: string; }) => {
    try {
        const response = await api.post("/users", userData);
        return response.data;
    } catch (error) {
        console.error("Error creating user:", error);
        throw error;
    }
};

// تابع برای ورود به سیستم (لاگین)
const loginUser = async (username: string, password: string) => {
    try {
        const response = await api.put("/users", { username, password });
        return response.data;
    } catch (error) {
        console.error("Error logging in:", error);
        throw error;
    }
};

// تابع برای حذف کاربر
const deleteUser = async (id: number) => {
    try {
        await api.delete(`/users?id=${id}`);
    } catch (error) {
        console.error("Error deleting user:", error);
        throw error;
    }
};

export { getUsers, createUser, loginUser, deleteUser }; // export توابع
