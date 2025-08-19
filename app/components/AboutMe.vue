<template>
  <section id="about" class="min-h-screen flex items-center justify-center px-8 py-32">
    <div class="max-w-3xl w-full space-y-12">
      <div class="flex flex-col md:flex-row items-center gap-12 md:gap-16">
        <div class="relative flex-shrink-0">
          <div class="group perspective-1000">
            <img
              src="/head.png"
              alt="Photo de profil"
              class="w-56 h-56 md:w-64 md:h-64 rounded-full object-cover transition-transform duration-700 group-hover:scale-105 group-hover:rotate-1"
            />
          </div>
        </div>

        <div class="space-y-6 text-center md:text-left">
          <h2 class="text-3xl md:text-4xl font-light text-gray-900 dark:text-white tracking-tight">
            {{ $t('about.about_me') }}
          </h2>

          <p
            class="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-prose font-light"
          >
            {{ $t('about.description') }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
.perspective-1000 {
  perspective: 1000px;
}
</style>
