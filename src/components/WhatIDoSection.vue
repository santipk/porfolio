<template>
  <section id="what-i-do" class="section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">{{ t.whatIDo.title }}</h2>
        <p class="section-subtitle">{{ t.whatIDo.subtitle }}</p>
      </div>
      <div class="cards-grid">
        <div class="card what-card">
          <div class="card-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
          </div>
          <h3 class="card-title">{{ t.whatIDo.qaAutomation.title }}</h3>
          <p class="card-description">{{ t.whatIDo.qaAutomation.description }}</p>
        </div>
        <div class="card what-card">
          <div class="card-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="3" y="3" width="18" height="18" rx="2"/>
              <path d="M3 9h18M9 21V9"/>
            </svg>
          </div>
          <h3 class="card-title">{{ t.whatIDo.frontend.title }}</h3>
          <p class="card-description">{{ t.whatIDo.frontend.description }}</p>
        </div>
        <div class="card what-card">
          <div class="card-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
            </svg>
          </div>
          <h3 class="card-title">{{ t.whatIDo.optimization.title }}</h3>
          <p class="card-description">{{ t.whatIDo.optimization.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from '../composables/useI18n.js';

const { t } = useI18n();
</script>

<style scoped>
.cards-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.what-card {
  text-align: left;
}

.card-icon {
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(56, 189, 248, 0.1);
  border-radius: var(--radius-md);
  color: var(--accent-primary);
  margin-bottom: 20px;
}

.card-title {
  font-family: var(--font-mono);
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 12px;
  color: var(--text-primary);
}

.card-description {
  font-size: 1rem;
  color: var(--text-secondary);
  line-height: 1.7;
}

@media (max-width: 1024px) {
  .cards-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .cards-grid {
    grid-template-columns: 1fr;
  }
}
</style>
