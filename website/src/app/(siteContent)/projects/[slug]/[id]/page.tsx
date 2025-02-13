import projects from "@/app/data"
import Single_Project from "../../../../../../components/Project/single_project"
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "پروژه ها | حمیدرضا رضایی",
    description: "سلام به همه!" +
        " من حمیدرضا رضایی هستم. 🚀✨ برنامه نویس حرفه‌ای پایتون، و عاشق ساختن سایت‌های شگفت‌انگیز. تخصص من در فریم‌ورک‌های Django ، 🌐 ASP.NET 🐍 و Next.js🌟 است. همیشه در حال کاوش در دنیای کد هستم و تلاش می‌کنم بهترین وب‌سایت‌ها را بسازم! 💪👨‍💻" +
        "به دنیای دیجیتال خوش آمدید! 🌍📲",
};

export default async function Page({ params, }: { params: Promise<{ id: number, slug: string }> }) {

    const id = (await params).id
    const slug = (await params).slug
    const project = projects().findLast(o => o.id == id && o.slug == slug)
    console.log(slug);
    if (project) {
        return (
            <Single_Project Project={project} />
        )
    }
}