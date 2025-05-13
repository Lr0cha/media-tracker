import AddMediaButton from "../add-media-button";
import { ApiProps } from "@/types/index";

interface MediaProps {
  data: ApiProps;
  mediaType: "ANIME" | "MANGA";
}

const FetchCard = ({ data, mediaType }: MediaProps) => {
  return (
    <div className="flex flex-col justify-center items-center w-60 rounded-xl overflow-hidden shadow-lg bg-background border border-muted transition-transform hover:shadow-xl">
      <div className="relative h-48 w-full overflow-hidden bg-muted">
        {data.coverImage ? (
          <img
            src={data.coverImage?.large}
            alt={data.title.english || "Capa"}
            className="w-full h-full object-contain"
          />
        ) : (
          <div className="w-full h-full object-contain bg-gray-200 rounded-t-lg flex items-center justify-center">
            <p className="text-gray-600">Capa não encontrada</p>
          </div>
        )}
        <AddMediaButton mediaTitle={data.title.english} mediaType={mediaType} />
      </div>

      <div className="flex flex-col p-3 w-full bg-muted rounded-b-xl justify-center items-center gap-3">
        <h3 className="text-base font-semibold text-foreground line-clamp-1">
          {data.title.english || "Título indisponível"}
        </h3>
      </div>
    </div>
  );
};

export default FetchCard;
