"use client";

import { useMediaQuery } from "@/hooks/useMediaQuery";
import { Button } from "./ui/button";

export default function Hero() {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  return (
    <>
      <section className="flex h-[calc(100vh-64px)] w-full flex-col items-center justify-center p-4 text-center">
        <h1 className="text-center text-5xl leading-snug md:text-6xl md:font-medium md:leading-snug">
          When Innovation <br />
          Meets{" "}
          <span className="rounded-full bg-[#B0F9FF] px-4 text-[#0B2A2D]">
            Investment
          </span>
        </h1>
        <p className="my-6 text-lg text-[#B0FAFFB2] md:text-xl">
          Empowering Trading Through Advanced Technology{" "}
        </p>
        <Button variant={isDesktop ? "outline" : "default"}>Open dApp</Button>
      </section>
    </>
  );
}
