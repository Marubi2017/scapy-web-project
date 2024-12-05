"use client"

import React from "react";
import Image from "next/image";
import ScapyForm from "../../components/scapy-form";

const Demo = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-8 p-8">
      <main className="flex flex-col items-center w-full mt-4 gap-2 max-w-4xl">
        <span className="text-xl font-semibold">Generate web packets w/ Scapy</span>
        <ScapyForm />
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

export default Demo;
