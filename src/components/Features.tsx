export default function Features() {
  return (
    <>
      {/* Your component content here */}

      <section className="mx-auto max-w-6xl">
        <div className="grid grid-cols-4 grid-rows-5 gap-4">
          <div className="row-span-5 rounded-2xl border border-[#0F373C] bg-[#08252A] p-6 text-center lg:rounded-tl-[2.5rem]">
            <Heading text="Trade Optimizer" />
            <Para
              text="Find the right moments to buy or sell, with personalized trade
            suggestions designed to help you make the most of every opportunity."
            />
          </div>
          <div className="col-span-2 row-span-2 rounded-2xl border border-[#0F373C] bg-[#08252A] p-6">
            <Heading text="Market insight" />
            <Para
              text="Stay ahead of the market. Get real-time updates on market trends,
            track top traders' movements, and spot signals from key influencers."
            />
          </div>
          <div className="col-start-4 row-span-5 rounded-2xl border border-[#0F373C] bg-[#08252A] p-6 lg:rounded-tr-[2.5rem]">
            <Heading text="Risk Guard" />
            <Para
              text="Get alerts on market swings and potential risks before they impact
            your portfolio. This agent helps you navigate volatility and stay
            prepared for anything."
            />
          </div>
          <div className="col-span-2 col-start-2 row-span-3 row-start-3 flex items-center justify-center rounded-2xl border border-[#0F373C] bg-[#08252A] p-4 text-4xl shadow-[0px_1px_25px_0px_#1DCEF240_inset]">
            Our Features
          </div>
        </div>

        <div className="mt-4 grid grid-cols-5 grid-rows-1 gap-4">
          <div className="col-span-2 rounded-2xl border border-[#0F373C] bg-[#08252A] p-6 lg:rounded-bl-[2.5rem]">
            <Heading text="Portfolio Sync" />
            <Para text="Easily manage your portfolio. You'll always know what you own, how it's performing, and where it's headed." />
          </div>
          <div className="col-span-3 col-start-3 rounded-2xl border border-[#0F373C] bg-[#08252A] p-6 lg:rounded-br-[2.5rem]">
            <Heading text="Opportunity Scout " />
            <Para text="Find exciting new projects, events and tokens that others might be missing. Identifying promising opportunities early, so you never miss out on the next big thing." />
          </div>
        </div>
      </section>
    </>
  );
}

function Heading({ text }: { text: string }) {
  return (
    <>
      <h3 className="text-xl font-medium">{text}</h3>
    </>
  );
}
function Para({ text }: { text: string }) {
  return (
    <>
      <p className="mt-3 text-accent/70">{text}</p>
    </>
  );
}
