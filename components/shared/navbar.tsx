"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { ThemeToggle } from "./theme-toggle";

export function Navbar() {
    const pathname = usePathname();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navLinks = [
        { href: "/services", label: "Adeegyada" },
        { href: "/jobs", label: "Shaqooyinka" },
        { href: "/how-it-works", label: "Sidee U shaqaynaa" },
        { href: "/providers", label: "Xirfadlayaasha" },
    ];

    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
            <div className="w-full max-w-7xl mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
                {/* Logo */}
                <Link href="/" className="flex items-center space-x-2 group shrink-0">
                    <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-white dark:bg-card border border-primary/20 shadow-md group-hover:scale-110 transition-transform overflow-hidden p-1">
                        <img src="/logo.png" alt="Farsamo Yaqan" className="h-full w-full object-contain" />
                    </div>
                    <span className="text-xl font-bold bg-gradient-to-r from-primary via-blue-600 to-primary bg-clip-text text-transparent">
                        Farsamo Yaqan
                    </span>
                </Link>

                {/* Desktop Navigation (Visible on lg and above) */}
                <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={cn(
                                    "px-3.5 py-2 text-sm font-medium rounded-md transition-all whitespace-nowrap",
                                    isActive
                                        ? "bg-primary/10 text-primary"
                                        : "text-muted-foreground hover:text-primary hover:bg-muted"
                                )}
                            >
                                {link.label}
                            </Link>
                        );
                    })}
                </nav>

                {/* Desktop Auth Buttons (Visible on lg and above) */}
                <div className="hidden lg:flex items-center space-x-3 shrink-0">
                    <ThemeToggle />
                    <Link href="/login">
                        <Button variant="ghost" size="sm" className="font-medium whitespace-nowrap">
                            Geli Akoon hore
                        </Button>
                    </Link>
                    <Link href="/register">
                        <Button
                            size="sm"
                            className="bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 font-medium shadow-md hover:shadow-lg transition-all group whitespace-nowrap"
                        >
                            Abuur Akoon cusub
                            <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                </div>

                {/* Mobile / Tablet Controls (Visible below lg) */}
                <div className="flex items-center space-x-2 lg:hidden">
                    <ThemeToggle />
                    <button
                        type="button"
                        className="relative flex items-center justify-center w-9 h-9 rounded-xl border border-border/60 bg-background/80 hover:bg-muted text-foreground transition-all duration-200 shadow-xs active:scale-95 cursor-pointer"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle navigation menu"
                    >
                        {mobileMenuOpen ? (
                            <X className="h-4 w-4" />
                        ) : (
                            <Menu className="h-4 w-4" />
                        )}
                        <span className="sr-only">Toggle menu</span>
                    </button>
                </div>
            </div>

            {/* Mobile / Tablet Dropdown Menu */}
            {mobileMenuOpen && (
                <div className="lg:hidden border-t border-border/40 bg-background/95 backdrop-blur shadow-lg animate-in slide-in-from-top-2 duration-200">
                    <nav className="w-full max-w-7xl mx-auto px-4 py-4 sm:px-6 space-y-2">
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className={cn(
                                        "block px-4 py-3 text-sm font-medium rounded-lg transition-all",
                                        isActive
                                            ? "bg-primary/10 text-primary font-semibold"
                                            : "text-muted-foreground hover:text-primary hover:bg-muted"
                                    )}
                                >
                                    {link.label}
                                </Link>
                            );
                        })}

                        {/* Mobile Auth Buttons */}
                        <div className="pt-4 space-y-3 border-t border-border/40">
                            <Link href="/login" className="block" onClick={() => setMobileMenuOpen(false)}>
                                <Button variant="outline" className="w-full justify-center h-11">
                                    Geli Akoon hore
                                </Button>
                            </Link>
                            <Link href="/register" className="block" onClick={() => setMobileMenuOpen(false)}>
                                <Button className="w-full justify-center h-11 bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 shadow-md group font-semibold">
                                    Abuur Akoon cusub
                                    <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </Link>
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
}

