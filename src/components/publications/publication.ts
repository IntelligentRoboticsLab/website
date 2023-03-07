import { z } from "zod";

export interface IPublication {
  title: string;
  authors: string[];
  abstract?: string;
  tags: string[];
  file: string;
}

export const Publication = z.object({
  title: z.string(),
  authors: z.string().array(),
  abstract: z.string().optional(),
  tags: z.string().array(),
  date: z.string(),
  year: z.string(),
  id: z.string(),
  file: z.string(),
}); 
