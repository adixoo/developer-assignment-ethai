import { Button } from "./ui/button";
import Heading from "./ui/heading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  return (
    <>
      {/* Your component content here */}
      <section className="mx-auto grid max-w-5xl grid-cols-1 px-4 py-20 lg:grid-cols-2">
        <Heading className="max-w-96">Frequently Asked Questions</Heading>

        <div>
          <Accordion type="single" collapsible className="space-y-7">
            <AccordionItem value="item-1">
              <AccordionTrigger>What is EthAi?</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                How can EthAi can help me as a Trader?
              </AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Who can use EthAi?</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>
                How does EthAi track smart money flow?
              </AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>
                How does ensure data security?
              </AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <div className="px-4">
        <section className="mx-auto my-28 max-w-5xl rounded-2xl p-14 text-center shadow-[0px_0px_32px_16px_#63F2FF1A_inset]">
          <Heading>
            Explore Our <span className="text-[#62F0FE]">dApp</span>
          </Heading>
          <p className="mb-8 text-balance leading-relaxed text-accent/70">
            EthAi is an AI-powered dApp designed to help traders make smarter,
            data-driven decisions. By tracking smart money flows, monitoring key
            wallets, and providing real-time market insights, EthAi empowers
            users to stay ahead of trends. The platform offers intuitive AI
            features for asset recommendations, market analysis, and
            personalized crypto Q&A, making it the ultimate tool for both novice
            and experienced traders.
          </p>
          <Button>Open dApp</Button>
        </section>
      </div>
    </>
  );
}
