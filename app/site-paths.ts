export const siteBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
export const siteOrigin = (process.env.NEXT_PUBLIC_SITE_ORIGIN ??
  "https://bubblelicious-lab-cherry-hill.jinxialin5148518.chatgpt.site").replace(/\/$/, "");
export const siteUrl = `${siteOrigin}${siteBasePath}`;

export function assetPath(path: string) {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${siteBasePath}${normalizedPath}`;
}
