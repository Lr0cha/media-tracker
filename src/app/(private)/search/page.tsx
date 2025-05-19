import { searchMedia } from "@/lib/actions/search-media-action";
import SearchBar from "@/components/search-bar";
import FetchCard from "@/components/fetch-card";
import { ApiProps } from "@/types/index";
import { sanitizeMediaType } from "@/utils/validate";

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string; type?: string }>;
}) {
  const paramsUrl = await searchParams;

  const search = paramsUrl.q?.trim() || "solo leveling";
  const mediaType = sanitizeMediaType(paramsUrl.type);

  let results: ApiProps[] = [];

  if (search) {
    results = await searchMedia(search, mediaType);
  }

  return (
    <div className="space-y-6 w-full">
      <div className="flex flex-wrap justify-center">
        <SearchBar initialSearch={search} mediaType={mediaType} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 grid-cols-6-3xl max-w-[1800px] gap-6 place-items-center mx-auto">
        {results.length !== 0 ? (
          results.map((media) => (
            <FetchCard key={media.id} data={media} mediaType={mediaType} />
          ))
        ) : (
          <h3 className="col-span-full text-center text-muted-foreground">
            {`No ${mediaType.toLowerCase()} found...`}
          </h3>
        )}
      </div>
    </div>
  );
}
