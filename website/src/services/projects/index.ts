import { api } from "../api";
import { Project, Step } from "@/components/Project/types";

const getProjects = async (limit: number): Promise<Project[]> => {
    try {
        const response = await api.get(`/api/projects?limit=${limit}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching projects:", error);
        return [];
    }
};

const getProject = async (id: number): Promise<Project | null> => {
    try {
        const response = await api.get(`/api/projects/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching project:", error);
        return null;
    }
};

const createProject = async (data: { name: string; slug: string; desc: string; image: string; reason: string; problemStatement: string; problemStatementImage: string; userId: number }): Promise<Project | null> => {
    try {
        const response = await api.post("/api/projects", data);
        return response.data;
    } catch (error) {
        console.error("Error creating project:", error);
        return null;
    }
};

const updateProject = async (id: number, data: { name: string; slug: string; desc: string; image: string; reason: string; problemStatement: string; problemStatementImage: string }): Promise<Project | null> => {
    try {
        const response = await api.put(`/api/projects/${id}`, data);
        return response.data;
    } catch (error) {
        console.error("Error updating project:", error);
        return null;
    }
};

const deleteProject = async (id: number): Promise<void> => {
    try {
        await api.delete(`/api/projects/${id}`);
    } catch (error) {
        console.error("Error deleting project:", error);
    }
};

const getProjectSteps = async (limit: number): Promise<Step[]> => {
    try {
        const response = await api.get(`/api/projects/projectSteps?limit=${limit}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching project steps:", error);
        return [];
    }
};

const getProjectStep = async (id: number): Promise<Step | null> => {
    try {
        const response = await api.get(`/api/projects/projectSteps/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching project step:", error);
        return null;
    }
};

const createProjectStep = async (data: { stepName: string; stepDesc: string; stepImage: string; projectId: number }): Promise<Step | null> => {
    try {
        const response = await api.post("/api/projects/projectSteps", data);
        return response.data;
    } catch (error) {
        console.error("Error creating project step:", error);
        return null;
    }
};

const updateProjectStep = async (id: number, data: { stepName: string; stepDesc: string; stepImage: string }): Promise<Step | null> => {
    try {
        const response = await api.put(`/api/projects/projectSteps/${id}`, data);
        return response.data;
    } catch (error) {
        console.error("Error updating project step:", error);
        return null;
    }
};

const deleteProjectStep = async (id: number): Promise<void> => {
    try {
        await api.delete(`/api/projects/projectSteps/${id}`);
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
