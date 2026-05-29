<template>
  <section id="languages" class="section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">{{ t.languages.title }}</h2>
      </div>
      <div class="languages-grid">
        <div class="language-card card">
          <div class="lang-flag">🇦🇷</div>
          <div class="lang-info">
            <h3 class="lang-name">{{ t.languages.spanish }}</h3>
            <span class="lang-level">{{ t.languages.native }}</span>
          </div>
          <div class="lang-bar">
            <div class="lang-bar-fill" style="width: 100%"></div>
          </div>
        </div>
        <div class="language-card card">
          <div class="lang-flag">🇺🇸</div>
          <div class="lang-info">
            <h3 class="lang-name">{{ t.languages.english }}</h3>
            <span class="lang-level">{{ t.languages.advanced }}</span>
          </div>
          <div class="lang-bar">
            <div class="lang-bar-fill" style="width: 75%"></div>
          </div>
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
.languages-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  max-width: 700px;
}

.language-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 32px;
}

.lang-flag {
  font-size: 3rem;
  margin-bottom: 16px;
}

.lang-info {
  margin-bottom: 20px;
}

.lang-name {
  font-family: var(--font-mono);
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 4px;
}

.lang-level {
  font-size: 0.95rem;
  color: var(--accent-primary);
}

.lang-bar {
  width: 100%;
  height: 6px;
  background: var(--bg-primary);
  border-radius: 3px;
  overflow: hidden;
}

.lang-bar-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--accent-primary), var(--accent-secondary));
  border-radius: 3px;
  transition: width 0.5s ease;
}

@media (max-width: 640px) {
  .languages-grid {
    grid-template-columns: 1fr;
  }

  .language-card {
    padding: 24px;
  }
}
</style>
