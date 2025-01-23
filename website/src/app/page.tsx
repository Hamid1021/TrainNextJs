import Image from "next/image";

export default function Home() {
  return (
    <>
      <section id="last-blogs" class="mb-8">
        <h2 class="text-2xl 2xs:text-sm font-semibold mb-4 dark:text-white sm:text-[24px] sm:font-bold">اخرین نوشته ها</h2>
        <div class="grid grid-cols-1 gap-y-4">
          <div class="blog-item-full">
            <a href="#">خاطره فارغ التحصیل شدنم از دانشگاه.</a>
          </div>
          <div class="blog-item-full">
            <a href="#">خاطره اولین ورود من به دانشگاه.</a>
          </div>
          <div class="blog-item-full">
            <a href="#">خاظره اولین باری که دوره خریدم.</a>
          </div>
          <div class="blog-item-full">
            <a href="#">رفتم برای اولین بار انفورماتیک دانشگاه و فهمیدم چه جای خفنیه!</a>
          </div>
          <div class="blog-item-empty">
            <a href="#"></a>
          </div>
        </div>
      </section>

      <section id="last-animes" class="mb-8">
        <h2 class="text-2xl font-semibold mb-4 dark:text-white">اخرین انیمه ها</h2>
        <div class="grid grid-cols-1 gap-y-3">
          <div class="anime-item-full dark:bg-gradient-to-br dark:from-[rgb(46,13,114)] dark:from-35% dark:to-gray-500">
            <div class="anime-img-full dark:text-white">
              <img src="/src/img/img2.jpg" alt="" />
            </div>
            <div class="anime-title-full dark:text-white">
              <h3>Genshin Impact</h3>
            </div>
            <div class="anime-desc-full dark:text-white">
              <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز</p>
            </div>
          </div>
          <div class="anime-item-empty">
            <div class="anime-img-empty"></div>
            <div class="anime-title-empty"></div>
            <div class="anime-desc-empty"></div>
          </div>
        </div>
      </section>
    </>
  );
}
