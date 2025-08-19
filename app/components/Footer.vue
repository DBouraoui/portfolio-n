<template>
  <footer class="bg-white/5 dark:bg-gray-900 border-t border-white/10 dark:border-gray-700 py-8">
    <div
      class="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left"
    >
      <div class="space-y-2">
        <h2 class="font-semibold text-lg text-gray-900 dark:text-gray-100">
          {{ $t('common.navigation') }}
        </h2>
        <ul class="space-y-1">
          <li>
            <NuxtLink :to="{ path: '/', hash: '#hero' }" class="hover:text-green-400 transition">{{
              $t('common.home')
            }}</NuxtLink>
          </li>
          <li>
            <NuxtLink :to="{ path: '/', hash: '#about' }" class="hover:text-green-400 transition">{{
              $t('common.about')
            }}</NuxtLink>
          </li>
          <li>
            <NuxtLink
              :to="{ path: '/', hash: '#graduation' }"
              class="hover:text-green-400 transition"
              >{{ $t('common.graduation') }}</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              :to="{ path: '/', hash: '#skills' }"
              class="hover:text-green-400 transition"
              >{{ $t('common.skills') }}</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              :to="{ path: '/', hash: '#projects' }"
              class="hover:text-green-400 transition"
              >{{ $t('common.project') }}</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              :to="{ path: '/', hash: '#contact' }"
              class="hover:text-green-400 transition"
              >{{ $t('common.contact') }}</NuxtLink
            >
          </li>
        </ul>
      </div>

      <div>
        <h2 class="font-semibold text-lg text-gray-900 dark:text-gray-100 mb-2">
          {{ $t('common.reseau') }}
        </h2>
        <div class="flex justify-center md:justify-start gap-4">
          <NuxtLink
            to="https://github.com/DBouraoui"
            target="_blank"
            aria-label="GitHub"
            class="hover:text-green-400 transition"
          >
            <p>Perso</p>
            <Icon name="mdi:github" size="28" />
          </NuxtLink>
          <NuxtLink
              to="https://github.com/dylanepitech"
              target="_blank"
              aria-label="GitHub"
              class="hover:text-green-400 transition"
          >
            <p>Etudiant</p>
            <Icon name="mdi:github" size="28" />
          </NuxtLink>
          <NuxtLink
            to="https://www.linkedin.com/in/dylan-bouraoui-942039259"
            target="_blank"
            aria-label="LinkedIn"
            class="hover:text-green-400 transition"
          >
            <Icon name="mdi:linkedin" size="28" />
          </NuxtLink>
        </div>
      </div>

      <div class="text-gray-400 dark:text-gray-500 text-sm md:text-right">
        © {{ new Date().getFullYear() }} {{ $t('common.full_name') }}.
        {{ $t('footer.all_right_reserved') }}.
      </div>
    </div>
  </footer>
</template>
<script setup lang="ts">
</script>
