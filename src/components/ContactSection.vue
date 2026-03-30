<template>
  <section id="contact" class="glass-panel p-8 card-hover space-y-6 section-lined">
    <div class="grid md:grid-cols-2 gap-6">
      <div class="space-y-4">
        <p class="tag-pill bg-white/5 w-fit">Let’s talk</p>
        <h2 class="text-3xl font-semibold">Tell me about your project</h2>
        <p class="text-slate-300">I respond within 24 hours with next steps, timelines, and pricing.</p>
        <div class="flex flex-wrap gap-3 items-center">
          <a
            class="tag-pill bg-white/5"
            :href="`mailto:${contactInfo.email}`"
            @click="trackEvent('cta', { origin: 'mailto' })"
          >
            <span class="inline-flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 6l8 7 8-7M4 6v12h16V6" />
              </svg>
              {{ contactInfo.email }}
            </span>
          </a>
          <span class="tag-pill bg-white/5 inline-flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 5h5l2 5-2 1c1 2 3 4 5 5l1-2 5 2v5c0 1-1 2-2 2C8 23 1 16 1 7c0-1 1-2 2-2z" />
            </svg>
            {{ contactInfo.phone }}
          </span>
          <a
            class="tag-pill bg-white/5"
            :href="contactInfo.calendarUrl"
            target="_blank"
            rel="noopener"
            @click="trackEvent('cta', { origin: 'calendar' })"
          >
            <span class="inline-flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2m-9 4h10m-9 4h6M5 7h14v12H5V7z" />
              </svg>
              Book a slot
            </span>
          </a>
        </div>
        <div class="text-sm text-slate-300 flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 21s-6-4.35-6-10a6 6 0 1112 0c0 5.65-6 10-6 10z" />
          </svg>
          {{ contactInfo.address }}
        </div>
      </div>
      <form class="glass-panel p-6 space-y-4 border border-white/5" @submit.prevent="submitForm">
        <div class="flex items-center justify-between">
          <p class="text-sm text-slate-300">Share your scope — I’ll reply with a short plan.</p>
          <span class="tag-pill bg-white/5 text-xs">Average reply: 1 business day</span>
        </div>
        <label class="space-y-2 text-sm text-slate-200">
          Name
          <input v-model="form.name" class="w-full glass-panel p-3 focus:outline-none focus:ring-2 focus:ring-accent-500" required />
        </label>
        <label class="space-y-2 text-sm text-slate-200">
          Email
          <input
            v-model="form.email"
            type="email"
            class="w-full glass-panel p-3 focus:outline-none focus:ring-2 focus:ring-accent-500"
            required
          />
        </label>
        <label class="space-y-2 text-sm text-slate-200">
          Project details
          <textarea
            v-model="form.message"
            rows="4"
            class="w-full glass-panel p-3 focus:outline-none focus:ring-2 focus:ring-accent-500"
            placeholder="Web app or mobile? Features, timeline, budget window."
            required
          />
        </label>
        <div class="flex items-center justify-between gap-3">
          <div class="text-xs text-slate-400">No spam. Form posts to Formspree; analytics stay local.</div>
          <button
            type="submit"
            class="tag-pill bg-gradient-to-r from-accent-500 to-cyan-400 text-ink-900 font-semibold shadow-glow"
            :disabled="formStatus === 'sending'"
          >
              <span class="inline-flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 5l7.5 3L21 5l-3.5 12L10.5 15 7 17l1-4" />
                </svg>
                {{ formStatus === 'sending' ? 'Sending…' : 'Send message' }}
              </span>
          </button>
        </div>
        <p v-if="formStatus === 'sent'" class="text-sm text-emerald-400">Thanks! I will reach out shortly.</p>
        <p v-if="formStatus === 'error'" class="text-sm text-amber-400">Something went wrong. Please email me directly.</p>
      </form>
    </div>
  </section>
</template>

<script setup>
import { reactive, ref } from 'vue';

const props = defineProps({
  contactInfo: { type: Object, required: true },
  trackEvent: { type: Function, required: true }
});

const { contactInfo, trackEvent } = props;

const formStatus = ref('idle');
const form = reactive({ name: '', email: '', message: '' });

const submitForm = async () => {
  formStatus.value = 'sending';
  trackEvent('cta', { origin: 'contact-form' });
  try {
    const res = await fetch(contactInfo.formEndpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    });
    if (!res.ok) throw new Error('Failed');
    formStatus.value = 'sent';
    trackEvent('form-sent');
  } catch (err) {
    console.error(err);
    formStatus.value = 'error';
  }
};
</script>
