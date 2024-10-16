import Heading from "./ui/heading";
import Image from "next/image";
export default function Tokenomics() {
  return (
    <>
      {/* Your component content here */}
      <section className="mx-auto my-16 max-w-6xl">
        <Heading className="mb-20 text-center">Tokenomics</Heading>

        <div className="flex items-center gap-10">
          <Image
            src="/Donut.svg"
            alt="Logo"
            width={600}
            height={600}
            className="h-auto w-2/4"
          />
          <div className="w-full">
            <div className="mb-6 w-full rounded-2xl bg-card/70 bg-opacity-80 px-10 py-4 shadow-xl backdrop-blur-lg">
              <div className="space-y-4">
                <InfoRow label="Name" value="EthAi" />
                <InfoRow label="Token Name" value="$EthAi" />
                <InfoRow label="Token standard" value="ERC20" />
                <InfoRow label="Blockchain" value="Ethereum" />
                <InfoRow label="Total Supply" value="100 Million" />
                <InfoRow label="Tax" value="5%/5%" />
              </div>
            </div>
            <div className="w-full rounded-2xl bg-card/70 bg-opacity-80 px-10 py-4 shadow-xl backdrop-blur-lg">
              <div className="space-y-4">
                <InfoRow label="Team" value="35%" />
                <InfoRow label="Marketing" value="5%" />
                <InfoRow label="Liquidity Pool" value="90%" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid grid-cols-[1fr,auto,1fr] items-center gap-2 text-lg">
      <span>{label}</span>
      <span>:</span>
      <span>{value}</span>
    </div>
  );
}
