import { navItems } from "@/data";
import { FloatingNav } from "@/components/ui/floating-navbar";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="flex overflow-x-hidden w-full h-[200vh] flex-col items-center justify-start">
      <FloatingNav navItems={navItems}/>
      <Hero/>
    </div>
  );
}
