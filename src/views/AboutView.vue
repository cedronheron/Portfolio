<template>
  <section class="space-y-10 section-lined">
    <div class="space-y-2">
      <p class="tag-pill bg-white/5 w-fit">Overview</p>
      <h1 class="text-3xl font-semibold text-white">Web & mobile builds that launch cleanly</h1>
      <p class="text-slate-300 max-w-3xl">
        I design and ship production-ready web apps and cross-platform mobile apps. Stacks I rely on: Vue 3 + Tailwind for UI, PHP/Laravel for APIs, PostgreSQL/Supabase for data, and Capacitor for mobile shells.
      </p>
      <div class="flex flex-wrap gap-2 text-sm text-slate-200">
        <span class="tag-pill bg-white/5">Product MVPs & dashboards</span>
        <span class="tag-pill bg-white/5">Auth, payments, analytics</span>
        <span class="tag-pill bg-white/5">iOS / Android via Capacitor</span>
      </div>
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
