<template>
  <section id="mini-tools" class="section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">{{ t.miniTools.title }}</h2>
        <p class="section-subtitle">{{ t.miniTools.subtitle }}</p>
      </div>
      <div class="tools-grid">
        <div class="tool-card card">
          <h3 class="tool-title">{{ t.miniTools.loginFlow.title }}</h3>
          <p class="tool-description">{{ t.miniTools.loginFlow.description }}</p>
          <span class="status-badge status-coming-soon">{{ t.miniTools.comingSoon }}</span>
        </div>
        <div class="tool-card card">
          <h3 class="tool-title">{{ t.miniTools.reportGenerator.title }}</h3>
          <p class="tool-description">{{ t.miniTools.reportGenerator.description }}</p>
          <span class="status-badge status-coming-soon">{{ t.miniTools.comingSoon }}</span>
        </div>
        <div class="tool-card card">
          <h3 class="tool-title">{{ t.miniTools.flakyAnalyzer.title }}</h3>
          <p class="tool-description">{{ t.miniTools.flakyAnalyzer.description }}</p>
          <span class="status-badge status-coming-soon">{{ t.miniTools.comingSoon }}</span>
        </div>
        <div class="tool-card card">
          <h3 class="tool-title">{{ t.miniTools.bugTemplate.title }}</h3>
          <p class="tool-description">{{ t.miniTools.bugTemplate.description }}</p>
          <span class="status-badge status-planned">{{ t.miniTools.planned }}</span>
        </div>
        <div class="tool-card card">
          <h3 class="tool-title">{{ t.miniTools.apiHealth.title }}</h3>
          <p class="tool-description">{{ t.miniTools.apiHealth.description }}</p>
          <span class="status-badge status-planned">{{ t.miniTools.planned }}</span>
        </div>
        <div class="tool-card card">
          <h3 class="tool-title">{{ t.miniTools.csvFormatter.title }}</h3>
          <p class="tool-description">{{ t.miniTools.csvFormatter.description }}</p>
          <span class="status-badge status-planned">{{ t.miniTools.planned }}</span>
        </div>
        <div class="tool-card card">
          <h3 class="tool-title">{{ t.miniTools.miniDashboard.title }}</h3>
          <p class="tool-description">{{ t.miniTools.miniDashboard.description }}</p>
          <span class="status-badge status-planned">{{ t.miniTools.planned }}</span>
        </div>
        <div class="tool-card card">
          <h3 class="tool-title">{{ t.miniTools.vuePlayground.title }}</h3>
          <p class="tool-description">{{ t.miniTools.vuePlayground.description }}</p>
          <span class="status-badge status-coming-soon">{{ t.miniTools.comingSoon }}</span>
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
.tools-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.tool-card {
  text-align: left;
}

.tool-title {
  font-family: var(--font-mono);
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 10px;
}

.tool-description {
  font-size: 0.875rem;
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 16px;
}

@media (max-width: 1024px) {
  .tools-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .tools-grid {
    grid-template-columns: 1fr;
  }
}
</style>
