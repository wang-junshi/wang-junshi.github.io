import { slugifyStr } from "./slugify";

type Tag = {
  tag: string;
  tagName: string;
};

type TagSource = {
  data: {
    tags?: string[];
    draft?: boolean;
  };
};

/**
 * Builds a de-duplicated, sorted tag list from taggable content entries.
 *
 * - `tag` is the slug used in URLs; `tagName` is the original label for display
 * - Uniqueness is based on the slug (so differently-cased labels collapse)
 */
export function getUniqueTags<T extends TagSource>(entries: T[]) {
  const tags: Tag[] = entries
    .filter(entry => !entry.data.draft)
    .flatMap(entry => entry.data.tags ?? [])
    .map(tag => ({ tag: slugifyStr(tag), tagName: tag }))
    .filter(
      (value, index, self) =>
        self.findIndex(tag => tag.tag === value.tag) === index
    )
    .sort((tagA, tagB) => tagA.tag.localeCompare(tagB.tag));
  return tags;
}
