<template>
  <footer class="border-t border-white/5 py-6 bg-ink-900/80 backdrop-blur-lg">
    <div class="max-w-6xl mx-auto px-4 flex flex-col md:flex-row md:items-center justify-between gap-3">
      <p class="text-slate-400 text-sm">© {{ new Date().getFullYear() }} Built by yours truly.</p>
      <div class="flex gap-3 text-sm">
        <a class="hover:text-accent-300" href="/Nheron_Cedro_CV.docx" download @click="trackEvent('download-cv', { origin: 'footer' })">Download CV</a>
        <a class="hover:text-accent-300" href="#contact" @click="trackEvent('cta', { origin: 'footer-hire' })">Hire me</a>
        <a class="hover:text-accent-300" href="#analytics">Metrics</a>
      </div>
    </div>
  </footer>
</template>

<script setup>
const props = defineProps({
  trackEvent: { type: Function, required: true }
});

const { trackEvent } = props;
</script>
