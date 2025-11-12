import * as Localization from 'expo-localization'
import i18n from 'i18n-js'
import en from 'locales/en'
import zh from 'locales/zh'
import de from 'locales/de'

// Initialize with browser/system locale
i18n.locale = Localization.locale
i18n.fallbacks = true

i18n.translations = {
  en,
  zh,
  de,
}

/**
 * Change the UI language
 * @param {string} locale - The locale code ('en', 'zh', or 'de')
 */
export const setLocale = (locale) => {
  if (i18n.translations[locale]) {
    i18n.locale = locale
  }
}

/**
 * Get the current locale
 * @returns {string} - The current locale code
 */
export const getLocale = () => {
  return i18n.locale
}

export default i18n
