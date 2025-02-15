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
      <body className={`${geistSans.variable} ${geistMono.variable} flex justify-between antialiased dark:text-white text-gray-900`}>
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
                <Link href="/" className="block w-full text-center">انیمه های من</Link>
              </li>
            </ul>
          </nav>
          <main className="my-8">
            {children}
            <section id="about-me" className="mb-8 grid md:grid-cols-6 gap-4 border-2 rounded-md p-4">
              <div className="md:col-span-2 flex md:items-start justify-center items-center">
                <Image src="/No_Photo.png" alt="حمیدرضا رضایی" width={300} height={300} className="h-auto rounded-lg shadow-lg w-full max-w-[300px]" />
              </div>
              <div className="md:col-span-4 flex flex-col">
                <h1 className="font-bold text-2xl my-4">درباره من</h1>
                <p className="text-justify leading-relaxed sm:text-[25px] xs-text-[20px]">
                  من حمیدرضا رضایی هستم، فارغ‌التحصیل رشته مهندسی کامپیوتر. از کلاس اول دبستان عاشق کامپیوتر بودم، هستم و خواهم بود. اما بنا به دلایلی رفتم رشته تجربی و از آناتومی بدن اطلاعات زیادی پیدا کردم. اما عشقم به کامپیوتر کمتر نشد و در دانشگاه رشته کامپیوتر را انتخاب کردم. الان
                  مهندس کامپیوتر هستم. بلافاصله زبان برنامه‌نویسی پایتون را یاد گرفتم و به سراغ وب رفتم چون کدنویسی را خیلی دوست داشتم. در ابتدا فقط کدنویسی بک‌اند را یاد گرفتم و فریم‌ورک جنگو. ولی این من رو متوقف نکرد چون بعد به سراغ کد نویسی فرانت اند رفتم و در اون هم مهارت کسب کردم.
                  همین طور در حوزه‌های دیگه هم سرکی کشیدم و در حال حاضر مشغول به ساخت سایت شخصی خودم با نکس هستم.
                </p>
              </div>
            </section>
          </main>
          <footer className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-50 text-center mb-0 shadow-md mt-8">
            <p className="p-2 md:text-[20px]">
              © کلیه حقوق مادی و معنوی این سایت محفوظ و متعلق به <span className="font-bold"> حمیدرضا رضایی </span> است.
            </p>
          </footer>
          <div className="flex flex-col items-center sm:p-0 mx-3 md:h-0 md:p-0 sm:pt-[10px] xs:pb-[65px] 2xs:py-[32px] 2xs:h-[72px]">
          </div>
          <Settings />
        </div>
        <DarkBtn />
      </body>
    </html>
  );
}

