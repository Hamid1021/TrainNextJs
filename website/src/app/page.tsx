import Single_Project_Loop from "../../components/Project/loop_project";
import Blog from "../../components/Blog/Blog";
import { Blog as BlogType } from "../../components/Blog/types";
import { Project } from "../../components/Project/types";
import Image from "next/image";
import { Metadata } from "next";
import dotenv from "dotenv";

dotenv.config();

const BASE_URL = process.env.BASE_URL;

if (!BASE_URL) {
  throw new Error("BASE_URL is not defined in the environment variables");
}

const BASE_URL_DEV = process.env.BASE_URL_DEV;

if (!BASE_URL_DEV) {
  throw new Error("BASE_URL_DEV is not defined in the environment variables");
}

export const metadata: Metadata = {
  title: "وبسایت شخصی | حمیدرضا رضایی",
  description: "سلام به همه!" +
    " من حمیدرضا رضایی هستم. 🚀✨ برنامه نویس حرفه‌ای پایتون، و عاشق ساختن سایت‌های شگفت‌انگیز. تخصص من در فریم‌ورک‌های Django ، 🌐 ASP.NET 🐍 و Next.js🌟 است. همیشه در حال کاوش در دنیای کد هستم و تلاش می‌کنم بهترین وب‌سایت‌ها را بسازم! 💪👨‍💻" +
    "به دنیای دیجیتال خوش آمدید! 🌍📲",
};

export default async function Home() {
  // دریافت آخرین ۵ مقاله
  const resBlogs = await fetch(BASE_URL + 'api/blogs?limit=5');
  if (!resBlogs.ok) {
    return <div>خطایی در دریافت مقالات رخ داده است.</div>;
  }
  const blogsData = await resBlogs.json();
  const blogs: BlogType[] = blogsData.blogs;

  // دریافت آخرین ۵ پروژه
  const resProjects = await fetch(BASE_URL + 'api/projects?limit=5');
  if (!resProjects.ok) {
    console.error("Failed to fetch projects:", await resProjects.text());
    return <div>خطایی در دریافت پروژه‌ها رخ داده است.</div>;
  }
  const projects: Project[] = await resProjects.json();

  return (
    <>
      <section id="last-blogs" className="mb-8">
        <h2 className="text-2xl 2xs:text-sm font-semibold mb-4 dark:text-white sm:text-[24px] sm:font-bold">اخرین نوشته ها</h2>
        <div className="grid grid-cols-1 gap-y-4">
          {Array.isArray(blogs) && blogs.map((blog) => (
            <Blog key={blog.id} blog={blog} />
          ))}
          {blogs.length === 0 && (
            <div className="blog-item-empty">
              <a href="#">هیچ نوشته‌ای موجود نیست.</a>
            </div>
          )}
        </div>
      </section>
      <section id="last-projects" className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 dark:text-white">لیست پروژه ها</h2>
        <div className="grid grid-cols-1 gap-y-3">
          {Array.isArray(projects) && projects.map((project) => (
            <Single_Project_Loop key={project.id} project={project} />
          ))}
        </div>
      </section>
      <section id="last-animes" className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 dark:text-white">اخرین انیمه ها</h2>
        <div className="grid grid-cols-1 gap-y-3">
          <div className="anime-item-full dark:bg-gradient-to-br dark:from-[rgb(46,13,114)] dark:from-35% dark:to-gray-500">
            <div className="anime-img-full dark:text-white">
              <Image src="/img/img2.jpg" alt="Genshin Impact" width={500} height={500} />
            </div>
            <div className="anime-title-full dark:text-white">
              <h3>Genshin Impact</h3>
            </div>
            <div className="anime-desc-full dark:text-white">
              <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز</p>
            </div>
          </div>
          <div className="anime-item-empty">
            <div className="anime-img-empty"></div>
            <div className="anime-title-empty"></div>
            <div className="anime-desc-empty"></div>
          </div>
        </div>
      </section>
    </>
  );
}
