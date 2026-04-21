"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { buttonVariants } from "@/components/ui/button";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger
} from "@/components/ui/navigation-menu";

const navItems = [
    { label: "Home", href: "#" },
    { label: "About Us", href: "#" },
    { label: "Services", href: "#" },
    { label: "Portfolio", href: "#" },
    {
        label: "More",
        subItems: [
            { label: "Pricing", href: "#" },
            { label: "Features", href: "#" },
            { label: "Testimonials", href: "#" },
        ],
    },
];

export default function Navbar({ className }: { className?: string }) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

    return (
        <header className={cn("w-full border-b bg-background text-foreground", className, isMobileMenuOpen && "bg-background lg:bg-transparent")}>
            <div className="mx-auto container p-4 md:px-16 flex items-center justify-between">
                {/* Logo */}
                <Link
                    href="#"
                    className="-my-2 h-16 w-fit flex gap-2 justify-self-start"
                    aria-label="Go to homepage"
                    title="Homepage"
                >
                    <Image
                        className="h-full w-fit object-contain select-none pointer-events-none"
                        width={32}
                        height={32}
                        src="/logo.png"
                        alt="Site Logo"
                        unoptimized
                    />
                    <span className="sr-only">Site Name</span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex gap-2" role="navigation" aria-label="Primary Navigation">
                    <NavbarNavigationLinks className="hidden lg:flex justify-self-center gap-2" />

                    {/* Desktop Actions */}
                    <NavbarCtaAction className="hidden lg:flex items-center gap-2 justify-self-end" />
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    onClick={toggleMobileMenu}
                    className="lg:hidden cursor-pointer justify-self-end"
                    aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                    aria-expanded={isMobileMenuOpen}
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                    <span className="sr-only">Toggle Menu</span>
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <>
                    <nav className="lg:hidden p-4 border-t space-y-2 bg-background" role="navigation" aria-label="Mobile Navigation">
                        <NavbarNavigationLinks />

                        {/* Mobile Actions */}
                        <NavbarCtaAction className="flex flex-col gap-2" />
                    </nav>
                </>
            )}
        </header>
    );
}

function NavbarNavigationLinks({ className }: { className?: string }) {
    const isMobile = useIsMobile()
    return (
        <NavigationMenu className={className} role="navigation" aria-label="Primary Navigation" viewport={isMobile}>
            <NavigationMenuList className="flex-col items-start lg:flex-row">
                {navItems.map((item) =>
                    item.subItems ? (
                        <NavigationMenuItem key={item.label + "NavbarOne"}>
                            <NavigationMenuTrigger
                                className={cn(buttonVariants({ variant: "ghost" }), "text-white px-4!")}
                                aria-expanded="false"
                                aria-label={`${item.label} navigation options`}
                            >
                                {item.label}
                            </NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="w-fit gap-3" role="menu">
                                    {item.subItems.map((sub) => (
                                        <li key={sub.label + "NavbarOne"} role="none">
                                            <NavigationMenuLink href={sub.href} className="font-semibold hover:bg-secondary h-8 rounded-full!" role="menuitem">
                                                {/* <Link
                                                    className={cn(buttonVariants({ variant: "ghost" }), "w-full items-start")}
                                                    href={sub.href}
                                                > */}
                                                {sub.label}
                                                {/* </Link> */}
                                            </NavigationMenuLink>
                                        </li>
                                    ))}
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                    ) : (
                        <NavigationMenuItem key={item.label + "NavbarOne"}>
                            <NavigationMenuLink asChild>
                                <Link
                                    href={item.href}
                                    className={cn(buttonVariants({ variant: "ghost" }), "font-semibold text-white")}
                                >
                                    {item.label}
                                </Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    )
                )}
            </NavigationMenuList>
        </NavigationMenu>
    )
}

function NavbarCtaAction({ className }: { className?: string }) {
    return (
        <ul className={className}>
            {/* <li>
                <Link
                    className={cn(buttonVariants({ variant: "outline" }), "w-full")}
                    href="#"
                    aria-label="Log in"
                >
                    Log in
                </Link>
            </li> */}
            <li>
                <Link
                    className={cn(buttonVariants(), "w-full")}
                    href="#"
                    aria-label="Request Consultation"
                >
                    Request Consultation
                </Link>
            </li>
        </ul>
    )
}