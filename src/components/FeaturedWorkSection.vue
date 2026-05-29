<template>
  <section id="featured-work" class="section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">{{ t.featuredWork.title }}</h2>
        <p class="section-subtitle">{{ t.featuredWork.subtitle }}</p>
      </div>
      <div class="work-grid">
        <article class="work-card card">
          <div class="work-card-icon">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
          </div>
          <h3 class="work-title">{{ t.featuredWork.playwright.title }}</h3>
          <p class="work-description">{{ t.featuredWork.playwright.description }}</p>
          <div class="work-tags">
            <span v-for="tag in t.featuredWork.playwright.tags" :key="tag" class="tag">{{ tag }}</span>
          </div>
        </article>
        <article class="work-card card">
          <div class="work-card-icon">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
            </svg>
          </div>
          <h3 class="work-title">{{ t.featuredWork.workflow.title }}</h3>
          <p class="work-description">{{ t.featuredWork.workflow.description }}</p>
          <div class="work-tags">
            <span v-for="tag in t.featuredWork.workflow.tags" :key="tag" class="tag">{{ tag }}</span>
          </div>
        </article>
        <article class="work-card card">
          <div class="work-card-icon">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="3" y="3" width="18" height="18" rx="2"/>
              <path d="M3 9h18M9 21V9"/>
            </svg>
          </div>
          <h3 class="work-title">{{ t.featuredWork.crm.title }}</h3>
          <p class="work-description">{{ t.featuredWork.crm.description }}</p>
          <div class="work-tags">
            <span v-for="tag in t.featuredWork.crm.tags" :key="tag" class="tag">{{ tag }}</span>
          </div>
        </article>
        <article class="work-card card">
          <div class="work-card-icon">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"/>
              <path d="M12 6v6l4 2"/>
            </svg>
          </div>
          <h3 class="work-title">{{ t.featuredWork.flaky.title }}</h3>
          <p class="work-description">{{ t.featuredWork.flaky.description }}</p>
          <div class="work-tags">
            <span v-for="tag in t.featuredWork.flaky.tags" :key="tag" class="tag">{{ tag }}</span>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from '../composables/useI18n.js';

const { t } = useI18n();
</script>

<style scoped>
.work-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}

.work-card {
  text-align: left;
}

.work-card-icon {
  width: 52px;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(167, 139, 250, 0.1);
  border-radius: var(--radius-md);
  color: var(--accent-secondary);
  margin-bottom: 20px;
}

.work-title {
  font-family: var(--font-mono);
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 12px;
}

.work-description {
  font-size: 0.95rem;
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: 16px;
}

.work-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

@media (max-width: 768px) {
  .work-grid {
    grid-template-columns: 1fr;
  }
}
</style>
