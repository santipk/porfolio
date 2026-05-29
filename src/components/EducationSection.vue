<template>
  <section id="education" class="section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">{{ t.education.title }}</h2>
      </div>
      <div class="education-grid">
        <div class="education-card card">
          <div class="edu-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
          </div>
          <h3 class="edu-title">{{ t.education.automation.title }}</h3>
          <p class="edu-institution">{{ t.education.automation.institution }}</p>
          <p class="edu-description">{{ t.education.automation.description }}</p>
        </div>
        <div class="education-card card">
          <div class="edu-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="3" y="3" width="18" height="18" rx="2"/>
              <path d="M3 9h18M9 21V9"/>
            </svg>
          </div>
          <h3 class="edu-title">{{ t.education.fullstack.title }}</h3>
          <p class="edu-institution">{{ t.education.fullstack.institution }}</p>
        </div>
        <div class="education-card card">
          <div class="edu-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"/>
              <path d="M12 6v6l4 2"/>
            </svg>
          </div>
          <h3 class="edu-title">{{ t.education.mechatronics.title }}</h3>
          <p class="edu-institution">{{ t.education.mechatronics.institution }}</p>
          <p class="edu-period">{{ t.education.mechatronics.period }}</p>
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
.education-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.education-card {
  text-align: left;
}

.edu-icon {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(56, 189, 248, 0.1);
  border-radius: var(--radius-md);
  color: var(--accent-primary);
  margin-bottom: 20px;
}

.edu-title {
  font-family: var(--font-mono);
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 8px;
}

.edu-institution {
  font-size: 0.95rem;
  color: var(--accent-secondary);
  margin-bottom: 12px;
}

.edu-description {
  font-size: 0.875rem;
  color: var(--text-secondary);
  line-height: 1.6;
}

.edu-period {
  font-family: var(--font-mono);
  font-size: 0.875rem;
  color: var(--text-secondary);
}

@media (max-width: 1024px) {
  .education-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .education-grid {
    grid-template-columns: 1fr;
  }
}
</style>
