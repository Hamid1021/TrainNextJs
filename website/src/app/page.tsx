import Image from "next/image";
import Single_Project_Loop from "../../components/Project/loop_project";
import projects from "./data";
import Blog from "../../components/Blog/Blog";
import blogs_data from "./(siteContent)/blog/blog_data";
import { blogs } from "../../components/Blog/types";

export default function Home() {
  return (
    <>
      <section id="last-blogs" className="mb-8">
        <h2 className="text-2xl 2xs:text-sm font-semibold mb-4 dark:text-white sm:text-[24px] sm:font-bold">اخرین نوشته ها</h2>
        <div className="grid grid-cols-1 gap-y-4">
          {
            blogs_data().map((blog: blogs) => (
              <Blog key={blog.id} Blog={blog} />
            ))
          }
        </div>
      </section>
      <section id="last-projects" className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 dark:text-white">لیست پروژه ها</h2>
        <div className="grid grid-cols-1 gap-y-3">
          {projects().map((project) => (
            <Single_Project_Loop key={project.id} Project={project} />
          ))}
        </div>
      </section>
      <section id="last-animes" className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 dark:text-white">اخرین انیمه ها</h2>
        <div className="grid grid-cols-1 gap-y-3">
          <div className="anime-item-full dark:bg-gradient-to-br dark:from-[rgb(46,13,114)] dark:from-35% dark:to-gray-500">
            <div className="anime-img-full dark:text-white">
              <img src="/src/img/img2.jpg" alt="" />
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


