"use client";

import { useEffect } from 'react';

const initTheme = () => {
    if (typeof window !== 'undefined') {
        localStorage.getItem("SiteSettings") || localStorage.setItem("SiteSettings", JSON.stringify({ theme: "light" }));
        const e = JSON.parse(localStorage.getItem("SiteSettings") as string);
        document.querySelector("html")?.classList.toggle("dark", "dark" === e.theme);
        const t = document.getElementById("theme-light"),
            l = document.getElementById("theme-dark");

        if (e.theme === "light") {
            if (t) t.style.display = "none";
            if (l) l.style.display = "block";
        } else {
            if (t) t.style.display = "block";
            if (l) l.style.display = "none";
        }

        t?.addEventListener("click", () => {
            document.querySelector("html")?.classList.remove("dark");
            localStorage.setItem("SiteSettings", JSON.stringify({ theme: "light" }));
            if (t) t.style.display = "none";
            if (l) l.style.display = "block";
        });

        l?.addEventListener("click", () => {
            document.querySelector("html")?.classList.add("dark");
            localStorage.setItem("SiteSettings", JSON.stringify({ theme: "dark" }));
            if (t) t.style.display = "block";
            if (l) l.style.display = "none";
        });
    }
};

const DarkBtn: React.FC = () => {
    useEffect(() => {
        initTheme();
    }, []);

    return (
        <></>
    );
};

export default DarkBtn;
