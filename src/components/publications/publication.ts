import { z } from "zod";

export interface IPublication {
  title: string;
  authors: string[];
  abstract?: string;
  type?: string;
  journal?: string;
  volume?: string;
  pages?: string;
  booktitle?: string;
  chapter?: string;
  edition?: string;
  editor?: string;
  publisher?: string;
  address?: string;
  series?: string;
  note?: string;
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
  booktitle: z.string().optional(),
  chapter: z.string().optional(),
  edition: z.string().optional(),
  editor: z.string().optional(),
  publisher: z.string().optional(),
  address: z.string().optional(),
  series: z.string().optional(),
  note: z.string().optional(),
  pages: z.string().optional(),
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
  title = {${pub.title}},
  author${pub.authors.length > 1 ? "s" : ""} = {${pub.authors.join(", ")}},
  year = {${pub.year}},
  date = {${pub.date}}
  tags = {${pub.tags.join(", ")}}`;

  // TODO: find a better way to do this
  // (we need a magicican typescriptologist)

  if (pub.abstract) {
    bibtex = `${bibtex},\n  abstract = {${pub.abstract}}`
  }

  if (pub.journal) {
    bibtex = `${bibtex},\n  journal = {${pub.journal}}`
  }

  if (pub.volume) {
    bibtex = `${bibtex},\n  volume = {${pub.volume}}`
  }

  if (pub.number) {
    bibtex = `${bibtex},\n  number = {${pub.number}}`
  }

  if (pub.pages) {
    bibtex = `${bibtex},\n  pages = {${pub.pages}}`
  }

  if (pub.booktitle) {
    bibtex = `${bibtex},\n  booktitle = {${pub.booktitle}}`
  }

  if (pub.chapter) {
    bibtex = `${bibtex},\n  chapter = {${pub.chapter}}`
  }

  if (pub.edition) {
    bibtex = `${bibtex},\n  edition = {${pub.edition}}`
  }

  if (pub.editor) {
    bibtex = `${bibtex},\n  editor = {${pub.editor}}`
  }

  if (pub.publisher) {
    bibtex = `${bibtex},\n  publisher = {${pub.publisher}}`
  }

  if (pub.address) {
    bibtex = `${bibtex},\n  address = {${pub.address}}`
  }

  if (pub.series) {
    bibtex = `${bibtex},\n  series = {${pub.series}}`
  }

  if (pub.note) {
    bibtex = `${bibtex},\n  note = {${pub.note}}`
  }

  if (pub.pages) {
    bibtex = `${bibtex},\n  pages = {${pub.pages}}`
  }

  return `${bibtex}\n}`;
}