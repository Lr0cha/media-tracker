import Image from "next/image";
import Navbar from "@/components/navbar";
import { BookOpen, Tv } from "lucide-react";

const ButtonItem = ({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) => {
  return (
    <button className="flex items-center gap-2 px-4 py-2 md:px-6 md:py-3 border rounded-full border-white/20 text-white text-sm md:text-base hover:bg-white/10 hover:text-secondary/90 transition">
      {icon}
      <span>{text}</span>
    </button>
  );
};

export default function Home() {
  return (
    <div className="min-h-screen px-4 pb-10">
      <Navbar />

      <header className="mt-30 text-center flex flex-col items-center justify-center gap-6 px-4 max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold">
          Want to follow your favorite content?
        </h2>
        <p className="text-md md:text-xl text-neutral-400 max-w-2xl text-balance">
          An easy and organized way to{" "}
          <span className="text-destructive font-semibold">track</span> your
          favorite anime and mangas.
        </p>

        <div className="flex flex-wrap gap-4 justify-center mt-6">
          <ButtonItem icon={<Tv size={24} />} text="Animes" />
          <ButtonItem icon={<BookOpen size={24} />} text="Mangas" />
        </div>
      </header>

      <div className="mt-10 flex justify-center">
        <div className="w-full max-w-6xl px-4">
          <Image
            src="/previews/mediaPage.png"
            alt="Media Page Preview"
            width={1200}
            height={700}
            className="rounded-2xl shadow-2xl ring-1 ring-white/10 backdrop-blur-md transition duration-300 hover:scale-105 hover:shadow-[0_10px_40px_rgba(255,255,255,0.1)] hover:ring-2 hover:ring-white/20"
            priority
          />
        </div>
      </div>
    </div>
  );
}
