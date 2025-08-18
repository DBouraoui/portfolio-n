<script setup>
const about = {
  skills: ['Nuxt', 'Python', 'Symfony', 'Tailwind', 'Docker', 'Go'],
}
</script>

<template>
  <section class="py-24">
    <div class="max-w-5xl mx-auto px-8 grid md:grid-cols-3 gap-16 items-center">
      <div class="flex justify-center relative group">
        <div
          class="absolute -inset-2 bg-gradient-to-br from-green-400/20 to-green-500/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700"
        ></div>
        <div class="relative">
          <img
            src="/head.png"
            alt="Photo de profil"
            class="w-72 h-72 rounded-full object-cover shadow-2xl transition-all duration-700 group-hover:scale-[1.02] group-hover:shadow-3xl"
          />
          <div
            class="absolute inset-0 rounded-full bg-gradient-to-t from-black/5 to-transparent pointer-events-none"
          ></div>
        </div>
      </div>

      <div class="space-y-8 md:col-span-2">
        <div>
          <h2 class="text-4xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
            {{ $t('about.about_me') }}
          </h2>
          <p class="text-xl text-gray-600 dark:text-gray-300 leading-relaxed font-light">
            {{ $t('about.description') }}
          </p>
        </div>

        <div class="space-y-3">
          <h3
            class="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider"
          >
            {{ $t('about.technologies') }}
          </h3>
          <div class="flex flex-wrap gap-2">
            <UBadge
              v-for="(skill, index) in about.skills"
              :key="skill"
              color="green"
              variant="soft"
              class="px-4 py-2 text-sm font-medium shadow-sm backdrop-blur-sm border border-green-100 dark:border-green-800/50 hover:shadow-md hover:scale-105 transition-all duration-300"
              :style="`animation-delay: ${index * 100}ms`"
            >
              {{ skill }}
            </UBadge>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
