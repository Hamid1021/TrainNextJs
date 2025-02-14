"use client";

import { useEffect } from 'react';

const DarkBtn: React.FC = () => {
    useEffect(() => {
        if (typeof window !== 'undefined') {
            // مرحله 1: دریافت مقدار از localStorage
            let siteSettings = localStorage.getItem("SiteSettings");
            if (!siteSettings) {
                // مرحله 2: اگر مقدار خالی بود، آن را تنظیم کنید
                localStorage.setItem("SiteSettings", JSON.stringify({ theme: "light" }));
                siteSettings = localStorage.getItem("SiteSettings");
            }
            const e = JSON.parse(siteSettings as string);

            const htmlElement = document.querySelector("html");
            if (htmlElement) {
                htmlElement.classList.toggle("dark", e.theme === "dark");
            }
            const t = document.getElementById("theme-light");
            const l = document.getElementById("theme-dark");

            if (e.theme === "light") {
                if (t) t.style.display = "none";
                if (l) l.style.display = "block";
            } else {
                if (t) t.style.display = "block";
                if (l) l.style.display = "none";
            }

            t?.addEventListener("click", () => {
                if (htmlElement) {
                    htmlElement.classList.remove("dark");
                }
                localStorage.setItem("SiteSettings", JSON.stringify({ theme: "light" }));
                if (t) t.style.display = "none";
                if (l) l.style.display = "block";
            });

            l?.addEventListener("click", () => {
                if (htmlElement) {
                    htmlElement.classList.add("dark");
                }
                localStorage.setItem("SiteSettings", JSON.stringify({ theme: "dark" }));
                if (t) t.style.display = "block";
                if (l) l.style.display = "none";
            });
        }
    }, []);

    return (
        <></>
    );
};

export default DarkBtn;
