import { Users } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Accordion } from "@/components/ui/accordion";
import { FaqItem } from "@/components/faq-item";

export function Faq() {
  return (
    <section className="py-20">
      <div className="container flex flex-col items-start gap-10 md:flex-row">
        <div className="flex flex-col gap-3 items-start">
          <div className="flex flex-col gap-2">
            <span className="font-bold text-primary">Faq</span>
            <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-5xl">
              Frequently Asked Questions
            </h2>
          </div>
          <p className="text-muted-foreground text-lg flex-1 max-w-2xl mt-2 hidden">
            From freelancers to agencies, Divhunt is the best website builder for{" "}
          </p>
          <Button className="mt-4 gap-2 font-semibold">
            <Users size={16} />
            Join Community
          </Button>
        </div>
        <Accordion type="single" collapsible className="w-full max-w-3xl flex flex-col gap-4">
          <FaqItem
            answer="Our platform supports a wide range of data types, including user behavior, sales metrics, website traffic, and custom data from integrated sources."
            question="What types of data can I analyze with your platform?"
          />
          <FaqItem
            answer="We prioritize your data’s security by using industry-standard encryption and regular audits to ensure your information is always protected."
            question="How secure is my data with your analytics platform?"
          />
          <FaqItem
            answer="Yes! Our platform allows you to fully customize your reports, providing the flexibility to focus on the metrics that matter most to your business."
            question="Can I customize the reports generated by your platform?"
          />
          <FaqItem
            answer="No technical skills are required! Our platform is designed to be user-friendly with an intuitive interface, making it accessible for everyone, regardless of technical background."
            question="Do I need any technical skills to use the platform?"
          />
          <FaqItem
            answer="We offer easy-to-use integrations with various platforms such as Google Analytics, CRM tools, and more, to ensure smooth data syncing with your existing setup."
            question="How do I integrate your platform with my existing tools?"
          />
          <FaqItem
            answer="Absolutely! Our platform provides real-time analytics, so you can monitor your data as it happens and make immediate, data-driven decisions."
            question="Can I track real-time data and analytics?"
          />
        </Accordion>
      </div>
    </section>
  );
}
