import Navbar from "@/components/navbar";
import { BookOpen, Tv } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <header className="mt-30 text-center flex flex-col items-center gap-6">
        <h2 className="text-2xl md:text-4xl font-bold">
          Want to follow your favorite content?
        </h2>
        <p className="text-md md:text-xl text-neutral-400 max-w-md">
          An easy and organized way to{" "}
          <span className="text-destructive font-semibold">track</span> your
          favorite anime and mangas.
        </p>

        <div className="flex flex-wrap gap-4 justify-center mt-6">
          <ButtonItem icon={<Tv size={20} />} text="Animes" />
          <ButtonItem icon={<BookOpen size={20} />} text="Mangas" />
        </div>
      </header>
    </div>
  );
};

const ButtonItem = ({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) => {
  return (
    <button className="flex items-center gap-2 px-4 py-2 border rounded-full border-white/20 text-white hover:bg-white/10 hover:text-secondary/90 transition">
      {icon}
      <span className="text-sm">{text}</span>
    </button>
  );
};

export default Home;
