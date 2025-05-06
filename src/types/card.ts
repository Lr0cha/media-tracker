export interface ListMediaCard {
  title: string;
  coverImage: string;
  type: "anime" | "manga";
  status: "planning" | "in progress" | "completed" | "paused";
  progress?: number;
}
