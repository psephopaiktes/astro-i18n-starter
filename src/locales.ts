// locale settings for this theme
// https://astro-i18n-starter.pages.dev/setup/

export const DEFAULT_LOCALE_SETTING: string = "en";

export const LOCALES_SETTING: LocaleSetting = {
  "en": {
    "label": "English"
  },
  "ja": {
    "label": "日本語"
  },
  "zh-cn": {
    "label": "简体中文",
    "lang": "zh-CN"
  },
  "ar": {
    "label": "العربية",
    "dir": "rtl"
  },
};

interface LocaleSetting {
  [key: Lowercase<string>]: {
    label: string;
    lang?: string;
    dir?: 'rtl' | 'ltr';
  };
} // refer: https://starlight.astro.build/reference/configuration/#locales
