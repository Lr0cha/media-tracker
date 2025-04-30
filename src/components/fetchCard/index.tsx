import AddMediaButton from "../addMediaButton";

const FetchCard = () => {
  return (
    <div className="flex flex-col justify-center items-center w-60 rounded-xl overflow-hidden shadow-lg bg-background border border-muted transition-transform hover:shadow-xl">
      <div className="relative h-36 w-full">
        <img
          src={"/example.jpg"}
          alt="Imagem"
          className="rounded-t-xl object-cover w-full h-full"
        />
        <AddMediaButton />
      </div>
      <div className="flex flex-col p-3 w-full bg-muted rounded-b-xl justify-center items-center gap-3">
        <h3 className="text-base font-semibold text-foreground line-clamp-1">
          Manga example
        </h3>
      </div>
    </div>
  );
};

export default FetchCard;
