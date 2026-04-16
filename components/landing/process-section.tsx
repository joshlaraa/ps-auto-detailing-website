import Image from "next/image";
import { Container } from "@/components/ui/container";
import { landingMedia } from "@/lib/landing/media";

const steps = [
  {
    n: "01",
    title: "CONSULTATION",
    body: "We analyze the molecular state of your vehicle's surfaces using specialized lighting to map imperfections.",
  },
  {
    n: "02",
    title: "COLLECTION",
    body: "White-glove concierge pickup or mobile atelier setup at your private residence.",
  },
  {
    n: "03",
    title: "RESTORATION",
    body: "Execution of chosen protocols using world-class chemicals and precision tooling.",
  },
] as const;

export function ProcessSection() {
  return (
    <section id="technique" className="relative bg-background py-24 md:py-32">
      <Container>
        <h2 className="sr-only">Our detailing process</h2>
        <div className="grid grid-cols-1 items-center gap-24 md:grid-cols-2">
          <div className="space-y-24">
            {steps.map((step) => (
              <div key={step.n} className="group relative">
                <span className="absolute top-0 -left-12 font-clash text-6xl text-brand opacity-10">
                  {step.n}
                </span>
                <h3 className="mb-4 font-clash text-4xl font-bold text-foreground uppercase">
                  {step.title}
                </h3>
                <p className="max-w-md font-medium text-slate-600 leading-relaxed">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
          <div className="h-[min(70vh,600px)] md:sticky md:top-32 md:h-[600px]">
            <div className="relative h-full overflow-hidden bg-slate-200">
              <Image
                src={landingMedia.processWater}
                alt="Water beading on a ceramic coated luxury car"
                fill
                className="object-cover grayscale-[0.2]"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
