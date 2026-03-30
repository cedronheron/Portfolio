<template>
  <header class="sticky top-0 z-30 backdrop-blur-lg bg-ink-900/70 border-b border-white/5">
    <div class="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
      <div class="flex items-center gap-3">
        <div class="relative h-12 w-12 rounded-2xl bg-gradient-to-br from-accent-500 to-cyan-400 grid place-items-center text-ink-900 font-semibold shadow-glow">
          <span>NH</span>
          <div class="absolute -right-2 -bottom-2 h-6 w-6 rounded-full bg-ink-900 grid place-items-center border border-white/10">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-accent-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.785.57-1.84-.197-1.54-1.118l1.07-3.292a1 1 0 00-.364-1.118L4.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
        </div>
        <div class="leading-tight">
          <p class="text-sm text-slate-300">Full-stack engineer</p>
          <p class="font-semibold text-white">Nheron</p>
        </div>
      </div>
      <div class="hidden md:flex items-center gap-6 text-sm text-slate-300">
        <a href="#about" class="hover:text-white transition" @click="trackEvent('nav', { target: 'about' })">About</a>
        <a href="#expertise" class="hover:text-white transition" @click="trackEvent('nav', { target: 'expertise' })">Skills</a>
        <a href="#portfolio" class="hover:text-white transition" @click="trackEvent('nav', { target: 'portfolio' })">Work</a>
        <a href="#certificates" class="hover:text-white transition" @click="trackEvent('nav', { target: 'certificates' })">Certificates</a>
        <a href="#contact" class="hover:text-white transition" @click="trackEvent('nav', { target: 'contact' })">Contact</a>
      </div>
      <div class="flex items-center gap-3">
        <span class="hidden md:inline-flex items-center gap-2 tag-pill bg-white/5 text-xs">
          <span class="h-2.5 w-2.5 rounded-full bg-emerald-400 animate-ping-slow" aria-hidden="true"></span>
          <span class="h-2.5 w-2.5 rounded-full bg-emerald-400"></span>
          Available for hire
        </span>
        <a
          class="hidden md:inline-flex tag-pill bg-white/10 hover:bg-white/20 transition"
          href="#contact"
          @click="trackEvent('cta', { origin: 'nav-hire' })"
        >
          Hire me
        </a>
        <a
          class="tag-pill bg-gradient-to-r from-accent-500 to-cyan-400 text-ink-900 font-semibold shadow-glow"
          href="#portfolio"
          @click="trackEvent('cta', { origin: 'nav-work' })"
        >
          <span class="inline-flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13 7h6m0 0v6m0-6L10 16m-3-3l-4 4" />
            </svg>
            View work
          </span>
        </a>
      </div>
    </div>
  </header>
</template>

<script setup>
const props = defineProps({
  trackEvent: { type: Function, required: true }
});

const { trackEvent } = props;
</script>
