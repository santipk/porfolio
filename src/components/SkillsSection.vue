<template>
  <section id="skills" class="section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">{{ t.skills.title }}</h2>
        <p class="section-subtitle">{{ t.skills.subtitle }}</p>
      </div>
      <div class="skills-grid">
        <div class="skill-category">
          <h3 class="category-title">{{ t.skills.qaAutomation }}</h3>
          <div class="skill-badges">
            <span class="skill-badge">Playwright</span>
            <span class="skill-badge">E2E Testing</span>
            <span class="skill-badge">Regression Testing</span>
            <span class="skill-badge">Smoke Testing</span>
            <span class="skill-badge">Test Case Design</span>
            <span class="skill-badge">Debugging</span>
            <span class="skill-badge">Root Cause Analysis</span>
            <span class="skill-badge">Flaky Test Investigation</span>
          </div>
        </div>
        <div class="skill-category">
          <h3 class="category-title">{{ t.skills.frontend }}</h3>
          <div class="skill-badges">
            <span class="skill-badge">Vue 3</span>
            <span class="skill-badge">JavaScript</span>
            <span class="skill-badge">TypeScript</span>
            <span class="skill-badge">HTML</span>
            <span class="skill-badge">CSS</span>
            <span class="skill-badge">UI stability</span>
            <span class="skill-badge">Frontend bug fixing</span>
          </div>
        </div>
        <div class="skill-category">
          <h3 class="category-title">{{ t.skills.backendApi }}</h3>
          <div class="skill-badges">
            <span class="skill-badge">NestJS</span>
            <span class="skill-badge">REST APIs</span>
            <span class="skill-badge">Node.js</span>
            <span class="skill-badge">Postman</span>
            <span class="skill-badge">API testing</span>
          </div>
        </div>
        <div class="skill-category">
          <h3 class="category-title">{{ t.skills.tools }}</h3>
          <div class="skill-badges">
            <span class="skill-badge">Git</span>
            <span class="skill-badge">GitHub</span>
            <span class="skill-badge">Jira</span>
            <span class="skill-badge">TestRail</span>
            <span class="skill-badge">ClickUp</span>
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
.skills-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
}

.skill-category {
  background: var(--bg-surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 24px;
}

.category-title {
  font-family: var(--font-mono);
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--accent-primary);
  margin-bottom: 20px;
}

.skill-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.skill-badge {
  display: inline-block;
  padding: 8px 16px;
  background: rgba(56, 189, 248, 0.08);
  border: 1px solid rgba(56, 189, 248, 0.2);
  border-radius: var(--radius-md);
  font-size: 0.875rem;
  color: var(--text-primary);
  transition: all var(--transition);
}

.skill-badge:hover {
  background: rgba(56, 189, 248, 0.15);
  border-color: var(--accent-primary);
  transform: translateY(-1px);
}

@media (max-width: 768px) {
  .skills-grid {
    grid-template-columns: 1fr;
  }
}
</style>
