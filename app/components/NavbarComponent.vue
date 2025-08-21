<script setup>
const menuItems = [
  { label: 'common.home', to: { path: '/', hash: '#hero' }, icon: 'i-heroicons-home' },
  { label: 'common.about', to: { path: '/', hash: '#about' }, icon: 'i-lucide-info' },
  { label: 'common.skills', to: { path: '/', hash: '#skills' }, icon: 'i-heroicons-code-bracket' },
  {
    label: 'common.graduation',
    to: { path: '/', hash: '#graduation' },
    icon: 'i-lucide-graduation-cap',
  },
  { label: 'common.project', to: { path: '/', hash: '#projects' }, icon: 'i-heroicons-folder' },
  { label: 'common.contact', to: { path: '/', hash: '#contact' }, icon: 'i-heroicons-envelope' },
]
</script>

<template>
  <header
    class="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/80 dark:bg-gray-900/80 border-b border-gray-200/50 dark:border-white/10 transition-colors"
  >
    <nav class="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
      <NuxtLink
        :to="{ path: '/', hash: '#hero' }"
        class="text-xl font-bold text-gray-900 dark:text-white tracking-wide hover:text-green-500 dark:hover:text-green-400 transition-colors"
      >
        D<span class="text-green-500 dark:text-green-400">B</span>
      </NuxtLink>

      <ul class="hidden lg:flex space-x-8">
        <li v-for="item in menuItems" :key="item.label">
          <NuxtLink
            :to="item.to"
            class="text-gray-700 dark:text-white hover:text-green-500 dark:hover:text-green-400 transition-colors"
          >
            {{ $t(item.label) }}
          </NuxtLink>
        </li>
      </ul>

      <div class="flex items-center space-x-4">
        <ColorModeButton />
        <TraductionModeButton />

        <USlideover
          side="left"
          class="backdrop-blur-lg bg-white/95 dark:bg-slate-900/95 border-r border-gray-200 dark:border-white/20 transition-colors"
        >
          <UButton
            icon="i-heroicons-bars-3"
            variant="ghost"
            class="cursor-pointer lg:hidden text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
          />

          <template #header>
            <div class="flex items-center justify-between w-full space-x-2">
              <div class="flex items-center gap-2">
                <Icon name="i-lucide-home" />
                <h2 class="text-lg font-semibold text-gray-900 dark:text-white">Menu</h2>
              </div>
              <ColorModeButton />
            </div>
          </template>

          <template #body>
            <div class="px-6 py-8">
              <ul class="space-y-1">
                <li v-for="item in menuItems" :key="item.label">
                  <NuxtLink
                    :to="item.to"
                    class="group flex items-center space-x-3 text-gray-600 dark:text-white/80 text-base py-3 px-2 rounded-lg hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5 transition-all duration-200"
                  >
                    <UIcon
                      :name="item.icon"
                      class="w-5 h-5 text-gray-400 dark:text-white/60 group-hover:text-green-500 dark:group-hover:text-green-400 transition-colors"
                    />
                    <span>{{ $t(item.label) }}</span>
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </template>

          <template #footer>
            <p class="text-xs text-gray-500 dark:text-white/50">
              © {{ new Date().getFullYear() }} Dylan Bouraoui
            </p>
          </template>
        </USlideover>
      </div>
    </nav>
  </header>
</template>

<style scoped>
html,
body {
  scroll-behavior: smooth;
}
</style>
