import { PrismaClient } from "@prisma/client";
import Single_Project from "../../../../../../components/Project/single_project";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "پروژه ها | حمیدرضا رضایی",
    description: "سلام به همه!" +
        " من حمیدرضا رضایی هستم. 🚀✨ برنامه نویس حرفه‌ای پایتون، و عاشق ساختن سایت‌های شگفت‌انگیز. تخصص من در فریم‌ورک‌های Django ، 🌐 ASP.NET 🐍 و Next.js🌟 است. همیشه در حال کاوش در دنیای کد هستم و تلاش می‌کنم بهترین وب‌سایت‌ها را بسازم! 💪👨‍💻" +
        "به دنیای دیجیتال خوش آمدید! 🌍📲",
};

const prisma = new PrismaClient();

export default async function Page({ params }: { params: Promise<{ id: string; slug: string }> }) { // Correct type definition here!
    const p = await params; // Await the params Promise
    const id = parseInt(p.id);
    const slug = p.slug;

    const project = await prisma.project.findFirst({
        where: {
            id: id,
            slug: slug
        },
        include: {
            steps: true
        }
    });

    if (project) {
        return (
            <Single_Project project={project} />
        );
    } else {
        return (
            <div>پروژه‌ای با مشخصات وارد شده یافت نشد.</div>
        );
    }
}
