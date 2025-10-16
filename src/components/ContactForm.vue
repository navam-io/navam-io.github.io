<template>
  <section class="bg-gradient-to-br from-gray-50 to-white py-20">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Form Header -->
      <div class="text-center mb-12">
        <h2 class="text-4xl font-bold text-gray-900 mb-4">Let's Start a Conversation</h2>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          Fill out the form below and we'll get back to you within 24 hours to discuss how Navam can help transform your business.
        </p>
      </div>

      <!-- Contact Form -->
      <div class="bg-white rounded-3xl shadow-2xl border border-gray-100 p-8 md:p-12">
        <form @submit.prevent="handleSubmit" class="space-y-6">
          <!-- Name Field -->
          <div>
            <label for="name" class="block text-sm font-semibold text-gray-700 mb-2">
              Full Name <span class="text-red-500">*</span>
            </label>
            <input
              id="name"
              v-model="formData.name"
              type="text"
              required
              :class="[
                'w-full px-4 py-3 rounded-xl border transition-all duration-300',
                errors.name
                  ? 'border-red-300 focus:border-red-500 focus:ring-red-200'
                  : 'border-gray-200 focus:border-cyan-500 focus:ring-cyan-200'
              ]"
              :disabled="isSubmitting"
              placeholder="John Doe"
              @blur="validateField('name')"
              @input="clearError('name')"
            />
            <p v-if="errors.name" class="mt-2 text-sm text-red-600">{{ errors.name }}</p>
          </div>

          <!-- Email Field -->
          <div>
            <label for="email" class="block text-sm font-semibold text-gray-700 mb-2">
              Email Address <span class="text-red-500">*</span>
            </label>
            <input
              id="email"
              v-model="formData.email"
              type="email"
              required
              :class="[
                'w-full px-4 py-3 rounded-xl border transition-all duration-300',
                errors.email
                  ? 'border-red-300 focus:border-red-500 focus:ring-red-200'
                  : 'border-gray-200 focus:border-cyan-500 focus:ring-cyan-200'
              ]"
              :disabled="isSubmitting"
              placeholder="john@company.com"
              @blur="validateField('email')"
              @input="clearError('email')"
            />
            <p v-if="errors.email" class="mt-2 text-sm text-red-600">{{ errors.email }}</p>
          </div>

          <!-- Company Field -->
          <div>
            <label for="company" class="block text-sm font-semibold text-gray-700 mb-2">
              Company
            </label>
            <input
              id="company"
              v-model="formData.company"
              type="text"
              class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-cyan-500 focus:ring-cyan-200 transition-all duration-300"
              :disabled="isSubmitting"
              placeholder="Acme Inc."
            />
          </div>

          <!-- Interest Field -->
          <div>
            <label for="interest" class="block text-sm font-semibold text-gray-700 mb-2">
              I'm interested in <span class="text-red-500">*</span>
            </label>
            <select
              id="interest"
              v-model="formData.interest"
              required
              :class="[
                'w-full px-4 py-3 rounded-xl border transition-all duration-300',
                errors.interest
                  ? 'border-red-300 focus:border-red-500 focus:ring-red-200'
                  : 'border-gray-200 focus:border-cyan-500 focus:ring-cyan-200'
              ]"
              :disabled="isSubmitting"
              @blur="validateField('interest')"
              @change="clearError('interest')"
            >
              <option value="">Select an option...</option>
              <option value="Navam Invest">Navam Invest - Investment Intelligence</option>
              <option value="Moments">Moments - Business Analytics Dashboard</option>
              <option value="AI Advisory">AI Advisory Services</option>
              <option value="Custom Solution">Custom AI Solution</option>
              <option value="General Inquiry">General Inquiry</option>
            </select>
            <p v-if="errors.interest" class="mt-2 text-sm text-red-600">{{ errors.interest }}</p>
          </div>

          <!-- Message Field -->
          <div>
            <label for="message" class="block text-sm font-semibold text-gray-700 mb-2">
              Message <span class="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              v-model="formData.message"
              required
              rows="5"
              :class="[
                'w-full px-4 py-3 rounded-xl border transition-all duration-300 resize-none',
                errors.message
                  ? 'border-red-300 focus:border-red-500 focus:ring-red-200'
                  : 'border-gray-200 focus:border-cyan-500 focus:ring-cyan-200'
              ]"
              :disabled="isSubmitting"
              placeholder="Tell us about your project or inquiry..."
              @blur="validateField('message')"
              @input="clearError('message')"
            ></textarea>
            <p v-if="errors.message" class="mt-2 text-sm text-red-600">{{ errors.message }}</p>
          </div>

          <!-- Submit Button -->
          <div class="pt-4">
            <button
              type="submit"
              :disabled="isSubmitting"
              :class="[
                'w-full px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform',
                isSubmitting
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-700 hover:to-teal-700 text-white hover:-translate-y-0.5'
              ]"
            >
              <span v-if="!isSubmitting" class="flex items-center justify-center gap-3">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                Send Message
              </span>
              <span v-else class="flex items-center justify-center gap-3">
                <svg class="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </span>
            </button>
          </div>

          <!-- Success Message -->
          <div
            v-if="showSuccess"
            class="mt-6 p-4 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl"
          >
            <div class="flex items-start gap-3">
              <svg class="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <div>
                <p class="font-semibold text-green-900">Message sent successfully!</p>
                <p class="text-sm text-green-700 mt-1">We'll get back to you soon.</p>
              </div>
            </div>
          </div>

          <!-- Error Message -->
          <div
            v-if="showError"
            class="mt-6 p-4 bg-gradient-to-r from-red-50 to-pink-50 border border-red-200 rounded-xl"
          >
            <div class="flex items-start gap-3">
              <svg class="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <div>
                <p class="font-semibold text-red-900">Submission failed</p>
                <p class="text-sm text-red-700 mt-1">{{ errorMessage }}</p>
              </div>
            </div>
          </div>
        </form>
      </div>

      <!-- Additional Contact Info -->
      <div class="mt-12 text-center">
        <p class="text-gray-600 mb-4">Prefer email or GitHub?</p>
        <div class="flex flex-wrap gap-4 justify-center">
          <a
            href="mailto:team@navam.io"
            class="inline-flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 rounded-full text-gray-700 hover:border-cyan-300 hover:shadow-md transition-all duration-300"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
            team@navam.io
          </a>
          <a
            href="https://github.com/navam-io"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 rounded-full text-gray-700 hover:border-cyan-300 hover:shadow-md transition-all duration-300"
          >
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path>
            </svg>
            GitHub
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'

