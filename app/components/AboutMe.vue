<template>
  <section class="min-h-screen flex flex-col items-center justify-center px-8">
    <div class="flex justify-center relative mb-8 group">
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

    <div class="max-w-3xl text-center space-y-6">
      <h2 class="text-4xl font-bold text-gray-900 dark:text-white tracking-tight">
        {{ $t('about.about_me') }}
      </h2>
      <p class="text-xl text-gray-600 dark:text-gray-300 leading-relaxed font-light">
        {{ $t('about.description') }}
      </p>
    </div>
  </section>
</template>
