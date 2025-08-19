<template>
  <section
    id="contact"
    class="min-h-screen flex items-center justify-center px-4 sm:px-8 py-16 sm:py-32"
  >
    <div class="max-w-4xl w-full space-y-12">
      <div class="text-center mx-auto">
        <h2
          class="text-3xl sm:text-4xl font-light text-gray-900 dark:text-white tracking-tight mb-3"
        >
          {{ $t('contact.title') }}
        </h2>
        <p
          class="text-base sm:text-lg text-gray-600 dark:text-gray-300 font-light max-w-md mx-auto"
        >
          {{ $t('contact.subtitle') }}
        </p>
      </div>

      <div class="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
        <div class="w-full lg:w-2/3">
          <UForm :schema="schema" :state="form" @submit="onSubmit" class="w-full space-y-6">
            <UFormField
              name="name"
              :label="$t('contact.form.name')"
              class="block text-gray-700 dark:text-gray-200"
            >
              <UInput
                v-model="form.name"
                :placeholder="$t('contact.form.name')"
                size="xl"
                variant="none"
                class="w-full bg-transparent border-b border-gray-300 dark:border-gray-700 focus:border-gray-900 dark:focus:border-white transition-colors duration-300"
                :ui="{ base: 'focus:ring-0' }"
              />
            </UFormField>

            <UFormField
              name="email"
              :label="$t('contact.form.email')"
              class="block text-gray-700 dark:text-gray-200"
            >
              <UInput
                v-model="form.email"
                type="email"
                :placeholder="$t('contact.form.email')"
                size="xl"
                variant="none"
                class="w-full bg-transparent border-b border-gray-300 dark:border-gray-700 focus:border-gray-900 dark:focus:border-white transition-colors duration-300"
                :ui="{ base: 'focus:ring-0' }"
              />
            </UFormField>

            <UFormField
              name="message"
              :label="$t('contact.form.message')"
              class="block text-gray-700 dark:text-gray-200"
            >
              <UTextarea
                v-model="form.message"
                :placeholder="$t('contact.form.message')"
                size="xl"
                variant="none"
                :rows="5"
                class="w-full bg-transparent border-b border-gray-300 dark:border-gray-700 focus:border-gray-900 dark:focus:border-white transition-colors duration-300 resize-none"
                :ui="{ base: 'focus:ring-0' }"
              />
            </UFormField>

            <div class="flex justify-end pt-2">
              <UButton
                type="submit"
                size="lg"
                class="bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors duration-300"
              >
                {{ $t('contact.form.send') }}
              </UButton>
            </div>

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
          </UForm>
        </div>

        <div class="w-full lg:w-1/3 space-y-6">
          <div class="space-y-4">
            <h3 class="text-lg font-medium text-gray-900 dark:text-white">
              {{ $t('contact.info') }}
            </h3>
            <div class="space-y-3">
              <div class="flex items-center gap-3">
                <UIcon name="i-heroicons-envelope" class="w-5 h-5 text-gray-500" />
                <a
                  href="mailto:contact@dbouraoui.fr"
                  class="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  {{ $t('common.email') }}
                </a>
              </div>
              <div class="flex items-center gap-3">
                <UIcon name="i-heroicons-map-pin" class="w-5 h-5 text-gray-500" />
                <span class="text-gray-600 dark:text-gray-300">
                  {{ $t('contact.location') }}
                </span>
              </div>
            </div>

            <div class="pt-6">
              <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-3">
                {{ $t('contact.social') }}
              </h3>
              <div class="flex gap-4">
                <UButton
                  v-for="(social, index) in socials"
                  :key="index"
                  :icon="social.icon"
                  color="gray"
                  variant="ghost"
                  :to="social.link"
                  target="_blank"
                  class="hover:bg-gray-100 dark:hover:bg-gray-800"
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
  email: string().email($t('contact.form.valid_email')).required($t('contact.form.required.email')),
  message: string().required($t('contact.form.required.message')),
})

const form = ref({
  name: '',
  email: '',
  message: '',
})

const submitStatus = ref(null)

const socials = [
  { icon: 'i-heroicons-globe-alt', link: 'https://votresite.com' },
  { icon: 'i-heroicons-code-bracket', link: 'https://github.com/votreuser' },
  { icon: 'i-heroicons-photo', link: 'https://instagram.com/votreuser' },
  { icon: 'i-heroicons-chat-bubble-left-ellipsis', link: 'https://twitter.com/votreuser' },
]

const onSubmit = async () => {
  submitStatus.value = null
  try {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    console.log('Form submitted:', form.value)
    submitStatus.value = 'success'
    form.value = { name: '', email: '', message: '' }
  } catch (error) {
    submitStatus.value = 'error'
  }
}
</script>
