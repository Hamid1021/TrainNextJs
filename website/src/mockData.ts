import { Blog } from "@/components/Blog/types";
import { Project } from "@/components/Project/types";

export const mockBlogs: Blog[] = [
    {
        id: 1,
        title: 'معرفی فریم‌ورک React',
        slug: 'React',
        content: 'React یکی از محبوب‌ترین فریم‌ورک‌های جاوااسکریپت برای ساخت رابط‌های کاربری است. این فریم‌ورک توسط فیسبوک توسعه داده شده است و به توسعه‌دهندگان امکان ساختن برنامه‌های وب با کارایی بالا و ساختار قابل نگهداری را می‌دهد.',
        authorId: 1,
        createdAt: '2025-02-13T19:37:41.355Z',
        updatedAt: '2025-02-14T22:08:46.750Z',
        published: true,
        visit: 2397,
    },
    {
        id: 2,
        title: 'آشنایی با فریم‌ورک Angular',
        slug: 'Angular',
        content: 'Angular یک فریم‌ورک قدرتمند جاوااسکریپت برای ساخت برنامه‌های تک صفحه‌ای (SPA) است. این فریم‌ورک توسط گوگل توسعه یافته است و از TypeScript استفاده می‌کند. Angular ابزارهای متنوعی برای توسعه برنامه‌های وب فراهم می‌کند.',
        authorId: 1,
        createdAt: '2025-02-13T19:37:59.168Z',
        updatedAt: '2025-02-14T20:54:19.275Z',
        published: true,
        visit: 22,
    },
];

export const mockProjects: Project[] = [
    {
        id: 1,
        name: 'مدیریت زمان',
        slug: 'time-management',
        desc: 'پروژه‌ای برای بهبود مدیریت زمان و برنامه‌ریزی کارها.',
        image: '/No_Photo.png',
        reason: 'برای افزایش بهره‌وری و کاهش استرس.',
        problemStatement: 'کاربران به سختی می‌توانند وظایف روزانه خود را به‌درستی برنامه‌ریزی کنند.',
        problemStatementImage: '/No_Photo.png',
    },
    {
        id: 2,
        name: 'پیگیری تناسب اندام',
        slug: 'fitness-tracker',
        desc: 'پروژه‌ای برای پیگیری وضعیت تناسب اندام و فعالیت‌های ورزشی کاربران.',
        image: '/No_Photo.png',
        reason: 'برای کمک به کاربران در رسیدن به اهداف سلامتی و تناسب اندام.',
        problemStatement: 'کاربران به ابزارهایی نیاز دارند تا فعالیت‌های ورزشی خود را پیگیری کنند.',
        problemStatementImage: '/No_Photo.png',
    },
];
