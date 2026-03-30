<template>
  <div class="min-h-screen text-slate-100">
    <div class="grain-overlay" aria-hidden="true"></div>
    <div class="fixed inset-0 pointer-events-none">
      <div class="absolute -left-24 top-10 w-72 h-72 bg-accent-400/20 blur-blob animate-float" />
      <div class="absolute right-0 top-1/3 w-96 h-96 bg-cyan-400/10 blur-blob animate-pulseGlow" />
      <div class="absolute left-10 bottom-10 w-64 h-64 bg-accent-300/15 blur-blob animate-float" />
    </div>

    <TopNav :trackEvent="trackEvent" />

    <main class="max-w-6xl mx-auto px-4 pb-24 space-y-24">
      <AboutView :trackEvent="trackEvent" />
      <ExpertiseView
        :skills="skills"
        :visitCount="visitCount"
        :analyticsSummary="analyticsSummary"
        :recentEvents="recentEvents"
      />
      <PortfolioSection :projects="projects" :trackEvent="trackEvent" />
      <CertificatesSection :certificates="certificates" />
      <ContactsView :trackEvent="trackEvent" />
    </main>

    <AppFooter :trackEvent="trackEvent" />
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import AppFooter from './components/AppFooter.vue';
import CertificatesSection from './components/CertificatesSection.vue';
import PortfolioSection from './components/PortfolioSection.vue';
import TopNav from './components/TopNav.vue';
import AboutView from './views/AboutView.vue';
import ContactsView from './views/ContactsView.vue';
import ExpertiseView from './views/ExpertiseView.vue';
import { certificates, contactInfo, projects, skills } from './data/content.js';
import { useAnalytics } from './composables/useAnalytics.js';

const { visitCount, recentEvents, analyticsSummary, trackEvent, bootstrap } = useAnalytics();

onMounted(() => {
  bootstrap();
  trackEvent('visit');
});
</script>
