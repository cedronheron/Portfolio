<template>
  <section id="about" class="glass-panel p-8 grid md:grid-cols-2 gap-6 card-hover">
    <div class="space-y-4">
      <div class="flex gap-5 items-center">
        <div class="relative h-40 w-40">
          <div class="absolute inset-0 rounded-3xl bg-gradient-to-br from-accent-500/70 to-cyan-400/60 blur-xl" aria-hidden="true"></div>
          <div class="relative h-full w-full rounded-3xl overflow-hidden border border-white/10 shadow-panel">
            <img :src="profile.photo" alt="Portrait of {{ profile.name }}" class="h-full w-full object-cover" />
          </div>
          <span class="absolute -left-2 -bottom-3 tag-pill bg-white/10 text-xs">Available now</span>
        </div>
        <div>
          <p class="tag-pill bg-white/5 w-fit">About me</p>
          <h2 class="text-3xl font-semibold mt-2 flex items-center gap-2">
            <UserIcon class="h-6 w-6 text-accent-300" />
            {{ profile.name }}
          </h2>
          <p class="text-slate-300">{{ profile.title }}</p>
        </div>
      </div>
      <p class="text-slate-300 leading-relaxed">
        I translate ideas into launch-ready experiences. Expect crisp communication, weekly demos, and clean documentation. I ship modern stacks (Vue, Tailwind, PHP, PostgreSQL) with CI/CD, testing, and observability built in.
      </p>
      <div class="grid grid-cols-2 gap-3 text-sm text-slate-200">
        <div class="glass-panel p-3 flex items-center gap-3">
          <UserIcon class="h-5 w-5 text-accent-300" />
          <div>
            <p class="text-xs text-slate-400">Age</p>
            <p class="font-semibold">{{ profile.age }}</p>
          </div>
        </div>
        <div class="glass-panel p-3 flex items-center gap-3">
          <PhoneIcon class="h-5 w-5 text-accent-300" />
          <div>
            <p class="text-xs text-slate-400">Phone</p>
            <p class="font-semibold">{{ profile.phone }}</p>
          </div>
        </div>
        <div class="glass-panel p-3 flex items-center gap-3">
          <EnvelopeIcon class="h-5 w-5 text-accent-300" />
          <div>
            <p class="text-xs text-slate-400">Email</p>
            <p class="font-semibold">{{ profile.email }}</p>
          </div>
        </div>
        <div class="glass-panel p-3 flex items-center gap-3">
          <MapPinIcon class="h-5 w-5 text-accent-300" />
          <div>
            <p class="text-xs text-slate-400">Address</p>
            <p class="font-semibold">{{ profile.address }}</p>
          </div>
        </div>
      </div>
      <div class="flex flex-wrap gap-3 pt-2">
        <span class="tag-pill bg-white/5">Mentors junior devs</span>
        <span class="tag-pill bg-white/5">Async-first</span>
        <span class="tag-pill bg-white/5">Performance minded</span>
      </div>
    </div>
    <div class="space-y-4">
      <div class="grid grid-cols-2 gap-3">
        <div v-for="item in metrics" :key="item.label" class="glass-panel p-4 border border-white/5">
          <p class="text-2xl font-semibold text-white">{{ item.value }}</p>
          <p class="text-sm text-slate-400">{{ item.label }}</p>
        </div>
      </div>
      <div class="glass-panel p-4 flex items-start gap-3">
        <div class="h-11 w-11 rounded-xl bg-white/5 grid place-items-center">
          <AcademicCapIcon class="h-6 w-6 text-accent-300" />
        </div>
        <div>
          <p class="text-sm text-slate-400">Education</p>
          <p class="text-white font-semibold">{{ profile.education.degree }}</p>
          <p class="text-slate-300">{{ profile.education.school }} · {{ profile.education.year }}</p>
        </div>
      </div>
      <div class="glass-panel p-4 flex items-center gap-3">
        <div class="h-12 w-12 rounded-xl bg-gradient-to-br from-accent-500 to-cyan-400 grid place-items-center text-ink-900 font-semibold">
          <SparklesIcon class="h-6 w-6" />
        </div>
        <div>
          <p class="text-sm text-slate-400 inline-flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-accent-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 11c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3zm0 0c0 1.657 1.343 3 3 3s3-1.343 3-3-1.343-3-3-3-3 1.343-3 3zm-9 7c0-2.761 2.91-5 6.5-5M21 18c0-2.761-2.91-5-6.5-5" />
            </svg>
            Socials
          </p>
          <div class="flex gap-3 text-slate-200 font-semibold">
            <a
              v-for="social in socialLinks"
              :key="social.name"
              class="hover:text-accent-300"
              :href="social.url"
              target="_blank"
              rel="noopener"
            >
              {{ social.name }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { AcademicCapIcon, EnvelopeIcon, MapPinIcon, PhoneIcon, SparklesIcon, UserIcon } from '@heroicons/vue/24/outline';

const props = defineProps({
  metrics: { type: Array, required: true },
  socialLinks: { type: Array, required: true },
  profile: { type: Object, required: true }
});

const { metrics, socialLinks, profile } = props;
</script>
