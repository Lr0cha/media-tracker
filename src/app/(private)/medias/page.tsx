import MediaCard from "@/components/media-card";
import { ListMediaCard } from "@/types/index";
import { sanitizeMediaType } from "@/utils/validate";

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

export default async function MediaPage({
  searchParams,
}: {
  searchParams: Promise<{ type?: string }>;
}) {
  const mediaType: string = sanitizeMediaType(
    (await searchParams).type?.toUpperCase() || "anime"
  );

  const filteredList: ListMediaCard[] = mediaList.filter(
    (media) => media.type.toUpperCase() === mediaType
  );

  return (
    <div className="space-y-6">
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 place-items-center">
        {filteredList.map((media, index) => (
          <MediaCard key={index} {...media} />
        ))}
      </div>
    </div>
  );
}
