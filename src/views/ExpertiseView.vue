<template>
  <section id="expertise" class="space-y-12 section-lined">
    <div class="space-y-2">
      <p class="tag-pill bg-white/5 w-fit">Expertise</p>
      <h1 class="text-3xl font-semibold text-white">Skills & analytics</h1>
      <p class="text-slate-300 max-w-2xl">A quick look at what I work with and how people engage with the site.</p>
    </div>
    <SkillsSection :skills="skills" />
    <AnalyticsSection :visitCount="visitCount" :analyticsSummary="analyticsSummary" :recentEvents="recentEvents" />
  </section>
</template>

<script setup>
import AnalyticsSection from '../components/AnalyticsSection.vue';
import SkillsSection from '../components/SkillsSection.vue';

const props = defineProps({
  skills: { type: Array, required: true },
  visitCount: { type: Number, required: true },
  analyticsSummary: { type: Object, required: true },
  recentEvents: { type: Array, required: true }
});

const { skills, visitCount, analyticsSummary, recentEvents } = props;
</script>
