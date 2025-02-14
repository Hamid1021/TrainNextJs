import axios, { AxiosError, HttpStatusCode, InternalAxiosRequestConfig } from 'axios';
import Router from 'next/router';

export const api = axios.create({
    baseURL: "/api/",
    headers: { "Content-Type": "application/json" }
});

// interceptor برای مدیریت درخواست‌ها (مثلا افزودن توکن)
const apiInterceptor = async (request: InternalAxiosRequestConfig) => {
    const token = localStorage.getItem('token');
    if (token) {
        request.headers.Authorization = `Bearer ${token}`;
    }
    return request;
};


const errorInterceptor = async (axiosError: AxiosError) => {
    if (axiosError.response?.status === HttpStatusCode.Unauthorized) {
        await Router.push('/auth/login');
    }
    return Promise.reject(axiosError);
};

api.interceptors.request.use(apiInterceptor);
api.interceptors.response.use((res) => res, errorInterceptor);