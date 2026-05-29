<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <p class="footer-built">{{ t.footer.builtWith }}</p>
        <p class="footer-copyright">© {{ currentYear }} {{ t.footer.rights }}</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { useI18n } from '../composables/useI18n.js';

const { t } = useI18n();

const currentYear = new Date().getFullYear();
</script>

<style scoped>
.footer {
  padding: 32px 0;
  border-top: 1px solid var(--border);
  background: var(--bg-primary);
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer-built {
  font-family: var(--font-mono);
  font-size: 0.875rem;
  color: var(--text-secondary);
}

.footer-copyright {
  font-size: 0.875rem;
  color: var(--text-secondary);
}

@media (max-width: 640px) {
  .footer-content {
    flex-direction: column;
    gap: 8px;
    text-align: center;
  }
}
</style>
