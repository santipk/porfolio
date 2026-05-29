<template>
  <section id="experience" class="section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">{{ t.experience.title }}</h2>
      </div>
      <div class="timeline">
        <div class="timeline-item">
          <div class="timeline-marker"></div>
          <div class="timeline-content card">
            <div class="job-header">
              <div>
                <h3 class="job-company">{{ t.experience.salesQ.company }}</h3>
                <p class="job-role">{{ t.experience.salesQ.role }}</p>
              </div>
              <span class="job-period">{{ t.experience.salesQ.period }}</span>
            </div>
            <ul class="job-responsibilities">
              <li v-for="(resp, index) in t.experience.salesQ.responsibilities" :key="index">{{ resp }}</li>
            </ul>
            <div class="job-technologies">
              <span class="tech-label">Technologies:</span>
              <span class="tech-value">{{ t.experience.salesQ.technologies }}</span>
            </div>
          </div>
        </div>
        <div class="timeline-item">
          <div class="timeline-marker"></div>
          <div class="timeline-content card">
            <div class="job-header">
              <div>
                <h3 class="job-company">{{ t.experience.clickUp.company }}</h3>
                <p class="job-role">{{ t.experience.clickUp.role }}</p>
              </div>
              <span class="job-period">{{ t.experience.clickUp.period }}</span>
            </div>
            <ul class="job-responsibilities">
              <li v-for="(resp, index) in t.experience.clickUp.responsibilities" :key="index">{{ resp }}</li>
            </ul>
            <div class="job-technologies">
              <span class="tech-label">Technologies:</span>
              <span class="tech-value">{{ t.experience.clickUp.technologies }}</span>
            </div>
          </div>
        </div>
        <div class="timeline-item">
          <div class="timeline-marker"></div>
          <div class="timeline-content card">
            <div class="job-header">
              <div>
                <h3 class="job-company">{{ t.experience.globant.company }}</h3>
                <p class="job-role">{{ t.experience.globant.role }}</p>
              </div>
              <span class="job-period">{{ t.experience.globant.period }}</span>
            </div>
            <ul class="job-responsibilities">
              <li v-for="(resp, index) in t.experience.globant.responsibilities" :key="index">{{ resp }}</li>
            </ul>
            <div class="job-technologies">
              <span class="tech-label">Technologies:</span>
              <span class="tech-value">{{ t.experience.globant.technologies }}</span>
            </div>
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
.timeline {
  position: relative;
  padding-left: 32px;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 7px;
  top: 8px;
  bottom: 8px;
  width: 2px;
  background: var(--border);
}

.timeline-item {
  position: relative;
  margin-bottom: 32px;
}

.timeline-item:last-child {
  margin-bottom: 0;
}

.timeline-marker {
  position: absolute;
  left: -32px;
  top: 24px;
  width: 16px;
  height: 16px;
  background: var(--accent-primary);
  border-radius: 50%;
  border: 3px solid var(--bg-primary);
}

.timeline-content {
  padding: 28px;
}

.job-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 20px;
  gap: 16px;
}

.job-company {
  font-family: var(--font-mono);
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 4px;
}

.job-role {
  font-size: 1rem;
  color: var(--accent-primary);
}

.job-period {
  font-family: var(--font-mono);
  font-size: 0.875rem;
  color: var(--text-secondary);
  white-space: nowrap;
}

.job-responsibilities {
  margin-bottom: 20px;
}

.job-responsibilities li {
  position: relative;
  padding-left: 20px;
  margin-bottom: 10px;
  font-size: 0.95rem;
  color: var(--text-secondary);
  line-height: 1.6;
}

.job-responsibilities li::before {
  content: '>';
  position: absolute;
  left: 0;
  color: var(--accent-primary);
  font-family: var(--font-mono);
}

.job-responsibilities li:last-child {
  margin-bottom: 0;
}

.job-technologies {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding-top: 16px;
  border-top: 1px solid var(--border);
}

.tech-label {
  font-size: 0.875rem;
  color: var(--text-secondary);
}

.tech-value {
  font-family: var(--font-mono);
  font-size: 0.875rem;
  color: var(--accent-secondary);
}

@media (max-width: 640px) {
  .timeline {
    padding-left: 24px;
  }

  .timeline::before {
    left: 5px;
  }

  .timeline-marker {
    left: -24px;
    width: 12px;
    height: 12px;
  }

  .job-header {
    flex-direction: column;
  }

  .job-period {
    align-self: flex-start;
  }

  .timeline-content {
    padding: 20px;
  }
}
</style>
