type LocaleConfig = {
  label: string;
  lang?: string;
  dir?: "ltr" | "rtl";
};
type Locales = Record<string, LocaleConfig>;
import USER_LOCALES_LIST from "./locales.json";
export const LOCALES = USER_LOCALES_LIST as Locales;

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
// Helper to get path list for all locales
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
