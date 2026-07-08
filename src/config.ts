/**
 * Internal resolved configuration used throughout the codebase.
 *
 * Prefer editing `astro-paper.config.ts` instead of this file. This module exists to
 * apply defaults and expose a fully-resolved config shape (`ResolvedAstroPaperConfig`).
 */
import userConfig from "@/astro-paper.config";
import type { ResolvedAstroPaperConfig } from "./types/config";
import cmsSettings from "./content/settings/site.json";
import { PUBLIC_GOOGLE_SITE_VERIFICATION } from "astro:env/client";

const DEFAULT_OG_IMAGE = "default-og.jpg";
const cmsConfig = cmsSettings as Partial<ResolvedAstroPaperConfig>;

const cmsSite = (cmsConfig.site ?? {}) as Partial<
  ResolvedAstroPaperConfig["site"]
>;
const cmsPosts = (cmsConfig.posts ?? {}) as Partial<
  ResolvedAstroPaperConfig["posts"]
>;
const cmsFeatures = (cmsConfig.features ?? {}) as Partial<
  ResolvedAstroPaperConfig["features"]
>;

const config: ResolvedAstroPaperConfig = {
  site: {
    ...userConfig.site,
    ...cmsSite,
    ogImage: cmsSite.ogImage ?? userConfig.site.ogImage ?? DEFAULT_OG_IMAGE,
    lang: cmsSite.lang ?? userConfig.site.lang ?? "en",
    timezone: cmsSite.timezone ?? userConfig.site.timezone ?? "UTC",
    dir: cmsSite.dir ?? userConfig.site.dir ?? "ltr",
    googleVerification:
      cmsSite.googleVerification ||
      userConfig.site.googleVerification ||
      PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
  posts: {
    perPage: cmsPosts.perPage ?? userConfig.posts?.perPage ?? 4,
    perIndex: cmsPosts.perIndex ?? userConfig.posts?.perIndex ?? 4,
    scheduledPostMargin:
      cmsPosts.scheduledPostMargin ??
      userConfig.posts?.scheduledPostMargin ??
      15 * 60 * 1000,
  },
  features: {
    lightAndDarkMode:
      cmsFeatures.lightAndDarkMode ??
      userConfig.features?.lightAndDarkMode ??
      true,
    dynamicOgImage:
      cmsFeatures.dynamicOgImage ?? userConfig.features?.dynamicOgImage ?? true,
    showArchives:
      cmsFeatures.showArchives ?? userConfig.features?.showArchives ?? true,
    showBackButton:
      cmsFeatures.showBackButton ?? userConfig.features?.showBackButton ?? true,
    editPost: userConfig.features?.editPost ?? { enabled: false },
    search: cmsFeatures.search ?? userConfig.features?.search ?? "pagefind",
  },
  socials: cmsConfig.socials?.length
    ? cmsConfig.socials
    : (userConfig.socials ?? []),
  shareLinks: cmsConfig.shareLinks?.length
    ? cmsConfig.shareLinks
    : (userConfig.shareLinks ?? []),
};

export default config;
