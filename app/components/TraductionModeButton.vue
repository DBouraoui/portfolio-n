<script setup>
import { computed } from 'vue'
const i18n = useI18n()

const rawLocalesSource = i18n.locales ?? i18n.availableLocales ?? []

const rawLocales = computed(() => {
  if (Array.isArray(rawLocalesSource)) return rawLocalesSource
  if (rawLocalesSource && rawLocalesSource.value) return rawLocalesSource.value
  return []
})

function getFlag(code) {
  const flags = { fr: '🇫🇷', en: '🇬🇧' }
  return flags[code] || '🌐'
}

function getLanguageName(code) {
  const names = { fr: 'Français', en: 'Anglais' }
  return names[code] || code.toUpperCase()
}

const languages = computed(() =>
  rawLocales.value.map((l) => {
    const code = typeof l === 'string' ? l : (l.code ?? String(l))
    return { code, flag: getFlag(code), name: getLanguageName(code) }
  })
)

const selectItems = computed(() =>
  languages.value.map((lang) => ({ label: `${lang.flag} ${lang.name}`, value: lang.code }))
)

const selected = computed({
  get: () => (i18n.locale && i18n.locale.value !== undefined ? i18n.locale.value : i18n.locale),
  set: (v) => {
    if (typeof i18n.setLocale === 'function') {
      i18n.setLocale(v)
    } else if (i18n.locale && 'value' in i18n.locale) {
      i18n.locale.value = v
    } else {
      i18n.locale = v
    }
  },
})
</script>

<template>
  <ClientOnly>
    <USelect v-model="selected" :items="selectItems" class="min-w-[140px]" />
  </ClientOnly>
</template>
