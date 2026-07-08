import { getRelativeLocaleUrl } from "astro:i18n";
import config from "@/config";

type ContentSection = "projects" | "archives";

function normalizeId(id: string) {
  return id.replace(/^\/+|\/+$/g, "");
}

export function getContentSlug(id: string) {
  return `/${normalizeId(id)}`;
}

export function getContentUrl(
  section: ContentSection,
  id: string,
  locale: string | undefined = config.site.lang
) {
  return getRelativeLocaleUrl(locale, `${section}/${normalizeId(id)}`);
}
