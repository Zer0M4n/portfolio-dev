import { ui, defaultLang } from './ui';

export function getLangFromUrl(url: URL) {
  // Elimina el `/` final si está presente en el pathname
  let path = url.pathname.replace(/\/$/, "");
  
  // Extrae el idioma después de `/portfolio-dev/`
  const [, lang] = path.split('/portfolio-dev/');
  
  // Verifica si el idioma existe en `ui`; si no, usa el idioma predeterminado
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}

