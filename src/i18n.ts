import USER_LOCALES_LIST from "./locales.json";
type LocaleConfig = {
  readonly label: string;
  readonly lang?: string;
  readonly dir?: "ltr" | "rtl";
};
export const LOCALES = USER_LOCALES_LIST as Record<string, LocaleConfig>;

export type Lang = keyof typeof LOCALES;
export type Multilingual = Record<Lang, string>;

////////////////////////////////////////////////////////////////////////////////
// Helper to get the translation function
////////////////////////////////////////////////////////////////////////////////
export function useTranslations(lang: Lang) {
  return function t(multilingual: Multilingual) {
    return multilingual[lang];
  };
}

////////////////////////////////////////////////////////////////////////////////
// Helper to get corresponding path list for all locales
////////////////////////////////////////////////////////////////////////////////
type LocalePath = {
  lang: Lang;
  path: string;
};
export function getLocalePaths(url: URL): LocalePath[] {
  const pathnames = url.pathname.split("/");
  return Object.keys(LOCALES).map((lang) => {
    pathnames[1] = lang;
    return {
      lang: lang as Lang,
      path: pathnames.join("/"),
    };
  });
}

////////////////////////////////////////////////////////////////////////////////
// Helper to get locale parms for Astro's `getStaticPaths` function
////////////////////////////////////////////////////////////////////////////////
export const localeParams = Object.keys(LOCALES).map((lang) => ({
  params: { lang },
}));
