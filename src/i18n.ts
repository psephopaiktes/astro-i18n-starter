export function useTranslations(lang) {
  return function t(multilingual) {
    return multilingual[lang];
  };
}

export function generateLocalePaths(url) {
  const pathnames = url.pathname.split('/');
  const localePaths = {};
  Object.keys(LANGS).forEach((lang) => {
    pathnames[1] = lang;
    localePaths[lang] = pathnames.join('/').replace(/\/$/, '');
  });
  return localePaths;
}
