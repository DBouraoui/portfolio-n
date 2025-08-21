<template>
  <section id="projects" class="py-24 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
    <div class="max-w-7xl mx-auto px-6">
      <div class="text-center mb-20">
        <h1 class="text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
          {{ $t('projects.title') }}
        </h1>
        <p
          class="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-light leading-relaxed"
        >
          {{ $t('projects.description') }}
        </p>
      </div>

      <div
        class="mb-12 bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200/50 dark:border-gray-700/50"
      >
        <div class="flex flex-col lg:flex-row gap-6 items-center justify-between">
          <div class="flex flex-wrap gap-3">
            <UButton
              :variant="selectedTag === 'all' ? 'solid' : 'soft'"
              :color="selectedTag === 'all' ? 'primary' : 'gray'"
              size="sm"
              @click="selectedTag = 'all'"
              class="transition-all duration-200"
            >
              Tous les projets ({{ projects.length }})
            </UButton>
            <UButton
              v-for="tag in uniqueTags"
              :key="tag"
              :variant="selectedTag === tag ? 'solid' : 'soft'"
              :color="selectedTag === tag ? 'primary' : 'gray'"
              size="sm"
              @click="selectedTag = tag"
              class="transition-all duration-200"
            >
              {{ tag }} ({{ getProjectCountByTag(tag) }})
            </UButton>
          </div>
        </div>
      </div>

      <div class="mb-8 text-center">
        <p class="text-gray-600 dark:text-gray-400">
          <span class="font-semibold text-primary-600 dark:text-primary-400">{{
            filteredProjects.length
          }}</span>
          projet{{ filteredProjects.length > 1 ? 's' : '' }}
          {{ selectedTag !== 'all' ? 'correspondant aux filtres' : 'au total' }}
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(project, index) in filteredProjects"
          :key="index"
          class="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-200/50 dark:border-gray-700/50 hover:scale-[1.02]"
        >
          <div class="relative overflow-hidden">
            <img
              :src="project.images.card"
              :alt="project.title"
              class="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            ></div>
          </div>

          <div class="p-6 space-y-4">
            <div>
              <h2
                class="text-xl font-semibold mb-2 group-hover:text-green-500 transition-colors duration-300"
              >
                {{ project.title }}
              </h2>
              <p class="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                {{ project.subTitle }}
              </p>
            </div>

            <div class="flex flex-wrap gap-2">
              <UBadge
                v-for="(tag, tIndex) in project.tags.slice(0, 3)"
                :key="tIndex"
                variant="soft"
                size="sm"
                class="px-3 py-1 text-xs font-medium"
              >
                {{ tag }}
              </UBadge>
              <UBadge
                v-if="project.tags.length > 3"
                variant="soft"
                size="sm"
                class="px-3 py-1 text-xs"
              >
                +{{ project.tags.length - 3 }}
              </UBadge>
            </div>

            <div class="pt-4">
              <UDrawer direction="right">
                <UButton
                  variant="soft"
                  size="lg"
                  class="w-full justify-center"
                  icon="i-heroicons-eye"
                >
                  Voir le projet
                </UButton>
                <template #content>
                  <div
                    class="p-4 sm:p-8 w-full sm:min-w-[32rem] sm:max-w-4xl h-full overflow-y-auto bg-gradient-to-br from-white to-gray-50/80 dark:from-gray-900 dark:to-gray-800/50"
                  >
                    <div
                      class="mb-6 sm:mb-10 p-4 sm:p-6 -m-4 sm:-m-6 bg-gradient-to-r from-green-50/50 to-blue-50/30 dark:from-green-900/20 dark:to-blue-900/10 rounded-xl border border-green-100/50 dark:border-green-800/30"
                    >
                      <h2
                        class="text-2xl sm:text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text"
                      >
                        {{ project.title }}
                      </h2>
                      <p
                        class="text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed"
                      >
                        {{ project.subTitle }}
                      </p>
                    </div>

                    <div class="mb-6 sm:mb-10 p-1 rounded-2xl">
                      <UCarousel
                        v-slot="{ item }"
                        :items="project.images.carousel"
                        arrows
                        dots
                        :prev="{ color: 'primary' }"
                        :next="{ variant: 'solid' }"
                        class="w-full max-w-lg mx-auto"
                      >
                        <img
                          :src="item"
                          class="w-full h-60 sm:h-80 object-cover rounded-lg"
                          :alt="project.title"
                        />
                      </UCarousel>
                    </div>

                    <div
                      class="mb-6 sm:mb-10 p-4 sm:p-6 bg-white/80 dark:bg-gray-800/80 rounded-xl border border-gray-200/60 dark:border-gray-700/60 shadow-sm backdrop-blur-sm"
                    >
                      <h3
                        class="text-lg sm:text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100 flex items-center"
                      >
                        <span
                          class="w-1 h-6 bg-gradient-to-b from-green-500 to-blue-500 rounded-full mr-3"
                        ></span>
                        Description
                      </h3>
                      <p
                        class="text-gray-700 dark:text-gray-300 leading-relaxed text-base sm:text-lg"
                      >
                        {{ project.description }}
                      </p>
                    </div>

                    <div class="grid grid-cols-1 gap-4 sm:gap-6 mb-6 sm:mb-10">
                      <div class="space-y-4 sm:space-y-6">
                        <div
                          class="p-4 sm:p-5 bg-blue-50/50 dark:bg-blue-900/20 rounded-xl border border-blue-100/60 dark:border-blue-800/40"
                        >
                          <h4
                            class="font-semibold text-blue-800 dark:text-blue-200 mb-3 text-sm uppercase tracking-wider flex items-center"
                          >
                            <span class="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                            Technologies
                          </h4>
                          <div class="flex flex-wrap gap-2">
                            <UBadge
                              v-for="tech in project.technologies"
                              :key="tech"
                              variant="soft"
                              class="px-2 py-1 sm:px-3 sm:py-1.5 shadow-sm text-xs sm:text-sm"
                            >
                              {{ tech }}
                            </UBadge>
                          </div>
                        </div>

                        <div
                          class="p-4 sm:p-5 bg-purple-50/50 dark:bg-amber-900/20 rounded-xl border border-amber-100/60 dark:border-amber-800/40"
                        >
                          <h4
                            class="font-semibold text-amber-800 dark:text-amber-200 mb-4 text-sm uppercase tracking-wider flex items-center"
                          >
                            <span class="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>
                            Compétences clés
                          </h4>

                          <div class="space-y-3">
                            <div
                              v-for="skill in project.caliopiSkills"
                              :key="skill.id"
                              class="group relative p-3 bg-white/60 dark:bg-gray-800/60 rounded-lg border border-amber-100/50 dark:border-amber-800/50 hover:bg-white/80 dark:hover:bg-gray-800/80 transition-all duration-200"
                            >
                              <div class="flex items-start justify-between mb-2">
                                <UBadge
                                  variant="soft"
                                  color="amber"
                                  class="px-2 py-1 text-xs font-mono tracking-tight"
                                >
                                  {{ skill.id }}
                                </UBadge>

                                <div
                                  class="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                                >
                                  <UIcon
                                    name="i-heroicons-information-circle"
                                    class="w-4 h-4 text-amber-500"
                                  />
                                </div>
                              </div>

                              <p class="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                                {{ skill.description }}
                              </p>
                            </div>
                          </div>
                        </div>

                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                          <div
                            class="p-4 sm:p-5 bg-emerald-50/50 dark:bg-emerald-900/20 rounded-xl border border-emerald-100/60 dark:border-emerald-800/40"
                          >
                            <h4
                              class="font-semibold text-emerald-800 dark:text-emerald-200 mb-3 text-sm uppercase tracking-wider flex items-center"
                            >
                              <span class="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>
                              Date de création
                            </h4>
                            <p
                              class="text-gray-700 dark:text-gray-300 text-base sm:text-lg font-medium"
                            >
                              {{ project.creationDate }}
                            </p>
                          </div>

                          <div
                            class="p-4 sm:p-5 bg-orange-50/50 dark:bg-orange-900/20 rounded-xl border border-orange-100/60 dark:border-orange-800/40"
                          >
                            <h4
                              class="font-semibold text-orange-800 dark:text-orange-200 mb-3 text-sm uppercase tracking-wider flex items-center"
                            >
                              <span class="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                              Durée de développement
                            </h4>
                            <p
                              class="text-gray-700 dark:text-gray-300 text-base sm:text-lg font-medium"
                            >
                              {{ project.timeToDev }}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      class="flex flex-col gap-3 sm:gap-4 pt-6 sm:pt-8 border-t border-gradient-to-r from-green-200/50 via-blue-200/50 to-amber-200/50 dark:from-green-800/30 dark:via-blue-800/30 dark:to-amber-800/30"
                    >
                      <UButton
                        v-if="project.links.github"
                        :href="project.links.github"
                        target="_blank"
                        color="neutral"
                        variant="solid"
                        size="lg"
                        icon="i-simple-icons-github"
                        class="w-full justify-center shadow-md hover:shadow-lg transition-shadow duration-300"
                      >
                        Voir sur GitHub
                      </UButton>
                      <UButton
                        v-if="project.links.live"
                        :href="project.links.live"
                        target="_blank"
                        color="success"
                        variant="solid"
                        size="lg"
                        icon="i-heroicons-arrow-top-right-on-square"
                        class="w-full justify-center shadow-md hover:shadow-lg transition-shadow duration-300"
                      >
                        Voir le site
                      </UButton>
                    </div>
                  </div>
                </template>
              </UDrawer>
            </div>
          </div>
        </div>
      </div>

      <div v-if="filteredProjects.length === 0" class="text-center py-12">
        <UIcon name="i-heroicons-folder-open" class="text-6xl text-gray-400 mb-4" />
        <h3 class="text-xl font-semibold text-gray-600 dark:text-gray-400 mb-2">
          Aucun projet trouvé
        </h3>
        <p class="text-gray-500 dark:text-gray-500 mb-4">
          Essayez de modifier vos filtres pour voir plus de projets
        </p>
        <UButton variant="soft" @click="resetFilters()"> Réinitialiser les filtres </UButton>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, computed, watch } from 'vue'
