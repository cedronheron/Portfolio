<template>
  <section id="certificates" class="space-y-6">
    <div class="flex items-center justify-between">
      <h2 class="section-title line-accent">Certificates</h2>
      <p class="text-sm text-slate-400">Proof of craft and rigor</p>
    </div>
    <div class="grid md:grid-cols-3 gap-4">
      <article
        v-for="cert in certificates"
        :key="cert.title"
        class="glass-panel p-5 space-y-2 card-hover cursor-pointer"
        @click="openCert(cert)"
      >
        <div class="flex items-start justify-between gap-3">
          <p class="text-lg font-semibold text-white inline-flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-accent-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {{ cert.title }}
          </p>
          <img
            v-if="cert.image"
            :src="cert.image"
            :alt="`${cert.title} certificate`"
            class="h-12 w-12 rounded-lg object-cover border border-white/10"
            loading="lazy"
          />
        </div>
        <p class="text-sm text-slate-400">{{ cert.issuer }}</p>
        <p class="text-xs text-slate-500">{{ cert.year }}</p>
        <p class="text-sm text-slate-300">{{ cert.detail }}</p>
      </article>
    </div>

    <div
      v-if="selected"
      class="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm grid place-items-center p-4"
      @click.self="closeCert"
    >
      <div class="relative max-w-4xl w-full max-h-[90vh]">
        <button
          class="absolute -top-10 right-0 tag-pill bg-white/10 hover:bg-white/20"
          @click="closeCert"
        >
          Close ✕
        </button>
        <img :src="selected.image" :alt="`${selected.title} certificate large`" class="w-full h-full object-contain rounded-2xl border border-white/10 shadow-panel" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  certificates: { type: Array, required: true }
});

const { certificates } = props;

const selected = ref(null);

const openCert = (cert) => {
  if (!cert.image) return;
  selected.value = cert;
};

const closeCert = () => {
  selected.value = null;
};
</script>
