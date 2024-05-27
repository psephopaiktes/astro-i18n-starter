import { LANGS } from "@/consts";

export type Lang = keyof typeof LANGS;
export type Multilingual = Record<Lang, string>;

export function useTranslations(lang: Lang) {
  return function t(multilingual: Multilingual) {
    return multilingual[lang];
  };
}
