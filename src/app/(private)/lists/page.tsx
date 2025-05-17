import MediaCard from "@/components/media-card";
import { Media } from "@/types/index";
import { createClient } from "@/utils/supabase/server";
import { sanitizeMediaType } from "@/utils/validate";

let filteredList: Media[];

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
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 place-items-center">
        {filteredList.length !== 0
          ? filteredList.map((media) => <MediaCard key={media.id} {...media} />)
          : `No ${mediaType.toLowerCase()}s found on the list ...`}
      </div>
    </div>
  );
}
