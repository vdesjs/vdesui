const ZH_CN = 'zh-CN';
const EN_US = 'en-US';
const CACHE_KEY = 'vdesui-lang';

let currentLang = ZH_CN;

export function getLang(): string {
  return currentLang;
}

export function setLang(lang: string) {
  currentLang = lang;
  localStorage.setItem(CACHE_KEY, lang);
}

export function setDefaultLang(langFromConfig: string) {
  const cached = localStorage.getItem(CACHE_KEY);

  if (cached) {
    currentLang = cached;
    return;
  }

  if (navigator.language && navigator.language.indexOf('zh-') !== -1) {
    currentLang = ZH_CN;
    return;
  }

  currentLang = langFromConfig || EN_US;
}
