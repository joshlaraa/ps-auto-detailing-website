import { Handshake, MapPin, Sparkle } from "@phosphor-icons/react/ssr";
import { Container } from "@/components/ui/container";

const features = [
  {
    icon: MapPin,
    title: "Mobile Service, Anywhere",
    body: "We come to your home, office, or wherever your car is parked. No waiting around or driving to a shop. Just book a time and we handle the rest.",
  },
  {
    icon: Handshake,
    title: "Customer Service That Shows",
    body: "We keep things simple and respectful. We show up on time, communicate clearly, and make sure you're happy before we leave. If something's off, we fix it.",
  },
  {
    icon: Sparkle,
    title: "Great Results, Every Time",
    body: "We use products that are safe on your paint and interior, not cheap stuff that wears off fast. The goal is a clean that looks good and holds up after we're gone.",
  },
] as const;

export function PillarsSection() {
  return (
    <section className="bg-background py-24 md:py-32">
      <Container>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {features.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="group rounded-xl border border-slate-200/80 bg-white p-10 shadow-sm transition-all hover:shadow-md"
            >
              <Icon
                className="mb-6 size-10 text-brand transition-transform group-hover:scale-110 md:size-11"
                weight="duotone"
                aria-hidden
              />
              <h3 className="mb-4 font-clash text-base font-bold tracking-tight text-foreground uppercase whitespace-nowrap">
                {title}
              </h3>
              <p className="text-sm font-medium text-slate-600 leading-relaxed">
                {body}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
