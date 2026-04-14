import MindPalaceApp from "@/mind_palace/App";
import { Navbar } from "@/components/Navbar";
import { ClassicPortfolio } from "@/components/ClassicPortfolio";
import { ScrollOrb } from "@/components/ScrollOrb";
export default function Home() {
  return (
    <main className="bg-[#050510] min-h-screen text-white font-sans selection:bg-[#d4b483]/30">
      <Navbar />
      <ScrollOrb />
      
      {/* Mind Palace Section */}
      <section id="mind-palace" className="w-full relative">
        <MindPalaceApp />
      </section>

      {/* Classic Registry Section */}
      <ClassicPortfolio />
    </main>
  );
}
