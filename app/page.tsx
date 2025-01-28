import { navItems } from "@/data";
import { FloatingNav } from "@/components/ui/floating-navbar";

export default function Home() {
  return (
    <div className="flex w-full h-[200vh] flex-col items-center justify-center">
      <FloatingNav navItems={navItems}/>
    </div>
  );
}
