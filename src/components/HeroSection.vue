<template>
  <section id="hero" class="pt-12 grid lg:grid-cols-12 gap-10 items-center">
    <div class="lg:col-span-7 space-y-6 relative">
      <div class="absolute -left-10 -top-8 h-16 w-16 rounded-full border border-white/10 animate-float" />
      <p class="tag-pill w-fit bg-white/5 border-white/10">Available for select client work</p>
      <h1 class="text-4xl md:text-5xl font-semibold leading-tight text-white">
        Crafting elegant web experiences that convert.
      </h1>
      <p class="text-lg text-slate-300 leading-relaxed max-w-2xl">
        I build performant, maintainable products across the stack — from Vue frontends to PHP APIs and PostgreSQL data models. I lean on thoughtful design, measurable UX, and fast delivery.
      </p>
      <div class="flex flex-wrap gap-3">
        <a
          class="tag-pill bg-gradient-to-r from-accent-500 to-cyan-400 text-ink-900 font-semibold shadow-glow"
          href="#contact"
          @click="trackEvent('cta', { origin: 'hero-hire' })"
        >
          <span class="inline-flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M8 7V5a3 3 0 013-3h2a3 3 0 013 3v2m4 0v10a3 3 0 01-3 3H7a3 3 0 01-3-3V7h16z" />
            </svg>
            Book a call
          </span>
        </a>
        <a
          class="tag-pill bg-white/5 hover:bg-white/10 transition"
          href="/Nheron_Cedro_CV.docx"
          download
          @click="trackEvent('download-cv', { origin: 'hero' })"
        >
          <span class="inline-flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v12m0 0l-4-4m4 4l4-4m-8 6h8" />
            </svg>
            Download CV
          </span>
        </a>
        <a
          class="tag-pill bg-white/5 hover:bg-white/10 transition"
          href="#portfolio"
          @click="trackEvent('cta', { origin: 'hero-work' })"
        >
          <span class="inline-flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h7" />
            </svg>
            See portfolio
          </span>
        </a>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 pt-2">
        <div v-for="stat in stats" :key="stat.label" class="glass-panel p-4 text-sm">
          <p class="text-2xl font-semibold text-white">{{ stat.value }}</p>
          <p class="text-slate-400">{{ stat.label }}</p>
        </div>
      </div>
    </div>
    <div class="lg:col-span-5 relative">
      <div class="glass-panel p-6 space-y-4 card-hover">
        <p class="text-sm text-slate-400">Focus</p>
        <h2 class="text-2xl font-semibold">Frontend, backend, data</h2>
        <ul class="space-y-3 text-slate-300">
          <li v-for="item in focus" :key="item" class="flex items-center gap-2">
            <span class="h-2 w-2 rounded-full bg-accent-400" />{{ item }}
          </li>
        </ul>
        <div class="pt-4 flex flex-wrap gap-2">
          <span class="tag-pill bg-white/5">Available remote</span>
          <span class="tag-pill bg-white/5">Timezone overlap: GMT+8</span>
        </div>
      </div>
      <div class="absolute -left-6 -bottom-10 gradient-border rounded-3xl p-[1px]">
        <div class="bg-ink-800/70 backdrop-blur-xl rounded-3xl p-6 flex items-center gap-4">
          <div class="h-12 w-12 rounded-2xl bg-white/5 grid place-items-center animate-float">
            <span class="text-2xl">⚡</span>
          </div>
          <div>
            <p class="text-sm text-slate-300">Micro analytics</p>
            <p class="font-semibold text-white">Tracking CTAs & engagement</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  stats: { type: Array, required: true },
  trackEvent: { type: Function, required: true }
});

const focus = [
  'Vue 3, Tailwind, Vite',
  'PHP (Laravel) & Node APIs',
  'PostgreSQL, Prisma, Supabase',
  'CI/CD, analytics, A/B tests'
];

const { stats, trackEvent } = props;
</script>
