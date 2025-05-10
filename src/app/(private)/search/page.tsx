import SelectTypeClient from "@/components/select-type-media";
import FetchCard from "@/components/fetch-card";
import { searchMedia } from "../../../lib/actions/search-media-action";
import { ApiProps } from "@/types/api";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { sanitizeMediaType } from "@/utils/validate";

export default async function SearchPage({
  searchParams, //params url
}: {
  searchParams: { search?: string; type?: string };
}) {
  // Await searchParams
  const { search, type } = await searchParams;

  const query = search || "";
  const sanitizedMediaType = sanitizeMediaType(type);

  let results: ApiProps[] = [];

  if (query) {
    results = await searchMedia(query, sanitizedMediaType);
  }

  return (
    <div className="flex flex-col sm:ml-[20%] min-h-screen p-6">
      <form className="flex mx-auto gap-2 w-full max-w-3xl">
        <SelectTypeClient defaultValue={sanitizedMediaType} />
        <Input
          name="search"
          placeholder="Search for medias"
          defaultValue={query}
        />
        <Button
          type="submit"
          className="bg-secondary hover:scale-105 cursor-pointer"
        >
          <Search />
        </Button>
      </form>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-4 place-items-center">
        {results.length > 0 ? (
          results.map((media) => (
            <FetchCard
              key={media.id}
              data={media}
              mediaType={sanitizedMediaType}
            />
          ))
        ) : (
          <p className="text-muted-foreground">Nenhum resultado encontrado.</p>
        )}
      </div>
      <p className="fixed bottom-3 text-sm text-muted-foreground text-center mt-10">
        Dados fornecidos por{" "}
        <a
          href="https://anilist.co"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          AniList.co
        </a>
      </p>
    </div>
  );
}
