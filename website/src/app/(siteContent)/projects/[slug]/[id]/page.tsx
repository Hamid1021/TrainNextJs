import { Metadata } from "next";
import { getProject } from "@/services/projects"; // افزودن getProject
import Single_Project from "../../../../../components/Project/single_project";

export const metadata: Metadata = {
    title: "پروژه ها | حمیدرضا رضایی",
    description: "سلام به همه!" +
        " من حمیدرضا رضایی هستم. 🚀✨ برنامه نویس حرفه‌ای پایتون، و عاشق ساختن سایت‌های شگفت‌انگیز. تخصص من در فریم‌ورک‌های Django ، 🌐 ASP.NET 🐍 و Next.js🌟 است. همیشه در حال کاوش در دنیای کد هستم و تلاش می‌کنم بهترین وب‌سایت‌ها را بسازم! 💪👨‍💻" +
        "به دنیای دیجیتال خوش آمدید! 🌍📲",
};

interface PageParams {
    params: Promise<{ id: string; slug: string }>;
}


export default async function Page({ params }: PageParams) {
    const { id, slug } = await params;

    const project = await getProject(Number(id));

    if (project && project.slug === slug) {
        return (
            <Single_Project project={project} />
        );
    } else {
        return (
            <div>پروژه‌ای با مشخصات وارد شده یافت نشد.</div>
        );
    }
}
