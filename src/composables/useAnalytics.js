import { computed, ref } from 'vue';

const EVENT_KEY = 'nh-portfolio-events';
const VISIT_KEY = 'nh-portfolio-visits';

export function useAnalytics() {
  const visitCount = ref(0);
  const recentEvents = ref([]);

  const analyticsSummary = computed(() => ({
    cta: recentEvents.value.filter((e) => e.name === 'cta').length,
    downloads: recentEvents.value.filter((e) => e.name === 'download-cv').length
  }));

  const trackEvent = (name, meta = {}) => {
    const event = {
      id: crypto.randomUUID(),
      name,
      meta,
      time: new Date().toLocaleTimeString()
    };

    recentEvents.value = [event, ...recentEvents.value].slice(0, 12);
    const stored = JSON.parse(localStorage.getItem(EVENT_KEY) || '[]');
    localStorage.setItem(EVENT_KEY, JSON.stringify([event, ...stored].slice(0, 50)));
  };

  const bootstrap = () => {
    const storedEvents = JSON.parse(localStorage.getItem(EVENT_KEY) || '[]');
    recentEvents.value = storedEvents;

    const storedVisits = Number(localStorage.getItem(VISIT_KEY) || '0');
    const next = storedVisits + 1;
    visitCount.value = next;
    localStorage.setItem(VISIT_KEY, String(next));
  };

  return { visitCount, recentEvents, analyticsSummary, trackEvent, bootstrap };
}
