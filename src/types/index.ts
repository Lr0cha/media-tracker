//anilist API
export interface ApiProps {
  id: number;
  title: {
    english: string;
  };
  coverImage: {
    large: string;
  };
}

export interface ListMediaCard {
  title: string;
  coverImage: string;
  type: "anime" | "manga";
  status: "planning" | "in progress" | "completed" | "paused";
  progress?: number;
}
