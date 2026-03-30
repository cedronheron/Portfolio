<template>
  <section id="skills" class="space-y-8">
    <div class="flex items-center justify-between">
      <h2 class="section-title line-accent">Expertise</h2>
      <p class="text-sm text-slate-400">Balanced across product, backend, and UX</p>
    </div>
    <div class="grid md:grid-cols-3 gap-6">
      <article
        v-for="skill in skills"
        :key="skill.name"
        class="glass-panel p-6 space-y-3 card-hover"
      >
        <div class="flex items-center justify-between gap-3">
          <div class="h-11 w-11 rounded-xl bg-white/5 grid place-items-center text-lg" :aria-label="skill.name">
            <component :is="resolveIcon(skill.icon)" class="h-6 w-6 text-accent-300" />
          </div>
          <p class="text-xl font-semibold text-white">{{ skill.name }}</p>
          <span class="tag-pill bg-white/5 text-xs">{{ skill.level }}</span>
        </div>
        <p class="text-slate-300 text-sm leading-relaxed">{{ skill.detail }}</p>
        <div class="flex flex-wrap gap-2 pt-2">
          <span v-for="tag in skill.tags" :key="tag" class="tag-pill bg-white/5 text-xs">{{ tag }}</span>
        </div>
        <div v-if="skill.logos" class="flex flex-wrap gap-2 pt-3">
          <img
            v-for="logo in skill.logos"
            :key="logo.alt"
            :src="logo.src"
            :alt="logo.alt"
            class="h-6 w-6 object-contain bg-white/5 rounded-md p-1 border border-white/10"
            loading="lazy"
          />
        </div>
      </article>
    </div>
  </section>
</template>

<script setup>
import { BoltIcon, ChartBarIcon, ServerStackIcon } from '@heroicons/vue/24/solid';

const props = defineProps({
  skills: { type: Array, required: true }
});

const { skills } = props;

const iconMap = {
  BoltIcon,
  ServerStackIcon,
  ChartBarIcon
};

const resolveIcon = (key) => iconMap[key] || BoltIcon;
</script>
