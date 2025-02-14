import { api } from "../api";

// تابع برای دریافت لیست پروژه‌ها
const getProjects = async (limit: number) => {
    try {
        const response = await api.get(`/projects?limit=${limit}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching projects:", error);
        return [];
    }
};

// تابع برای دریافت یک پروژه مشخص
const getProject = async (id: number) => {
    try {
        const response = await api.get(`/projects/${id}`);
        return response.data; // این شامل استپ‌ها خواهد بود
    } catch (error) {
        console.error("Error fetching project:", error);
        return null;
    }
};

// تابع برای ایجاد پروژه جدید
const createProject = async (data: { name: string; slug: string; desc: string; image: string; reason: string; problemStatement: string; problemStatementImage: string; userId: number }) => {
    try {
        const response = await api.post("/projects", data);
        return response.data;
    } catch (error) {
        console.error("Error creating project:", error);
        return null;
    }
};

// تابع برای ویرایش یک پروژه مشخص
const updateProject = async (id: number, data: { name: string; slug: string; desc: string; image: string; reason: string; problemStatement: string; problemStatementImage: string }) => {
    try {
        const response = await api.put(`/projects/${id}`, data);
        return response.data;
    } catch (error) {
        console.error("Error updating project:", error);
        return null;
    }
};

// تابع برای حذف یک پروژه مشخص
const deleteProject = async (id: number) => {
    try {
        await api.delete(`/projects/${id}`);
    } catch (error) {
        console.error("Error deleting project:", error);
    }
};

// تابع برای دریافت لیست استپ‌های پروژه
const getProjectSteps = async (limit: number) => {
    try {
        const response = await api.get(`/projects/projectSteps?limit=${limit}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching project steps:", error);
        return [];
    }
};

// تابع برای دریافت یک استپ مشخص
const getProjectStep = async (id: number) => {
    try {
        const response = await api.get(`/projects/projectSteps/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching project step:", error);
        return null;
    }
};

// تابع برای ایجاد استپ جدید برای پروژه
const createProjectStep = async (data: { stepName: string; stepDesc: string; stepImage: string; projectId: number }) => {
    try {
        const response = await api.post("/projects/projectSteps", data);
        return response.data;
    } catch (error) {
        console.error("Error creating project step:", error);
        return null;
    }
};

// تابع برای ویرایش یک استپ مشخص
const updateProjectStep = async (id: number, data: { stepName: string; stepDesc: string; stepImage: string }) => {
    try {
        const response = await api.put(`/projects/projectSteps/${id}`, data);
        return response.data;
    } catch (error) {
        console.error("Error updating project step:", error);
        return null;
    }
};

// تابع برای حذف یک استپ مشخص
const deleteProjectStep = async (id: number) => {
    try {
        await api.delete(`/projects/projectSteps/${id}`);
    } catch (error) {
        console.error("Error deleting project step:", error);
    }
};

export {
    getProjects,
    getProject,
    createProject,
    updateProject,
    deleteProject,
    getProjectSteps,
    getProjectStep,
    createProjectStep,
    updateProjectStep,
    deleteProjectStep
};
