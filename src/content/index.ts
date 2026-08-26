import { en } from "./en";
import { pt } from "./pt";
import type { Content, Lang } from "./types";

export const dictionaries: Record<Lang, Content> = { pt, en };

export type { Content, Lang };
export * from "./types";
