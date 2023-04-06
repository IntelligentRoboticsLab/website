import { z } from "zod";

export interface IPublication {
  title: string;
  authors: string[];
  abstract?: string;
  type?: string;
  journal?: string;
  volume?: string;
  pages?: string;
  number?: string;
  year: string;
  date: string;
  tags: string[];
  file: string;
}

export const Publication = z.object({
  title: z.string(),
  authors: z.string().array(),
  abstract: z.string().optional(),
  tags: z.string().array(),
  type: z.string().optional(),
  journal: z.string().optional(),
  volume: z.string().optional(),
  number: z.string().optional(),
  date: z.string(),
  year: z.string(),
  id: z.string(),
  file: z.string(),
});

export const to_bibtex = (pub: IPublication): string => {
  const type = pub.type ?? "misc";

  let bibtex = `@${type} {
  title = ${pub.title},
  authors = ${pub.authors},
  year = ${pub.year},
  date = ${pub.date}`;

  if (pub.abstract) {
    bibtex = `${bibtex},\n  abstract = ${pub.abstract}`
  }

  if (pub.journal) {
    bibtex = `${bibtex},\n  journal = ${pub.journal}`
  }

  if (pub.volume) {
    bibtex = `${bibtex},\n  volume = ${pub.volume}`
  }

  if (pub.number) {
    bibtex = `${bibtex},\n  number = ${pub.number}`
  }

  return `${bibtex}\n}`;
}