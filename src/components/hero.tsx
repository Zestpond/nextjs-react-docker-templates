import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        aria-hidden
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[120px] pointer-events-none"
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm font-medium text-primary uppercase tracking-widest mb-4">
          Hello World
        </p>
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6">
          Eternal <span className="text-primary">AI</span>
        </h1>
        <p className="max-w-xl mx-auto text-lg text-muted-foreground mb-10">
          The starting point of something eternal. Built on Next.js 15, React 19,
          and Tailwind CSS — ready for your ideas.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring h-11 px-6 bg-primary text-primary-foreground hover:bg-primary/90 cursor-pointer">
            Start Building
            <ArrowRight className="h-4 w-4" />
          </button>
          <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring h-11 px-6 border border-border text-foreground hover:bg-muted cursor-pointer">
            View Source
          </button>
        </div>
      </div>
    </section>
  );
}
