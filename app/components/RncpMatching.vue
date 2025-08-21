<template>
  <div v-if="loading" class="max-w-6xl mx-auto p-6">
    <div class="flex items-center justify-center h-64">
      <div class="text-center">
        <UIcon
          name="i-heroicons-arrow-path"
          class="w-8 h-8 animate-spin mx-auto mb-4 text-blue-500"
        />
        <p class="text-gray-500 dark:text-gray-400">Chargement des données...</p>
      </div>
    </div>
  </div>

  <div v-else class="max-w-6xl mx-auto p-6 space-y-8">
    <div
      class="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-6 border border-blue-100/50 dark:border-blue-800/30"
    >
      <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 class="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
            Compétences Caliopi
          </h2>
          <p class="text-gray-600 dark:text-gray-400">Validation des compétences par les projets</p>
        </div>

        <div class="flex gap-4">
          <div class="text-center px-4 py-2 bg-white/60 dark:bg-gray-800/60 rounded-lg">
            <div class="text-2xl font-bold text-green-600">{{ validatedSkillsCount }}</div>
            <div class="text-xs text-gray-500 uppercase tracking-wide">Validées</div>
          </div>
          <div class="text-center px-4 py-2 bg-white/60 dark:bg-gray-800/60 rounded-lg">
            <div class="text-2xl font-bold text-orange-500">{{ notValidatedSkillsCount }}</div>
            <div class="text-xs text-gray-500 uppercase tracking-wide">Non validées</div>
          </div>
          <div class="text-center px-4 py-2 bg-white/60 dark:bg-gray-800/60 rounded-lg">
            <div class="text-2xl font-bold text-blue-500">{{ skills.length }}</div>
            <div class="text-xs text-gray-500 uppercase tracking-wide">Total</div>
          </div>
        </div>
      </div>
    </div>

    <div class="flex flex-wrap gap-3">
      <UButton :variant="filter === 'all' ? 'solid' : 'soft'" @click="filter = 'all'" size="sm" color="primary">
        Toutes ({{ skills.length }})
      </UButton>
      <UButton
        :variant="filter === 'validated' ? 'solid' : 'soft'"
        @click="filter = 'validated'"
        color="info"
        size="sm"
      >
        Validées ({{ validatedSkillsCount }})
      </UButton>
      <UButton
        :variant="filter === 'pending' ? 'solid' : 'soft'"
        color="warning"
        @click="filter = 'pending'"
        size="sm"
      >
        Non validées ({{ notValidatedSkillsCount }})
      </UButton>
    </div>

    <div v-for="block in skillBlocks" :key="block.code" class="space-y-4">
      <h3
        class="text-xl font-semibold text-gray-800 dark:text-gray-200 border-b border-gray-200 dark:border-gray-700 pb-2"
      >
        Bloc {{ block.code.split('BC')[1] }}: {{ getBlockTitle(block.code) }}
      </h3>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div
          v-for="skill in block.skills.filter(
            (s) =>
              filter === 'all' ||
              (filter === 'validated' && isSkillValidated(s.id)) ||
              (filter === 'pending' && !isSkillValidated(s.id))
          )"
          :key="skill.id"
          class="p-4 border rounded-lg transition-all hover:shadow-md"
          :class="
            isSkillValidated(skill.id)
              ? 'border-green-200 bg-green-50 dark:bg-green-900/20'
              : 'border-orange-200 bg-orange-50 dark:bg-orange-900/20'
          "
        >
          <div class="flex items-start justify-between mb-2">
            <div class="flex items-center gap-2">
              <UIcon
                :name="
                  isSkillValidated(skill.id) ? 'i-heroicons-check-circle' : 'i-heroicons-x-circle'
                "
                :class="isSkillValidated(skill.id) ? 'text-green-500' : 'text-orange-500'"
              />
              <span class="font-medium">{{ skill.id }}</span>
            </div>
            <UBadge
              :color="isSkillValidated(skill.id) ? 'green' : 'orange'"
              variant="soft"
              class="text-xs"
            >
              {{ isSkillValidated(skill.id) ? 'Validée' : 'Non validée' }}
            </UBadge>
          </div>

          <h4 class="font-medium mb-1">
            {{
              currentLocale === 'fr' ? skill.description : skill.description_en || skill.description
            }}
          </h4>

          <div v-if="isSkillValidated(skill.id)" class="mt-3">
            <div class="text-sm text-gray-600 dark:text-gray-400 mb-2">
              Validée par ces projets :
            </div>
            <div class="flex flex-wrap gap-2">
              <UBadge
                v-for="project in getProjectsForSkill(skill.id)"
                :key="project.title"
                variant="outline"
                class="text-xs"
              >
                {{ project.title.slice(0, 20) }}{{ project.title.length > 20 ? '...' : '' }}
              </UBadge>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()
const currentLocale = computed(() => locale.value)

interface Project {
  title: string
  caliopiSkills: Array<{
    id: string
    description: string
  }>
}

interface Skill {
  id: string
  code: string
  description: string
  description_en?: string
  bloc: string
}

interface SkillBlock {
  code: string
  skills: Skill[]
}

const loading = ref(true)
const projects = ref<Project[]>([])
const skills = ref<Skill[]>([])
const filter = ref<'all' | 'validated' | 'pending'>('all')

const loadData = async () => {
  try {
    loading.value = true

    const projectsRes = await fetch(`/projects-${locale.value}.json`)
    if (!projectsRes.ok) throw new Error('Failed to load projects')
    projects.value = await projectsRes.json()

    const skillsRes = await fetch('/rncp.json')
    if (!skillsRes.ok) throw new Error('Failed to load skills')
    const skillsData = await skillsRes.json()
    skills.value = skillsData.skills || skillsData

    console.log('Projets chargés:', projects.value)
    console.log('Compétences chargées:', skills.value)
  } catch (error) {
    console.error('Erreur de chargement:', error)
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  loadData()
})

const getBlockTitle = (blockCode: string) => {
  const blockNumber = blockCode.split('BC')[1]
  switch (blockNumber) {
    case '01':
      return 'Cadrer un projet de développement'
    case '02':
      return 'Développer une solution web'
    case '03':
      return "Assurer la qualité d'une solution web"
    default:
      return 'Bloc inconnu'
  }
}

const skillBlocks = computed((): SkillBlock[] => {
  const blocks = new Map<string, SkillBlock>()

  skills.value.forEach((skill) => {
    const blockCode = skill.bloc
    if (!blocks.has(blockCode)) {
      blocks.set(blockCode, {
        code: blockCode,
        skills: [],
      })
    }

    blocks.get(blockCode)?.skills.push(skill)
  })

  return Array.from(blocks.values()).sort((a, b) => a.code.localeCompare(b.code))
})

const isSkillValidated = (skillId: string): boolean => {
  return projects.value.some((project) =>
    project.caliopiSkills?.some((skill) => skill.id === skillId)
  )
}

const getProjectsForSkill = (skillId: string): Project[] => {
  return projects.value.filter((project) =>
    project.caliopiSkills?.some((skill) => skill.id === skillId)
  )
}

const validatedSkillsCount = computed(() => {
  return skills.value.filter((skill) => isSkillValidated(skill.id)).length
})

const notValidatedSkillsCount = computed(() => {
  return skills.value.length - validatedSkillsCount.value
})
</script>
