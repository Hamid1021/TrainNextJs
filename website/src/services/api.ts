import axios, { AxiosError, HttpStatusCode, InternalAxiosRequestConfig } from 'axios';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

export const api = axios.create({
    baseURL: BASE_URL,
    headers: { "Content-Type": "application/json" }
});

// interceptor برای مدیریت درخواست‌ها (مثلا افزودن توکن)
const apiInterceptor = async (request: InternalAxiosRequestConfig) => {
    if (typeof window !== 'undefined') {
        const token = localStorage.getItem('token');
        if (token) {
            request.headers.Authorization = `Bearer ${token}`;
        }
    }
    return request;
};

const errorInterceptor = async (axiosError: AxiosError) => {
    if (axiosError.response?.status === HttpStatusCode.Unauthorized) {
        if (typeof window !== 'undefined') {
            window.location.href = '/auth/login';
        }
    }
    return Promise.reject(axiosError);
};

api.interceptors.request.use(apiInterceptor);
api.interceptors.response.use((res) => res, errorInterceptor);
