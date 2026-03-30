<template>
  <section class="space-y-10">
    <div class="space-y-2">
      <p class="tag-pill bg-white/5 w-fit">Overview</p>
      <h1 class="text-3xl font-semibold text-white">About & intro</h1>
      <p class="text-slate-300 max-w-2xl">Snapshot of who I am, what I do, and how to reach me.</p>
    </div>
    <HeroSection :stats="heroStats" :trackEvent="trackEvent" />
    <AboutSection :metrics="aboutMetrics" :socialLinks="socialLinks" :profile="profile" />
  </section>
</template>

<script setup>
import AboutSection from '../components/AboutSection.vue';
import HeroSection from '../components/HeroSection.vue';
import { aboutMetrics, heroStats, profile, socialLinks } from '../data/content.js';

const props = defineProps({
  trackEvent: { type: Function, required: true }
});

const { trackEvent } = props;
</script>
