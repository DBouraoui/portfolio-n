<template>
  <section
    id="contact"
    class="min-h-screen flex items-center justify-center w-screen px-4 sm:px-8 py-16 sm:py-32"
  >
    <div class="max-w-4xl w-full space-y-12 px-4 sm:px-6 lg:px-8">
      <div class="text-center mx-auto">
        <h2
          class="text-3xl sm:text-4xl font-light text-gray-900 dark:text-white tracking-tight mb-3"
        >
          {{ $t('contact.title') }}
        </h2>
        <p
          class="text-base sm:text-lg text-gray-600 dark:text-gray-300 font-light max-w-2xl mx-auto"
        >
          {{ $t('contact.subtitle') }}
        </p>
      </div>
      <div class="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start w-full">
        <div class="w-full lg:w-2/3 space-y-8">
          <UForm :schema="schema" :state="form" class="space-y-8" @submit="onSubmit">
            <UFormField
              name="name"
              :label="$t('contact.form.name')"
              class="block text-gray-700 dark:text-gray-200 text-lg"
            >
              <UInput
                v-model="form.name"
                :placeholder="$t('contact.form.name')"
                size="xl"
                variant="none"
                class="w-full bg-transparent border-b border-gray-300 dark:border-gray-700 focus:border-gray-900 dark:focus:border-white transition-colors duration-300 py-3 text-lg"
                :ui="{ base: 'focus:ring-0' }"
              />
            </UFormField>
            <UFormField
              name="email"
              :label="$t('contact.form.email')"
              class="block text-gray-700 dark:text-gray-200 text-lg"
            >
              <UInput
                v-model="form.email"
                type="email"
                :placeholder="$t('contact.form.email')"
                size="xl"
                variant="none"
                class="w-full bg-transparent border-b border-gray-300 dark:border-gray-700 focus:border-gray-900 dark:focus:border-white transition-colors duration-300 py-3 text-lg"
                :ui="{ base: 'focus:ring-0' }"
              />
            </UFormField>
            <UFormField
              name="message"
              :label="$t('contact.form.message')"
              class="block text-gray-700 dark:text-gray-200 text-lg"
            >
              <UTextarea
                v-model="form.message"
                :placeholder="$t('contact.form.message')"
                size="xl"
                variant="none"
                :rows="7"
                class="w-full bg-transparent border-b border-gray-300 dark:border-gray-700 focus:border-gray-900 dark:focus:border-white transition-colors duration-300 resize-none py-3 text-lg"
                :ui="{ base: 'focus:ring-0' }"
              />
            </UFormField>
            <div class="flex justify-end pt-4">
              <UButton type="submit" size="md" color="primary" class="cursor-pointer">
                {{ $t('contact.form.send') }}
              </UButton>
            </div>
            <div class="mt-6">
              <UAlert
                v-if="submitStatus === 'success'"
                icon="i-heroicons-check-circle"
                :title="$t('contact.form.success')"
                color="green"
                variant="soft"
                class="mt-4"
              />
              <UAlert
                v-if="submitStatus === 'error'"
                icon="i-heroicons-exclamation-circle"
                :title="$t('contact.form.error')"
                color="red"
                variant="soft"
                class="mt-4"
              />
            </div>
          </UForm>
        </div>
        <div class="w-full lg:w-1/3 space-y-8 pt-8 lg:pt-0">
          <div class="space-y-6">
            <h3 class="text-xl font-medium text-gray-900 dark:text-white">
              {{ $t('contact.info') }}
            </h3>
            <div class="space-y-5">
              <div class="flex items-start gap-4">
                <div class="flex-shrink-0">
                  <UIcon name="i-heroicons-envelope" class="w-6 h-6 text-gray-500" />
                </div>
                <a
                  href="mailto:contact@dbouraoui.fr"
                  class="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors text-lg"
                >
                  {{ $t('common.email') }}
                </a>
              </div>
              <div class="flex items-start gap-4">
                <div class="flex-shrink-0">
                  <UIcon name="i-heroicons-map-pin" class="w-6 h-6 text-gray-500" />
                </div>
                <span class="text-gray-600 dark:text-gray-300 text-lg">
                  {{ $t('contact.location') }}
                </span>
              </div>
              <div class="flex items-start gap-4">
                <div class="flex-shrink-0">
                  <UIcon name="i-heroicons-document-arrow-down" class="w-6 h-6 text-gray-500" />
                </div>
                <a
                  class="text-gray-600 dark:text-gray-300 text-lg"
                  href="/Dbouraoui.pdf"
                  target="_blank"
                >
                  {{ $t('contact.cv') }}
                </a>
              </div>
            </div>
            <div class="pt-6">
              <h3 class="text-xl font-medium text-gray-900 dark:text-white mb-4">
                {{ $t('contact.social') }}
              </h3>
              <div class="flex gap-5">
                <UButton
                  v-for="(social, index) in socials"
                  :key="index"
                  :icon="social.icon"
                  color="gray"
                  variant="ghost"
                  :to="social.link"
                  target="_blank"
                  class="hover:bg-gray-100 dark:hover:bg-gray-800 p-3"
                  :ui="{ rounded: 'rounded-full' }"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { object, string } from 'yup'
const schema = object({
  name: string().required($t('contact.form.required.name')),
  email: string()
    .email($t('contact.form.required.valid_email'))
    .required($t('contact.form.required.email')),
  message: string().required($t('contact.form.required.message')),
})
const form = ref({
  name: '',
  email: '',
  message: '',
})
const submitStatus = ref(null)
const socials = [
  { icon: 'i-lucide-linkedin', link: 'https://www.linkedin.com/in/dylan-bouraoui-942039259' },
  { icon: 'i-lucide-github', link: 'https://github.com/DBouraoui' },
]
const onSubmit = async () => {
  submitStatus.value = null
  try {
    const res = await $fetch('/api/contact', {
      method: 'POST',
      body: form.value,
    })

    if (res.status === 'success') {
      submitStatus.value = 'success'
      form.value = { name: '', email: '', message: '' }
    } else {
      submitStatus.value = 'error'
    }
  } catch (err) {
    submitStatus.value = 'error'
  }
}
</script>
