import React from "react";
import Image from "next/image";

const LatestAnimes = () => {
  return (
    <section id="last-animes" className="mb-8">
      <h2 className="text-2xl font-semibold mb-4 dark:text-white">اخرین انیمه ها</h2>
      <div className="grid grid-cols-1 gap-y-3">
        <div className="anime-item-full dark:bg-gradient-to-br dark:from-[rgb(46,13,114)] dark:from-35% dark:to-gray-500">
          <div className="anime-img-full dark:text-white">
            <Image src="/No_Photo.png" alt="Genshin Impact" width={500} height={500} />
          </div>
          <div className="anime-title-full dark:text-white">
            <h3>Genshin Impact</h3>
          </div>
          <div className="anime-desc-full dark:text-white">
            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestAnimes;
