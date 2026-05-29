import { ref, computed } from 'vue'
import { translations } from '../translations/index.js'

const STORAGE_KEY = 'portfolio-language'

const getInitialLanguage = () => {
  const saved = localStorage.getItem(STORAGE_KEY)
  if (saved && (saved === 'en' || saved === 'es')) {
    return saved
  }
  const browserLang = navigator.language.toLowerCase()
  return browserLang.startsWith('es') ? 'es' : 'en'
}

const currentLanguage = ref(getInitialLanguage())

export function useI18n() {
  const t = computed(() => translations[currentLanguage.value])

  const setLanguage = (lang) => {
    if (lang === 'en' || lang === 'es') {
      currentLanguage.value = lang
      localStorage.setItem(STORAGE_KEY, lang)
    }
  }

  const toggleLanguage = () => {
    const newLang = currentLanguage.value === 'en' ? 'es' : 'en'
    setLanguage(newLang)
  }

  const languageLabel = computed(() =>
    currentLanguage.value === 'en' ? 'ES' : 'EN'
  )

  return {
    t,
    currentLanguage,
    setLanguage,
    toggleLanguage,
    languageLabel
  }
}
