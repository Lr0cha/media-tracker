"use client";

import { useState } from "react";
import { Media } from "@/types/index";
import DialogMediaButton from "../dialog-media-btn";

const MediaCard = ({
  id,
  title,
  cover_image,
  type,
  status,
  progress,
  notes,
}: Media) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative w-52 h-70 rounded-xl overflow-hidden shadow-md bg-cover bg-center cursor-pointer transition-transform hover:-translate-y-1"
      style={{ backgroundImage: `url(${cover_image})` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {hovered && (
        <div className="absolute top-0.5 right-0.5 z-10">
          <DialogMediaButton
            isEdit
            formData={{
              id,
              title,
              cover_image,
              type: type.toLowerCase() as "anime" | "manga",
              status: status.toLowerCase() as
                | "in progress"
                | "planning"
                | "completed"
                | "paused",
              progress,
              notes: notes || "",
            }}
            onClose={() => setHovered(false)}
          />
        </div>
      )}

      {/* Overlay */}
      <div className="absolute bottom-0 left-0 w-full bg-black/60 text-white p-3 space-y-1">
        <h3 className="text-sm font-semibold line-clamp-2">{title}</h3>
        <div className="text-xs flex justify-between text-gray-300">
          <span>{status[0].toUpperCase() + status.slice(1)}</span>
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