import { useI18n } from 'vue-i18n'
const { locale } = useI18n()

interface Project {
  title: string
  subTitle: string
  description: string
  tags: string[]
  technologies: string[]
  creationDate: string
  timeToDev: string
  caliopiSkills: CaliopiSkills[]
  links: { github?: string; live?: string }
  images: { card: string; carousel: string[] }
}

interface CaliopiSkills {
  id: string
  description: string
}

const projects = ref<Project[]>([])
const selectedTag = ref<string>('all')

const loadProjects = async (lang: string) => {
  try {
    const res = await fetch(`/projects-${lang}.json`)
    projects.value = await res.json()
  } catch (error) {
    console.error('Erreur lors du chargement des projets:', error)
  }
}

const uniqueTags = computed(() => {
  const tags = projects.value.flatMap((project) => project.tags)
  return [...new Set(tags)].sort()
})

const filteredProjects = computed(() => {
  let filtered = projects.value

  if (selectedTag.value !== 'all') {
    filtered = filtered.filter((project) => project.tags.includes(selectedTag.value))
  }

  return filtered
})

const getProjectCountByTag = (tag: string) => {
  return projects.value.filter((project) => project.tags.includes(tag)).length
}

const resetFilters = () => {
  selectedTag.value = 'all'
}

onMounted(() => {
  loadProjects(locale.value)
})

watch(locale, (newLocale) => {
  loadProjects(newLocale)
  resetFilters()
})
</script>
