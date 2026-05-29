<template>
  <section id="about" class="section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">{{ t.about.title }}</h2>
      </div>
      <div class="about-content">
        <p class="about-text">{{ t.about.p1 }}</p>
        <p class="about-text">{{ t.about.p2 }}</p>
        <p class="about-text">{{ t.about.p3 }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from '../composables/useI18n.js';

const { t } = useI18n();
</script>

<style scoped>
.about-content {
  max-width: 800px;
}

.about-text {
  font-size: 1.125rem;
  color: var(--text-secondary);
  line-height: 1.8;
  margin-bottom: 24px;
}

.about-text:last-child {
  margin-bottom: 0;
}

@media (max-width: 768px) {
  .about-text {
    font-size: 1rem;
    margin-bottom: 20px;
  }
}
</style>
