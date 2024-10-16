import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import { Menu09Icon } from "./icon";
export default function Header() {
  return (
    <>
      {/* Your component content here */}

      <header className="fixed left-0 right-0 top-0 z-50 h-max p-4 md:hidden">
        <div className="rounded-full border border-[#0F373C] bg-card/70 p-4 backdrop-blur-md">
          <div className="flex items-center justify-between">
            <Image
              src="/logo-mini.svg"
              alt="Logo"
              width={100}
              height={100}
              className="h-6 w-auto"
            />
            <button>
              <Menu09Icon className="size-8" />
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
