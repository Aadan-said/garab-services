"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
    const [mounted, setMounted] = useState(false);
    const [theme, setTheme] = useState<"light" | "dark">("light");

    useEffect(() => {
        setMounted(true);
        const savedTheme = localStorage.getItem("theme_v2") || localStorage.getItem("theme");
        const isDark = savedTheme === "dark" || 
            (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches);
        const initialTheme = isDark ? "dark" : "light";
        setTheme(initialTheme);
        if (initialTheme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        localStorage.setItem("theme_v2", newTheme);
        localStorage.setItem("theme", newTheme);

        if (newTheme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    };

    if (!mounted) {
        return (
            <div className="w-9 h-9 rounded-xl border border-border/40 bg-muted/20" />
        );
    }

    return (
        <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className="relative flex items-center justify-center w-9 h-9 rounded-xl border border-border/60 bg-background/80 hover:bg-muted text-foreground transition-all duration-200 shadow-xs active:scale-95 cursor-pointer"
        >
            {theme === "light" ? (
                <Moon className="h-4 w-4 text-slate-700 dark:text-slate-300 transition-transform hover:-rotate-12" />
            ) : (
                <Sun className="h-4 w-4 text-amber-400 transition-transform hover:rotate-45" />
            )}
            <span className="sr-only">Toggle theme</span>
        </button>
    );
}
