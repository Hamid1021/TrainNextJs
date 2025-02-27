import Chartjs from "../../../components/ChartJs/chartjs"
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "رزومه من | حمیدرضا رضایی",
    description: "سلام به همه!" +
        " من حمیدرضا رضایی هستم. 🚀✨ برنامه نویس حرفه‌ای پایتون، و عاشق ساختن سایت‌های شگفت‌انگیز. تخصص من در فریم‌ورک‌های Django ، 🌐 ASP.NET 🐍 و Next.js🌟 است. همیشه در حال کاوش در دنیای کد هستم و تلاش می‌کنم بهترین وب‌سایت‌ها را بسازم! 💪👨‍💻" +
        "به دنیای دیجیتال خوش آمدید! 🌍📲",
};
export default async function Page() {
    return (
        <>
            <section id="resume" className="mb-8 border p-2 grid grid-cols-2 xs:grid xs:grid-cols-2 2xs:flex 2xs:flex-col 2xs:ga-y-4">
                <div className="flex flex-col items-center justify-center">
                    <div className="w-1/2"><canvas id="Chart1"></canvas></div>
                    <h3 className="font-bold uppercase dark:text-white">html</h3>
                </div>

                <div className="flex flex-col items-center justify-center">
                    <div className="w-1/2"><canvas id="Chart2"></canvas></div>
                    <h3 className="font-bold uppercase dark:text-white">css</h3>
                </div>
            </section>
            <Chartjs />
        </>
    )
}