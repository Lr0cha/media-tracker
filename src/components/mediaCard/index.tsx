"use client";

import { useState } from "react";
import { MediaCardProps } from "@/types/mediaCardProps";

const MediaCard = ({
  title,
  coverImage,
  type,
  status,
  progress,
}: MediaCardProps) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="flex flex-col justify-center items-center w-60 rounded-xl overflow-hidden shadow-lg bg-background border border-muted transition-transform hover:-translate-y-1 hover:shadow-xl"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative h-36 w-full">
        <img
          src={coverImage}
          alt="Descrição"
          className="rounded-t-xl object-cover w-full h-full"
        />
        {hovered && (
          <button className="absolute h-8 w-8 cursor-pointer top-2 right-2 bg-muted hover:bg-secondary/90 rounded text-2xl font-bold text-foreground shadow">
            ...
          </button>
        )}
      </div>
      <div className="p-3 w-full bg-muted rounded-b-xl">
        <h3 className="text-base font-semibold text-foreground line-clamp-1">
          {title}
        </h3>
        <div className="text-sm flex justify-between text-muted-foreground">
          <span className="text-muted-foreground/90">
            {status[0].toUpperCase() + status.slice(1)}
          </span>
          {type === "manga" ? (
            <span>Cap. {progress}</span>
          ) : type === "anime" ? (
            <span>Ep. {progress}</span>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default MediaCard;
