"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import "node_modules/react-modal-video/css/modal-video.css";
import "../styles/index.css";
import type { Metadata } from "next";

export const meta: Metadata = {
  title: "Europa Fusion | Discover Your Path to Excellence with Europa Fusion",
  description: "At Europa Fusion, we understand that your pursuit of higher education is not just a journey; it&lsquo;s a life-changing experience that shapes your future. we are your trusted study abroad consultancy, specializing in European countries as well as leading destinations such as the Canada, USA, Australia, and New Zealand.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body className="dark:bg-black">
        <Providers>
          <Header />
          {children}
          <Footer />
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}

import { Providers } from "./providers";
