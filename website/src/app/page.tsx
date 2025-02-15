import LatestAnimes from "@/components/Home/LatestAnimes";
import LatestBlogs from "@/components/Home/LatestBlogs";
import LatestProjects from "@/components/Home/LatestProjects";
import { Metadata } from "next/types";
import { getBlogs } from "@/services/blogs";
import { getProjects } from "@/services/projects";
import { Blog as BlogType } from "@/components/Blog/types";
import { Project } from "@/components/Project/types";

export const metadata: Metadata = {
  title: "نوشته ها | حمیدرضا رضایی",
  description:
    "سلام به همه!" +
    " من حمیدرضا رضایی هستم. 🚀✨ برنامه نویس حرفه‌ای پایتون، و عاشق ساختن سایت‌های شگفت‌انگیز. تخصص من در فریم‌ورک‌های Django ، 🌐 ASP.NET 🐍 و Next.js🌟 است. همیشه در حال کاوش در دنیای کد هستم و تلاش می‌کنم بهترین وب‌سایت‌ها را بسازم! 💪👨‍💻" +
    "به دنیای دیجیتال خوش آمدید! 🌍📲",
};

export default async function Home() {
  try {
    // دریافت آخرین ۵ مقاله
    const _blogs = await getBlogs({ page: 1, limit: 5 });
    const blogs: BlogType[] = _blogs.blogs || [];

    // دریافت آخرین ۵ پروژه
    const _projects = await getProjects(5);
    const projects: Project[] = _projects || [];

    return (
      <>
        <LatestBlogs blogs={blogs} />
        <LatestProjects projects={projects} />
        <LatestAnimes />
      </>
    );
  } catch (error) {
    console.error("Failed to fetch data:", error);
    return (
      <>
        <div>خطایی در دریافت داده‌ها رخ داده است.</div>
      </>
    );
  }
}
