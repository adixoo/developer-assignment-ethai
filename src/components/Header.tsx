import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
export default function Header() {
  return (
    <>
      {/* Your component content here */}

      <header className="fixed left-0 right-0 top-0 z-50 h-max">
        <div className="container relative z-50 mx-auto flex h-full justify-between py-10">
          <Image
            src="/logo.svg"
            alt="Logo"
            width={100}
            height={100}
            className="h-8 w-auto"
          />
          <div className="absolute left-1/2 top-1/2 z-50 inline-flex -translate-x-1/2 -translate-y-1/2 gap-14 rounded-full bg-card/70 px-20 py-5 backdrop-blur">
            <Link href={"/"} className="text-lg text-accent/70">
              Features
            </Link>
            <Link href={"/"} className="text-lg text-accent/70">
              Why Us
            </Link>
            <Link href={"/"} className="text-lg text-accent/70">
              Tokenomics
            </Link>
            <Link href={"/"} className="text-lg text-accent/70">
              Roadmap
            </Link>
          </div>

          <div>
            <Button variant={"ghost"}>Log in</Button>
            <Button>Whitepaper</Button>
          </div>
        </div>
      </header>
    </>
  );
}
