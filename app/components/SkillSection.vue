<script setup>
const skills = {
  frontend: ['Angular', 'Nuxt.js', 'TypeScript', 'Tailwind CSS', 'CSS'],
  backend: ['Symfony', 'API Platform', 'Python', 'Go', 'Node.js'],
  tools: ['Docker', 'Git', 'PostgreSQL', 'MYSQL', 'VPS', 'CI/CD'],
}
</script>

<template>
  <section
    id="skills"
    class="min-h-screen flex py-24 flex-col items-center justify-center text-gray-900 dark:text-gray-100"
  >
    <div class="max-w-6xl mx-auto px-6">
      <div class="text-center mb-20">
        <h2 class="text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
          {{ $t('skills.title') }}
        </h2>
        <p
          class="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-light leading-relaxed"
        >
          {{ $t('skills.description') }}
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-16">
        <div class="text-center space-y-8">
          <div>
            <h3 class="text-2xl font-semibold mb-3">Frontend</h3>
            <p class="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-8">
              {{ $t('skills.interface') }}
            </p>
          </div>
          <div class="space-y-4">
            <UBadge
              v-for="skill in skills.frontend"
              :key="skill"
              color="green"
              variant="soft"
              size="lg"
              class="px-6 py-3 text-base font-medium shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 backdrop-blur-sm border border-green-100 dark:border-green-800/50"
            >
              {{ skill }}
            </UBadge>
          </div>
        </div>

        <div class="text-center space-y-8">
          <div>
            <h3 class="text-2xl font-semibold mb-3">Backend</h3>
            <p class="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-8">
              {{ $t('skills.api') }}
            </p>
          </div>
          <div class="space-y-4">
            <UBadge
              v-for="skill in skills.backend"
              :key="skill"
              color="blue"
              variant="soft"
              size="lg"
              class="px-6 py-3 text-base font-medium shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 backdrop-blur-sm border border-blue-100 dark:border-blue-800/50"
            >
              {{ skill }}
            </UBadge>
          </div>
        </div>

        <div class="text-center space-y-8">
          <div>
            <h3 class="text-2xl font-semibold mb-3">{{ $t('skills.tools') }}</h3>
            <p class="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-8">
              {{ $t('skills.devops') }}
            </p>
          </div>
          <div class="space-y-4">
            <UBadge
              v-for="skill in skills.tools"
              :key="skill"
              color="orange"
              variant="soft"
              size="lg"
              class="px-6 py-3 text-base font-medium shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 backdrop-blur-sm border border-orange-100 dark:border-orange-800/50"
            >
              {{ skill }}
            </UBadge>
          </div>
        </div>
      </div>
    </div>
    <div class="max-w-4xl mx-auto mt-16 space-y-10">
      <div
        class="bg-white dark:bg-gray-900/50 rounded-2xl p-8 shadow-sm border border-gray-200 dark:border-gray-800"
      >
        <p class="text-lg leading-relaxed font-light text-gray-700 dark:text-gray-300 mb-6">
          {{ $t('skills.fullstack') }}
        </p>

        <p class="text-lg leading-relaxed font-light text-gray-700 dark:text-gray-300 mb-6">
          {{ $t('skills.preferencesIntro') }}
        </p>

        <ul class="list-disc pl-6 space-y-3 marker:text-green-500 text-gray-700 dark:text-gray-300">
          <li>{{ $t('skills.preferences.api') }}</li>
          <li>{{ $t('skills.preferences.architecture') }}</li>
          <li>{{ $t('skills.preferences.servers') }}</li>
          <li>{{ $t('skills.preferences.project') }}</li>
        </ul>
      </div>

      <div
        class="bg-white dark:bg-gray-900/50 rounded-2xl p-8 shadow-sm border border-gray-200 dark:border-gray-800"
      >
        <p class="text-lg leading-relaxed font-light text-gray-700 dark:text-gray-300 mb-6">
          {{ $t('skills.interest') }}
        </p>

        <p class="text-lg leading-relaxed font-light text-gray-700 dark:text-gray-300 mb-6">
          {{ $t('skills.ambitionIntro') }}
        </p>

        <ul class="list-disc pl-6 space-y-3 marker:text-green-500 text-gray-700 dark:text-gray-300">
          <li>{{ $t('skills.ambitions.architecture') }}</li>
          <li>{{ $t('skills.ambitions.tools') }}</li>
          <li>{{ $t('skills.ambitions.solutions') }}</li>
        </ul>
      </div>
    </div>
  </section>
</template>
