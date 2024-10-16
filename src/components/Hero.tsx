import { Button } from "./ui/button";

export default function Hero() {
  return (
    <>

      <section className="flex h-[calc(100vh-64px)] w-full flex-col items-center justify-center">
        <h1 className="text-center text-6xl font-medium leading-snug">
          When Innovation <br />
          Meets{" "}
          <span className="rounded-full bg-[#B0F9FF] px-4 text-[#0B2A2D]">
            Investment
          </span>
        </h1>
        <p className="my-6 text-xl text-[#B0FAFFB2]">
          Empowering Trading Through Advanced Technology{" "}
        </p>
        <Button variant={"outline"}>Open dApp</Button>
      </section>
    </>
  );
}
