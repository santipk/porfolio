<template>
  <section id="contact" class="section">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">{{ t.contact.title }}</h2>
        <p class="section-subtitle">{{ t.contact.subtitle }}</p>
      </div>
      <div class="contact-content">
        <div class="contact-info">
          <div class="contact-item">
            <div class="contact-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
            </div>
            <div class="contact-details">
              <span class="contact-label">{{ t.contact.email }}</span>
              <a href="mailto:santieldk@gmail.com" class="contact-value">santieldk@gmail.com</a>
            </div>
          </div>
          <div class="contact-item">
            <div class="contact-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
            </div>
            <div class="contact-details">
              <span class="contact-label">{{ t.contact.location }}</span>
              <span class="contact-value">San Miguel de Tucuman, Argentina</span>
            </div>
          </div>
          <div class="contact-item">
            <div class="contact-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12 6 12 12 16 14"/>
              </svg>
            </div>
            <div class="contact-details">
              <span class="contact-label">{{ t.contact.timezone }}</span>
              <span class="contact-value">GMT-3</span>
            </div>
          </div>
          <div class="contact-item">
            <div class="contact-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect x="2" y="9" width="4" height="12"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </div>
            <div class="contact-details">
              <span class="contact-label">{{ t.contact.linkedin }}</span>
              <a href="https://www.linkedin.com/in/santipk" target="_blank" rel="noopener" class="contact-value link">linkedin.com/in/santipk</a>
            </div>
          </div>
          <div class="contact-item">
            <div class="contact-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
              </svg>
            </div>
            <div class="contact-details">
              <span class="contact-label">{{ t.contact.github }}</span>
              <a href="https://github.com/santipk" target="_blank" rel="noopener" class="contact-value link">github.com/santipk</a>
            </div>
          </div>
        </div>
        <div class="contact-cta">
          <a href="mailto:santieldk@gmail.com" class="btn btn-primary btn-large">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
            {{ t.contact.contactMe }}
          </a>
          <a :href="cvUrl" download="Santiago_Abregu_CV" class="btn btn-secondary btn-large">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            {{ t.contact.cvDownload }}
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue';
import { useI18n } from '../composables/useI18n.js';

const { t, currentLanguage } = useI18n();

const cvUrl = computed(() =>
  currentLanguage.value === 'es' ? './cv-es.pdf' : './cv-en.pdf'
);
</script>

<style scoped>
.contact-content {
  max-width: 600px;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 40px;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px 20px;
  background: var(--bg-surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
}

.contact-icon {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(56, 189, 248, 0.1);
  border-radius: var(--radius-sm);
  color: var(--accent-primary);
  flex-shrink: 0;
}

.contact-details {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.contact-label {
  font-size: 0.75rem;
  color: var(--text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.contact-value {
  font-size: 1rem;
  color: var(--text-primary);
}

.contact-value.link {
  color: var(--accent-primary);
  transition: color var(--transition);
}

.contact-value.link:hover {
  color: var(--accent-secondary);
}

.contact-cta {
  display: flex;
  gap: 16px;
}

.btn-large {
  padding: 16px 28px;
  font-size: 1rem;
}

@media (max-width: 640px) {
  .contact-item {
    padding: 12px 16px;
  }

  .contact-cta {
    flex-direction: column;
  }

  .btn-large {
    width: 100%;
  }
}
</style>
