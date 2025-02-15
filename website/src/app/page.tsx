import LatestAnimes from "@/components/Home/LatestAnimes";
import LatestBlogs from "@/components/Home/LatestBlogs";
import LatestProjects from "@/components/Home/LatestProjects";
import { Metadata } from "next/types";
import { getBlogs } from "@/services/blogs";
import { getProjects } from "@/services/projects";
import { Blog as BlogType } from "@/components/Blog/types";
import { Project } from "@/components/Project/types";
import { mockBlogs, mockProjects } from "@/mockData";

export const metadata: Metadata = {
  title: "نوشته ها | حمیدرضا رضایی",
  description:
    "سلام به همه!" +
    " من حمیدرضا رضایی هستم. 🚀✨ برنامه نویس حرفه‌ای پایتون، و عاشق ساختن سایت‌های شگفت‌انگیز. تخصص من در فریم‌ورک‌های Django ، 🌐 ASP.NET 🐍 و Next.js🌟 است. همیشه در حال کاوش در دنیای کد هستم و تلاش می‌کنم بهترین وب‌سایت‌ها را بسازم! 💪👨‍💻" +
    "به دنیای دیجیتال خوش آمدید! 🌍📲",
};

export default async function Home() {
  try {
    const isProduction = process.env.NODE_ENV === 'production';

    let blogs: BlogType[] = [];
    let projects: Project[] = [];

    if (isProduction) {
      const _blogs = await getBlogs({ page: 1, limit: 5 });
      blogs = _blogs.blogs || [];

      const _projects = await getProjects(5);
      projects = _projects || [];
    } else {
      blogs = mockBlogs as BlogType[];
      projects = mockProjects as Project[];
    }

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