interface FormData {
  name: string
  email: string
  company: string
  interest: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  interest?: string
  message?: string
}

const formData = reactive<FormData>({
  name: '',
  email: '',
  company: '',
  interest: '',
  message: ''
})

const errors = reactive<FormErrors>({})
const isSubmitting = ref(false)
const showSuccess = ref(false)
const showError = ref(false)
const errorMessage = ref('')

// TODO: Replace with your actual Google Apps Script Web App URL
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwdlD8irGX0Rbm-URqJgOmVXx8Ox3AXnxJ8P6KOzx1ZgTqpYFxxMLfFpEBM4PPczkwZdw/exec'

const validateField = (field: keyof FormErrors) => {
  switch (field) {
    case 'name':
      if (!formData.name.trim()) {
        errors.name = 'Name is required'
      } else if (formData.name.trim().length < 2) {
        errors.name = 'Name must be at least 2 characters'
      }
      break
    case 'email':
      if (!formData.email.trim()) {
        errors.email = 'Email is required'
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        errors.email = 'Please enter a valid email address'
      }
      break
    case 'interest':
      if (!formData.interest) {
        errors.interest = 'Please select an option'
      }
      break
    case 'message':
      if (!formData.message.trim()) {
        errors.message = 'Message is required'
      } else if (formData.message.trim().length < 10) {
        errors.message = 'Message must be at least 10 characters'
      }
      break
  }
}

const clearError = (field: keyof FormErrors) => {
  delete errors[field]
}

const validateForm = (): boolean => {
  Object.keys(errors).forEach(key => delete errors[key as keyof FormErrors])

  validateField('name')
  validateField('email')
  validateField('interest')
  validateField('message')

  return Object.keys(errors).length === 0
}

const handleSubmit = async () => {
  showSuccess.value = false
  showError.value = false

  if (!validateForm()) {
    return
  }

  isSubmitting.value = true

  try {
    const payload = {
      ...formData,
      timestamp: new Date().toISOString(),
      source: 'navam.io/contact'
    }

    console.log('Submitting form data:', payload)

    // Use a form submission approach that works with Google Apps Script
    const formElement = document.createElement('form')
    formElement.method = 'POST'
    formElement.action = GOOGLE_SCRIPT_URL
    formElement.target = 'hidden_iframe'
    formElement.style.display = 'none'

    // Add form fields
    Object.entries(payload).forEach(([key, value]) => {
      const input = document.createElement('input')
      input.type = 'hidden'
      input.name = key
      input.value = String(value)
      formElement.appendChild(input)
    })

    // Create hidden iframe for submission
    let iframe = document.getElementById('hidden_iframe') as HTMLIFrameElement
    if (!iframe) {
      iframe = document.createElement('iframe')
      iframe.id = 'hidden_iframe'
      iframe.name = 'hidden_iframe'
      iframe.style.display = 'none'
      document.body.appendChild(iframe)
    }

    // Submit form
    document.body.appendChild(formElement)
    formElement.submit()
    document.body.removeChild(formElement)

    console.log('Form submitted successfully')

    // Show success after short delay (form submission is async)
    setTimeout(() => {
      showSuccess.value = true

      // Reset form
      Object.keys(formData).forEach(key => {
        formData[key as keyof FormData] = ''
      })

      // Scroll to success message
      setTimeout(() => {
        const successEl = document.querySelector('.bg-gradient-to-r.from-green-50')
        if (successEl) {
          successEl.scrollIntoView({ behavior: 'smooth', block: 'center' })
        }
      }, 100)

      isSubmitting.value = false
    }, 1000)

  } catch (error) {
    console.error('Form submission error:', error)
    showError.value = true
    errorMessage.value = 'Please try again or contact us directly at team@navam.io'
    isSubmitting.value = false
  }
}
</script>

<style scoped>
input:focus,
textarea:focus,
select:focus {
  outline: none;
  ring: 2px;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.animate-spin {
  animation: spin 1s linear infinite;
}
</style>
