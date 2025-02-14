import { Geist, Geist_Mono } from "next/font/google";
import "./styles/output.css";
import DarkBtn from "../components/DarkBtn/Dark";
import { ReactNode } from "react";
import Image from "next/image";
import Settings from "../components/Navigator/Home";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased dark:text-white text-gray-900`}>
        <Settings />
        <div className="2xl:mx-[250px] xl:mx-[200px] lg:mx-[130px] mx-[50px]">
          <nav id="nav-items" className="h-12 w-full mt-5 border-y-2 border-y-fuchsia-950 py-2">
            <ul className="grid grid-cols-4 gap-x-2 nav-ul-responsive w-full h-full">
              <li className="nav-li shadow-lg">
                <Link href="/" className="block w-full text-center">صفحه اصلی</Link>
              </li>
              <li className="nav-li shadow-lg">
                <Link href="/blog" className="block w-full text-center">نوشته ها</Link>
              </li>
              <li className="nav-li shadow-lg">
                <Link href="/resume" className="block w-full text-center">روزمه من</Link>
              </li>
              <li className="nav-li shadow-lg">
                <a href="#" className="block w-full text-center">انیمه های من</a>
              </li>
            </ul>
          </nav>
          <main className="my-8">
            {children}
            <section id="about-me" className="mb-8 grid md:grid-cols-6 gap-4 border-2 rounded-md p-4">
              <div className="md:col-span-2 flex justify-center items-center">
                <Image src="/img/img2.jpg" alt="حمیدرضا رضایی" width={300} height={300} className="h-auto rounded-lg shadow-lg w-full max-w-[300px]" />
              </div>
              <div className="md:col-span-4 flex flex-col">
                <h1 className="font-bold text-2xl my-4">درباره من</h1>
                <p className="text-justify leading-relaxed">
                  من حمیدرضا رضایی هستم، فارغ‌التحصیل رشته مهندسی کامپیوتر. از کلاس اول دبستان عاشق کامپیوتر بودم، هستم و خواهم بود. اما بنا به دلایلی رفتم رشته تجربی و از آناتومی بدن اطلاعات زیادی پیدا کردم. اما عشقم به کامپیوتر کمتر نشد و در دانشگاه رشته کامپیوتر را انتخاب کردم. الان
                  مهندس کامپیوتر هستم. بلافاصله زبان برنامه‌نویسی پایتون را یاد گرفتم و به سراغ وب رفتم چون کدنویسی را خیلی دوست داشتم. در ابتدا فقط کدنویسی بک‌اند را یاد گرفتم و فریم‌ورک جنگو. ولی این من رو متوقف نکرد چون بعد به سراغ کد نویسی فرانت اند رفتم و در اون هم مهارت کسب کردم.
                  همین طور در حوزه‌های دیگه هم سرکی کشیدم و در حال حاضر مشغول به ساخت سایت شخصی خودم با نکس هستم.
                </p>
              </div>
            </section>
          </main>
          <footer className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-50 text-center py-4 shadow-md mt-8">
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

