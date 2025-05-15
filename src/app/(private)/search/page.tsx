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
    <div className="space-y-6">
      <div className="flex gap-2">
        <SearchBar initialSearch={search} mediaType={mediaType} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 place-items-center">
        {results.length !== 0 ? (
          results.map((media) => (
            <FetchCard key={media.id} data={media} mediaType={mediaType} />
          ))
        ) : (
          <h3>{`No ${mediaType.toLowerCase()} found...`}</h3>
        )}
      </div>
    </div>
  );
}
