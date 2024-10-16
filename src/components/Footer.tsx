import Image from "next/image";
import { Button } from "./ui/button";
export default function Footer() {
  return (
    <>
      {/* Your component content here */}

      <footer className="bg-[#010F14] pb-10 pt-20">
        <div className="container mx-auto flex items-start justify-between">
          <div>
            <Image
              src="/logo.svg"
              alt="Logo"
              width={300}
              height={300}
              className="h-12 w-auto"
            />
          </div>
          <div className="max-w-lg">
            <p className="mb-8 text-4xl font-medium">
              “Designed for traders of today, just like you."
            </p>
            <div className="flex rounded-2xl border border-[#FBFAF266] p-1">
              <input
                className="w-full bg-transparent px-4 text-base outline-none"
                placeholder="What's your work email?"
              />
              <Button variant={"outline"}>Get Started</Button>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
