import { ui, defaultLang } from './ui';

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/portfolio-dev/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}

export function switchLanguageIfNeeded(url: URL) {
  const currentLang = getLangFromUrl(url); // Obtiene el idioma actual desde la URL

  // Verifica si el idioma actual es español y cambia a inglés
  if (currentLang === 'es') {
    const newLang = 'en'; // Cambia a inglés
    return useTranslations(newLang); // Devuelve la función de traducción para inglés
  }

  // Si no es español, devuelve la función de traducción para el idioma actual
  return useTranslations(currentLang);
}