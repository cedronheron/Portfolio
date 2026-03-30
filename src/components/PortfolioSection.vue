<template>
  <section id="portfolio" class="space-y-8">
    <div class="flex items-center justify-between">
      <h2 class="section-title line-accent">Selected work</h2>
      <p class="text-sm text-slate-400">Recent highlights that clients love</p>
    </div>
    <div class="grid md:grid-cols-2 gap-6">
      <article
        v-for="project in projects"
        :key="project.title"
        class="glass-panel p-6 space-y-3 card-hover"
      >
        <div class="flex items-center justify-between">
          <p class="text-xl font-semibold text-white">{{ project.title }}</p>
          <span class="tag-pill bg-white/5 text-xs">{{ project.year }}</span>
        </div>
        <p class="text-slate-300 text-sm leading-relaxed">{{ project.description }}</p>
        <div class="flex flex-wrap gap-2 pt-2">
          <span v-for="stack in project.stack" :key="stack" class="tag-pill bg-white/5 text-xs">{{ stack }}</span>
        </div>
        <div class="flex items-center gap-3 pt-3">
          <a
            v-if="project.link"
            class="text-accent-300 hover:text-accent-400 text-sm font-semibold"
            :href="project.link"
            target="_blank"
            rel="noopener"
            @click="trackEvent('cta', { origin: 'project-link', label: project.title })"
          >
            <span class="inline-flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M10 6h8m0 0v8m0-8L9 15" />
              </svg>
              View live
            </span>
          </a>
          <span class="text-xs text-slate-400">{{ project.impact }}</span>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  projects: { type: Array, required: true },
  trackEvent: { type: Function, required: true }
});

const { projects, trackEvent } = props;
</script>
