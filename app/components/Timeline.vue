<script setup>
const timeline = [
  {
    date: 'timeline.items.0.date',
    title: 'timeline.items.0.title',
    subtitle: 'timeline.items.0.subtitle',
    period: '13 Nov 2023 - 23 Sep 2024',
    type: 'school',
    description: 'timeline.items.0.description',
    details: [
      'timeline.items.0.details.0',
      'timeline.items.0.details.1',
      'timeline.items.0.details.2',
      'timeline.items.0.details.3',
    ],
  },
  {
    date: 'timeline.items.1.date',
    title: 'timeline.items.1.title',
    subtitle: 'timeline.items.1.subtitle',
    period: '23 Sep 2024 - 14 Nov 2025',
    type: 'work',
    description: 'timeline.items.1.description',
    details: [
      'timeline.items.1.details.0',
      'timeline.items.1.details.1',
      'timeline.items.1.details.2',
      'timeline.items.1.details.3',
    ],
  },
  {
    date: 'timeline.items.2.date',
    title: 'timeline.items.2.title',
    subtitle: 'timeline.items.2.subtitle',
    period: 'Future',
    type: 'school',
    description: 'timeline.items.2.description',
    details: [
      'timeline.items.2.details.0',
      'timeline.items.2.details.1',
      'timeline.items.2.details.2',
      'timeline.items.2.details.3',
    ],
  },
  {
    date: 'timeline.items.3.date',
    title: 'timeline.items.3.title',
    subtitle: 'timeline.items.3.subtitle',
    period: 'Future',
    type: 'work',
    description: 'timeline.items.3.description',
    details: [
      'timeline.items.3.details.0',
      'timeline.items.3.details.1',
      'timeline.items.3.details.2',
      'timeline.items.3.details.3',
    ],
  },
]
</script>

<template>
  <section
    id="graduation"
    class="min-h-screen flex flex-col items-center justify-center py-6 text-gray-900 dark:text-gray-100"
  >
    <div class="max-w-4xl mx-auto px-6">
      <div class="text-center mb-20">
        <h2 class="text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
          {{ $t('timeline.title') }}
        </h2>
        <p
          class="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-light leading-relaxed"
        >
          {{ $t('timeline.description') }}
        </p>
      </div>

      <div class="relative">
        <div
          class="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-400 to-blue-500"
        ></div>

        <div class="space-y-12">
          <div
            v-for="(item, index) in timeline"
            :key="index"
            class="relative flex items-start group"
          >
            <div class="relative z-10 flex-shrink-0">
              <div
                :class="[
                  'w-16 h-16 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-110',
                  item.type === 'school' ? 'bg-green-500' : 'bg-blue-500',
                ]"
              >
                <svg
                  v-if="item.type === 'school'"
                  class="w-8 h-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"
                  />
                </svg>
                <svg v-else class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fill-rule="evenodd"
                    d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                    clip-rule="evenodd"
                  />
                  <path
                    d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"
                  />
                </svg>
              </div>
            </div>

            <div
              :class="[
                'ml-8 flex-1 bg-white dark:bg-gray-900 border rounded-xl shadow-lg p-8 group-hover:shadow-xl transition-all duration-300',
                item.type === 'school' ? 'border-emerald-500' : 'border-blue-800',
              ]"
            >
              <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                <div>
                  <h3 class="text-2xl font-semibold mb-1 flex items-center gap-2">
                    {{ $t(item.title) }}
                    <span
                      v-if="item.period === 'Future'"
                      class="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-blue-700 dark:bg-orange-800 dark:text-blue-200"
                    >
                      {{ $t('timeline.future') }}
                    </span>
                  </h3>
                  <p class="text-lg text-gray-600 dark:text-gray-300">
                    {{ $t(item.subtitle) }}
                  </p>
                </div>
                <div class="mt-2 sm:mt-0">
                  <span
                    class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                  >
                    {{ $t(item.date) }}
                  </span>
                </div>
              </div>

              <div class="mb-4">
                <span
                  class="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                >
                  {{ item.period }}
                </span>
              </div>

              <p class="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                {{ $t(item.description) }}
              </p>

              <div class="space-y-2">
                <div
                  v-for="detail in item.details"
                  :key="detail"
                  class="flex items-center text-sm text-gray-600 dark:text-gray-300"
                >
                  <div class="w-2 h-2 bg-green-400 rounded-full mr-3 flex-shrink-0"></div>
                  {{ $t(detail) }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
