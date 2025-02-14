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
            const themeLightButtons = Array.from(document.getElementsByClassName("theme-light")) as HTMLElement[];
            const themeDarkButtons = Array.from(document.getElementsByClassName("theme-dark")) as HTMLElement[];
            const themeTitle = document.getElementById("theme_title");

            if (e.theme === "light") {
                themeLightButtons.forEach(btn => btn.style.display = "none");
                themeDarkButtons.forEach(btn => btn.style.display = "block");
                if (themeTitle) themeTitle.innerText = "روشن";
            } else {
                themeLightButtons.forEach(btn => btn.style.display = "block");
                themeDarkButtons.forEach(btn => btn.style.display = "none");
                if (themeTitle) themeTitle.innerText = "تاریک";
            }

            themeLightButtons.forEach(btn => {
                btn.addEventListener("click", () => {
                    if (htmlElement) {
                        htmlElement.classList.remove("dark");
                    }
                    localStorage.setItem("SiteSettings", JSON.stringify({ theme: "light" }));
                    themeLightButtons.forEach(btn => btn.style.display = "none");
                    themeDarkButtons.forEach(btn => btn.style.display = "block");
                    if (themeTitle) themeTitle.innerText = "روشن";
                });
            });

            themeDarkButtons.forEach(btn => {
                btn.addEventListener("click", () => {
                    if (htmlElement) {
                        htmlElement.classList.add("dark");
                    }
                    localStorage.setItem("SiteSettings", JSON.stringify({ theme: "dark" }));
                    themeLightButtons.forEach(btn => btn.style.display = "block");
                    themeDarkButtons.forEach(btn => btn.style.display = "none");
                    if (themeTitle) themeTitle.innerText = "تاریک";
                });
            });
        }
    }, []);

    return (
        <></>
    );
};

export default DarkBtn;
