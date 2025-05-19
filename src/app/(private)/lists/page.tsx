import MediaCard from "@/components/media-card";
import { createClient } from "@/utils/supabase/server";
import { sanitizeMediaType } from "@/utils/validate";

export default async function MediaPage({
  searchParams,
}: {
  searchParams: Promise<{ type?: string }>;
}) {
  const supabase = await createClient();

  // fetching data from db
  const { data: medias } = await supabase
    .from("medias")
    .select()
    .order("title");

  const mediaType: string = sanitizeMediaType(
    (await searchParams).type?.toUpperCase()
  );

  const filteredList =
    medias?.filter(
      // optional chaining
      (media) => media.type.toUpperCase() === mediaType
    ) || [];

  return (
    <div className="space-y-6">
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 grid-cols-6-3xl max-w-[1800px] gap-6 place-items-center mx-auto">
        {filteredList.length !== 0
          ? filteredList.map((media) => <MediaCard key={media.id} {...media} />)
          : `No ${mediaType.toLowerCase()}s found on the list ...`}
      </div>
    </div>
  );
}
