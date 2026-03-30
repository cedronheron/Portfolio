<template>
  <section id="contact" class="space-y-10">
    <div class="space-y-2">
      <p class="tag-pill bg-white/5 w-fit">Contact</p>
      <h1 class="text-3xl font-semibold text-white">Let’s work together</h1>
      <p class="text-slate-300 max-w-2xl">Reach out for collaborations, freelance work, or questions.</p>
    </div>
    <ContactSection :contactInfo="contactInfo" :trackEvent="trackEvent" />
  </section>
</template>

<script setup>
import ContactSection from '../components/ContactSection.vue';
import { contactInfo } from '../data/content.js';

const props = defineProps({
  trackEvent: { type: Function, required: true }
});

const { trackEvent } = props;
</script>
