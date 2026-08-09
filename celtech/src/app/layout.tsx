import type { Metadata } from "next";
import Script from "next/script";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s · ${site.shortName}`,
  },
  description: site.description,
  keywords: [
    "technology talent",
    "software engineering consulting",
    "cloud specialists",
    "DevOps",
    "staff augmentation",
    "digital transformation",
    "CELTech",
  ],
  openGraph: {
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    url: site.url,
    siteName: site.name,
    images: [{ url: "/images/team_group.png", width: 1200, height: 675 }],
    type: "website",
  },
  icons: { icon: "/favicon.ico" },
};

// Runs before paint to set the theme class and avoid a flash of the wrong theme.
const themeInit = `(function(){try{var k='celtech-theme';var t=localStorage.getItem(k)||'auto';var h=new Date().getHours();var night=h>=19||h<7;var dark=t==='dark'||(t==='auto'&&night);document.documentElement.classList.toggle('dark',dark);document.documentElement.dataset.theme=t;}catch(e){}})();`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${sora.variable} h-full antialiased`}
    >
      <head>
        <Script id="theme-init" strategy="beforeInteractive">
          {themeInit}
        </Script>
      </head>
      <body className="min-h-full flex flex-col bg-surface text-body">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
