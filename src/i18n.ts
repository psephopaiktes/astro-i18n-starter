// type Locale = {
//   label: string;
//   lang?: string;
//   dir: "ltr" | "rtl";
// }
// type Locales = Record<string, Locale>;

export const LANGS = {
  en: "English",
  ja: "日本語",
  "zh-cn": "简体中文",
} as const;

export type Lang = keyof typeof LANGS;
export type Multilingual = Record<Lang, string>;

export function useTranslations(lang: Lang) {
  return function t(multilingual: Multilingual) {
    return multilingual[lang];
  };
}

type LocalePath = {
  lang: Lang;
  path: string;
  label: (typeof LANGS)[Lang];
};
export function getLocalePaths(url: URL): LocalePath[] {
  const pathnames = url.pathname.split("/");
  return Object.keys(LANGS).map((lang) => {
    pathnames[1] = lang;
    return {
      lang: lang as Lang,
      path: pathnames.join("/"),
      label: LANGS[lang as Lang],
    };
  });
}
