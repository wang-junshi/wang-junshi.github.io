import type { UIStrings } from "../types";

export default {
  nav: {
    home: "首页",
    posts: "文章",
    projects: "项目",
    tags: "标签",
    archives: "随记",
    search: "搜索",
  },
  post: {
    publishedAt: "Published at",
    updatedAt: "Updated",
    sharePostIntro: "Share this post:",
    sharePostOn: "Share this post on {{platform}}",
    sharePostViaEmail: "Share this post via email",
    tagLabel: "Tags",
    backToTop: "Back to top",
    goBack: "Go back",
    editPage: "Edit page",
    previousPost: "Previous Post",
    nextPost: "Next Post",
  },
  pagination: {
    prev: "Prev",
    next: "Next",
    page: "Page",
  },
  home: {
    socialLinks: "社交链接",
    featured: "精选文章",
    recentPosts: "最近文章",
    allPosts: "全部文章",
  },
  footer: {
    copyright: "Copyright",
    allRightsReserved: "All rights reserved.",
  },
  pages: {
    tagTitle: "标签",
    tagDesc: "包含这个标签的内容：",

    tagsTitle: "标签",
    tagsDesc: "项目、文章和随记里使用过的标签。",

    postsTitle: "文章",
    postsDesc: "整理后的长文章。",

    archivesTitle: "随记",
    archivesDesc: "随手记录想法、近况和过程。",

    searchTitle: "搜索",
    searchDesc: "搜索站内内容 ...",
  },
  a11y: {
    skipToContent: "Skip to content",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    toggleTheme: "Toggle theme",
    searchPlaceholder: "Search posts...",
    noResults: "No results found",
    goToPreviousPage: "Go to previous page",
    goToNextPage: "Go to next page",
  },
  notFound: {
    title: "404 Not Found",
    message: "Page Not Found",
    goHome: "Go back home",
  },
} satisfies UIStrings;
