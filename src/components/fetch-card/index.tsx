import DialogMediaButton from "@/components/dialog-media-btn";
import { ApiProps } from "@/types/index";

interface MediaApiProps {
  data: ApiProps;
  mediaType: "ANIME" | "MANGA";
}

const FetchCard = ({ data, mediaType }: MediaApiProps) => {
  return (
    <div className="flex flex-col justify-between items-center w-[220px] rounded-xl overflow-hidden shadow-lg bg-card border border-border transition-transform hover:scale-[1.02] hover:shadow-2xl duration-200">
      <div className="relative h-48 w-full overflow-hidden bg-muted">
        {data.coverImage ? (
          <img
            src={data.coverImage?.large}
            alt={data.title.english || "Cover"}
            className="w-full h-full mx-auto"
          />
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            <p className="text-gray-600">Not found</p>
          </div>
        )}
        <DialogMediaButton
          formData={{
            title: data.title.english,
            cover_image: data.coverImage.large,
            type: mediaType.toLowerCase() as "anime" | "manga",
          }}
        />
      </div>

      <div className="flex flex-col p-3 w-full bg-muted rounded-b-xl justify-center items-center gap-2">
        <h3 className="text-base font-semibold text-foreground text-center line-clamp-1">
          {data.title.english || "No Available"}
        </h3>
      </div>
    </div>
  );
};

export default FetchCard;
