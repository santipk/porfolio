<template>
  <section id="hero" class="hero-section">
    <div class="hero-bg-gradient"></div>
    <div class="container">
      <div class="hero-content">
        <div class="hero-badge">
          <span class="pulse-dot"></span>
          <span>Available for projects</span>
        </div>
        <h1 class="hero-headline">{{ t.hero.headline }}</h1>
        <p class="hero-subheadline">{{ t.hero.subheadline }}</p>
        <div class="hero-cta">
          <a href="#contact" class="btn btn-primary">{{ t.hero.ctaPrimary }}</a>
          <a href="#experience" class="btn btn-secondary">{{ t.hero.ctaSecondary }}</a>
        </div>
        <div class="hero-stats">
          <div class="stat-card">
            <span class="stat-value">4+</span>
            <span class="stat-label">Years Experience</span>
          </div>
          <div class="stat-card">
            <span class="stat-value">50+</span>
            <span class="stat-label">Test Suites</span>
          </div>
          <div class="stat-card">
            <span class="stat-value">10+</span>
            <span class="stat-label">Projects</span>
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
.hero-section {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 120px 0 80px;
  overflow: hidden;
}

.hero-bg-gradient {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 800px;
  height: 800px;
  background: radial-gradient(circle, rgba(56, 189, 248, 0.15) 0%, transparent 70%);
  pointer-events: none;
}

.hero-content {
  flex: 1;
  width: 100%;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: rgba(34, 197, 94, 0.1);
  border: 1px solid rgba(34, 197, 94, 0.3);
  border-radius: 50px;
  font-size: 0.875rem;
  color: var(--accent-success);
  margin-bottom: 24px;
}

.pulse-dot {
  width: 8px;
  height: 8px;
  background: var(--accent-success);
  border-radius: 50%;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(1.2); }
}

.hero-headline {
  font-family: var(--font-mono);
  font-size: 3rem;
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 24px;
  background: linear-gradient(135deg, var(--text-primary) 0%, var(--accent-primary) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subheadline {
  font-size: 1.25rem;
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: 32px;
}

.hero-cta {
  display: flex;
  gap: 16px;
  margin-bottom: 48px;
}

.hero-stats {
  display: flex;
  gap: 24px;
}

.stat-card {
  display: flex;
  flex-direction: column;
  padding: 16px 24px;
  background: var(--bg-surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
}

.stat-value {
  font-family: var(--font-mono);
  font-size: 2rem;
  font-weight: 700;
  color: var(--accent-primary);
}

.stat-label {
  font-size: 0.875rem;
  color: var(--text-secondary);
}

.hero-terminal {
  flex: 1;
  max-width: 500px;
  margin-left: 48px;
  background: var(--bg-surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  overflow: hidden;
}

.terminal-header {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
  background: rgba(0, 0, 0, 0.3);
  border-bottom: 1px solid var(--border);
}

.terminal-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.terminal-dot.red { background: #ef4444; }
.terminal-dot.yellow { background: #eab308; }
.terminal-dot.green { background: #22c55e; }

.terminal-title {
  margin-left: auto;
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: var(--text-secondary);
}

.terminal-code {
  padding: 20px;
  font-family: var(--font-mono);
  font-size: 0.875rem;
  line-height: 1.6;
  overflow-x: auto;
}

.terminal-code .keyword { color: #c792ea; }
.terminal-code .require { color: #82aaff; }
.terminal-code .string { color: #c3e88d; }
.terminal-code .number { color: #f78c6c; }
.terminal-code .prop { color: #82aaff; }
.terminal-code .exports { color: #ffcb6b; }

@media (max-width: 1024px) {
  .hero-terminal {
    display: none;
  }
}

@media (max-width: 768px) {
  .hero-section {
    padding: 100px 0 60px;
    min-height: auto;
  }

  .hero-headline {
    font-size: 2rem;
  }

  .hero-subheadline {
    font-size: 1rem;
  }

  .hero-cta {
    flex-direction: column;
  }

  .hero-stats {
    flex-wrap: wrap;
    gap: 16px;
  }

  .stat-card {
    flex: 1;
    min-width: 140px;
    padding: 12px 16px;
  }

  .stat-value {
    font-size: 1.5rem;
  }
}
</style>
