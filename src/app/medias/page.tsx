import Sidebar from "@/components/sidebar";
import MediaCard from "@/components/mediaCard";
import { ListMediaCard } from "@/types/card";

const mediaList: ListMediaCard[] = [
  {
    title: "Manga example",
    coverImage: "/example.jpg",
    type: "manga",
    status: "in progress",
    progress: 89,
  },
  {
    title: "Anime example",
    coverImage: "/example.jpg",
    type: "anime",
    status: "completed",
    progress: 100,
  },
  {
    title: "Anime example",
    coverImage: "/example.jpg",
    type: "anime",
    status: "planning",
    progress: 0,
  },
  {
    title: "Manga example",
    coverImage: "/example.jpg",
    type: "manga",
    status: "in progress",
    progress: 14,
  },
];

const MediaPage = () => {
  return (
    <div>
      <Sidebar />
      <div className="relative sm:ml-[20%] min-h-screen p-6">
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-4 place-items-center">
          {mediaList.map((media, index) => (
            <MediaCard key={index} {...media} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MediaPage;
