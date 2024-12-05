"use client"

import React from "react";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark items-center justify-items-center"
          src="/images/scapy_logo.png"
          alt="Scapy.net logo"
          width={450}
          height={150}
          priority
        />
        <ol className="list-inside list-decimal text-medium text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            Easily generate IP, ARP and DNS Networks using {" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              scapy.com
            </code>
            .
          </li>
          <li>Save your packets and see your changes captured through WireShark.</li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <Link
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="/demo"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Demo Here
          </Link>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="https://scapy.readthedocs.io/en/latest/index.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read the Scapy docs
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/Marubi2017"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Built by Michellescript →
        </a>
      </footer>
    </div>
  );
}

export default Home;
