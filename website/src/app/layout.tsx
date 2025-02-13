import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./styles/output.css";
import DarkBtn from "../../components/DarkBtn/Dark";
import { ReactNode } from "react";
import Image from "next/image";
import Settings from "../../components/Navigator/Home";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "پروژه های من | حمیدرضا رضایی",
  description: "بهترین پروژه هایی که بهشون افتخار می کنم",
};

interface LayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="fa" dir="rtl">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>پروژه های من | حمیدرضا رضایی</title>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased text-white-900`}>
        <Settings />
        <div className="2xl:mx-[250px] xl:mx-[200px] lg:mx-[130px] mx-[50px] -z-10">
          <nav id="nav-items" className="h-12 w-full mt-5 border-y-2 border-y-fuchsia-950 py-2">
            <ul className="grid grid-cols-4 md:gap-x-15 nav-ul-responsive w-full h-full">
              <li className="nav-li shadow-lg w-1/2">
                <Link href={"/"} className="block">صفحه اصلی</Link>
              </li>
              <li className="nav-li shadow-lg w-1/2">
                <Link href={"/blog"} className="block">نوشته ها</Link>
              </li>
              <li className="nav-li shadow-lg w-1/2">
                <Link href={"/resume"} className="block">روزمه من</Link>
              </li>
              <li className="nav-li shadow-lg w-1/2">
                <a className="block" href="">انیمه های من</a>
              </li>
            </ul>
          </nav>
          <main className="my-8">
            {children}
            <section id="about-me" className="mb-8 md:grid md:grid-cols-6 gap-4 border-2 rounded-md">
              <div className="md:col-span-2 flex justify-center items-center">
                <Image src={"/img/img2.jpg"} alt={"حمیدرضارضایی"} width={300} height={300} className="h-auto 2xs:mt-2 md:h-[55%] lg:h-[70%] rounded-lg shadow-lg w-[95%] xs:mt-2 lg:mt-0 md:mt-0"></Image>
              </div>
              <div className="md:col-span-4 p-4 flex flex-col 2xs:p-0 2xs:text-[8px] sm:text-[16px] xs:text-[14px]">
                <h1 className="dark:text-white font-bold mx-3 my-4 p-4 md:text-3xl">درباره من</h1>
                <p className="dark:text-white mx-3 p-5 text-justify md:text-lg self-start">
                  من حمیدرضا رضایی هستم، فارغ‌التحصیل رشته مهندسی کامپیوتر. از کلاس اول دبستان عاشق کامپیوتر بودم، هستم و خواهم بود. اما بنا به دلایلی رفتم رشته تجربی و از آناتومی بدن اطلاعات زیادی پیدا کردم. اما عشقم به کامپیوتر کمتر نشد و در دانشگاه رشته کامپیوتر را انتخاب کردم. الان
                  مهندس کامپیوتر هستم. بلافاصله زبان برنامه‌نویسی پایتون را یاد گرفتم و به سراغ وب رفتم چون کدنویسی را خیلی دوست داشتم. در ابتدا فقط کدنویسی بک‌اند را یاد گرفتم و فریم‌ورک جنگو. ولی این من رو متوقف نکرد چون بعد به سراغ کد نویسی فرانت اند رفتم و در اون هم مهارت کسب کردم.
                  همین طور در حوزه های دیگه هم سرکی کشیدم و در حال حاظر مشغول به ساخت سایت شخصی خودم با نکس هستم
                </p>
              </div>
            </section>
          </main>
          <footer className="bg-white dark:bg-[rgb(37,0,36)] dark:text-gray-50 xs:text-[18px] shadow-md py-4 mt-8 2xs:text-[10px] text-center">
            <p>
              تمامی حقوق مادی و معنوی این وبسایت متعلق به
              <span className="font-bold"> حمیدرضا رضایی </span>
              می باشد
            </p>
          </footer>
        </div>
        <DarkBtn />
      </body>
    </html>
  );
}
