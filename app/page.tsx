import { navItems } from "@/data";
import { FloatingNav } from "@/components/ui/floating-navbar";
import Hero from "@/components/Hero";
// import Navbar from "@/components/NavBar";

export default function Home() {
  return (
    <div className="flex h-[200vh] w-full flex-col items-center justify-start overflow-x-hidden">
      <FloatingNav navItems={navItems} />
      {/* <Navbar/> */}
      <Hero />
    </div>
  );
}
