<template>
  <section
    id="hero"
    class="relative min-h-screen flex items-center justify-center text-gray-900 dark:text-gray-100 overflow-hidden"
  >
    <div class="max-w-4xl mx-auto px-6 text-center">
      <div class="space-y-8">
        <h1 class="text-5xl lg:text-7xl font-extrabold leading-tight">
          {{ $t('home.hello_im') }} <span class="text-green-400">{{ $t('common.full_name') }}</span>
        </h1>

        <p
          class="text-xl lg:text-2xl text-gray-900 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
        >
          {{ $t('home.developper_web_full_stack') }} <span class="text-green-400">Symfony</span>,
          <span class="text-green-400">API Platform</span>, {{ $t('common.and') }}
          <span class="text-green-400">Angular</span>.
        </p>

        <div class="flex flex-col sm:flex-row gap-4 pt-8 justify-center">
          <UButton
            size="lg"
            :to="{ path: '/', hash: '#projects' }"
            color="primary"
            variant="solid"
            class="bg-green-500 hover:bg-green-400 border-none cursor-pointer"
          >
            {{ $t('home.see_my_project') }}
          </UButton>
          <UButton
            size="lg"
            variant="ghost"
            class="border border-gray-900 hover:bg-white/10 dark:border-gray-400 dark:hover:bg-gray-700 cursor-pointer"
          >
            {{ $t('home.contact_me') }}
          </UButton>
        </div>
      </div>
    </div>
  </section>
</template>
