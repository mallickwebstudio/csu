import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Circle } from "lucide-react";
import HeaderDesign from "../other/header-design";

const linkList = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#" },
      { label: "Pricing", href: "#" },
      { label: "Integrations", href: "#" },
      { label: "API", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Contact", href: "#" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Docs", href: "#" },
      { label: "Community", href: "#" },
      { label: "Help Center", href: "#" },
      { label: "Status", href: "#" },
    ],
  },
  {
    title: "Others",
    links: [
      { label: "Link One", href: "#" },
      { label: "Link Two", href: "#" },
      { label: "Link Three", href: "#" },
      { label: "Link Four", href: "#" },
    ],
  },
];

const socialLinks = [
  { icon: Circle, label: "Twitter", href: "#" },
  { icon: Circle, label: "Facebook", href: "#" },
  { icon: Circle, label: "Instagram", href: "#" },
  { icon: Circle, label: "LinkedIn", href: "#" },
];

const profileLinks = [
  { imageSrc: "/logo-bg.png", imageAlt: "Person Name", href: "#" },
  { imageSrc: "/logo-bg.png", imageAlt: "Person Name", href: "#" },
  { imageSrc: "/logo-bg.png", imageAlt: "Person Name", href: "#" },
  { imageSrc: "/logo-bg.png", imageAlt: "Person Name", href: "#" },
  { imageSrc: "/logo-bg.png", imageAlt: "Person Name", href: "#" },
];

export default function Footer() {
  return (
    <footer
      className="relative bg-background"
      aria-labelledby="footer-heading"
      role="region"
    >
      <h2 id="footer-heading" className="sr-only">Site Footer</h2>
      <div className="mx-auto container px-6 py-12 md:p-16">
        {/* Links */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-start">
            {linkList.map((item) => (
              <React.Fragment key={item.title + "FooterTwo"}>
                <nav aria-labelledby={item.title.toLowerCase() + "-heading"}>
                  <h4 id={item.title.toLowerCase() + "-heading"} className="relative font-semibold mb-4 w-fit">
                    <HeaderDesign />
                    {item.title}
                  </h4>
                  <ul className="space-y-1">
                    {item.links.map((link) => (
                      <li key={link.label + "FooterTwo"}>
                        <Link
                          href={link.href}
                          className="text-sm hover:underline underline-offset-4"
                          title={link.label}
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              </React.Fragment>
            ))}
            <nav aria-labelledby="social-heading">
              <h4 id="social-heading" className="font-semibold mb-4">Follow Us</h4>
              <ul className="space-y-3">
                {socialLinks.map(({ icon: Icon, label, href }) => (
                  <li key={label + "FooterTwo"}>
                    <Link
                      href={href}
                      className="text-sm flex items-center hover:underline underline-offset-4"
                      title={`Follow us on ${label}`}
                    >
                      <Icon className="size-5 mr-2" aria-hidden="true" />
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="pt-6 md:pt-12 flex flex-col md:flex-row md:justify-between md:items-center gap-4 text-sm">
            <Link
              className="block h-20"
              href="#"
              aria-label="Visit homepage"
            >
              <Image
                className="h-full w-fit select-none pointer-events-none"
                src="/logo.png"
                width={32}
                height={32}
                alt="Your Company Logo"
                unoptimized
              />
              <span className="sr-only">Company</span>
            </Link>

            <div className="flex items-center">
              {profileLinks.map(({ imageSrc, imageAlt, href }, index) => (
                <Link
                  className="-mr-4 last:mr-0 size-12  rounded-full overflow-hidden border-2 border-background transition-all"
                  href={href}
                  key={imageAlt + index + "FooterSix"}
                >
                  <Image
                    className="size-full select-none pointer-events-none"
                    src={imageSrc}
                    width={48}
                    height={48}
                    alt={imageAlt}
                    unoptimized
                  />
                  <span className="sr-only">{imageAlt}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t mt-8 pt-8 md:pt-12 flex gap-4 flex-col md:flex-row-reverse md:justify-between md:items-center text-sm">
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <Link className="underline underline-offset-2 hover:underline-offset-4" href="#" title="Privacy Policy">Privacy Policy</Link>
              <Link className="underline underline-offset-2 hover:underline-offset-4" href="#" title="Terms of Service">Terms of Service</Link>
              <Link className="underline underline-offset-2 hover:underline-offset-4" href="#" title="Cookies Settings">Cookies Settings</Link>
            </div>
            <p>
              © {new Date().getFullYear()} Your Company, Inc. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
