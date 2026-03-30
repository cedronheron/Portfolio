<template>
  <section id="analytics" class="space-y-4">
    <div class="flex items-center justify-between">
      <h2 class="section-title line-accent">Live engagement</h2>
      <p class="text-sm text-slate-400">Lightweight, privacy-friendly counters</p>
    </div>
    <div class="grid md:grid-cols-3 gap-4">
      <div class="glass-panel p-5 card-hover">
        <p class="text-sm text-slate-400 inline-flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-accent-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 11c0 1.657-1.567 3-3.5 3S5 12.657 5 11s1.567-3 3.5-3S12 9.343 12 11z" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M19 11c0 1.657-1.567 3-3.5 3S12 12.657 12 11s1.567-3 3.5-3S19 9.343 19 11z" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M5 21c0-3.038 2.91-5.5 6.5-5.5S18 17.962 18 21" />
          </svg>
          Visitors (local)
        </p>
        <p class="text-3xl font-semibold">{{ visitCount }}</p>
        <p class="text-xs text-slate-400 mt-2">Stored locally; reset in private mode.</p>
      </div>
      <div class="glass-panel p-5 card-hover">
        <p class="text-sm text-slate-400 inline-flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-accent-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m0 0l-3.5-3.5M12 18l3.5-3.5" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M5 6h14" />
          </svg>
          CTA clicks
        </p>
        <p class="text-3xl font-semibold">{{ analyticsSummary.cta }}</p>
        <p class="text-xs text-slate-400 mt-2">Hero, navigation, and contact buttons.</p>
      </div>
      <div class="glass-panel p-5 card-hover">
        <p class="text-sm text-slate-400 inline-flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-accent-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v12m0 0l-4-4m4 4l4-4M6 20h12" />
          </svg>
          CV downloads
        </p>
        <p class="text-3xl font-semibold">{{ analyticsSummary.downloads }}</p>
        <p class="text-xs text-slate-400 mt-2">Offline-ready resume for clients.</p>
      </div>
    </div>
    <div class="glass-panel p-5 card-hover">
      <div class="flex items-center justify-between mb-3">
        <p class="text-sm text-slate-400">Recent events</p>
        <p class="text-xs text-slate-500">Local only; changeable in code.</p>
      </div>
      <div class="space-y-2 max-h-44 overflow-y-auto pr-1">
        <div v-if="!recentEvents.length" class="text-sm text-slate-400">No events yet. Try clicking a CTA.</div>
        <div v-for="event in recentEvents" :key="event.id" class="flex items-center justify-between text-sm">
          <span class="text-white font-medium">{{ event.name }}</span>
          <span class="text-slate-400">{{ event.time }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  visitCount: { type: Number, required: true },
  analyticsSummary: { type: Object, required: true },
  recentEvents: { type: Array, required: true }
});

const { visitCount, analyticsSummary, recentEvents } = props;
</script>
