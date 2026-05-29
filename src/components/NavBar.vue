<template>
  <header class="navbar" :class="{ scrolled: isScrolled }">
    <div class="navbar-container">
      <a href="#" class="navbar-logo">
        <span class="logo-bracket"><</span>
        <span class="logo-text">SA</span>
        <span class="logo-bracket">/></span>
      </a>

      <nav class="navbar-nav" :class="{ active: isMobileMenuOpen }">
        <a
          v-for="link in navLinks"
          :key="link.id"
          :href="`#${link.id}`"
          class="nav-link"
          @click="closeMobileMenu"
        >
          {{ link.label }}
        </a>
      </nav>

      <div class="navbar-actions">
        <button class="lang-toggle" @click="toggleLanguage">
          {{ languageLabel }}
        </button>
        <button
          class="mobile-menu-btn"
          @click="toggleMobileMenu"
          :aria-expanded="isMobileMenuOpen"
        >
          <span class="menu-icon" :class="{ open: isMobileMenuOpen }">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from '../composables/useI18n.js'

const { t, toggleLanguage, languageLabel } = useI18n()

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

const navLinks = ref([])

const updateNavLinks = () => {
  navLinks.value = [
    { id: 'about', label: t.value.nav.about },
    { id: 'what-i-do', label: t.value.nav.whatIDo },
    { id: 'experience', label: t.value.nav.experience },
    { id: 'skills', label: t.value.nav.skills },
    { id: 'featured-work', label: t.value.nav.work },
    { id: 'education', label: t.value.nav.education },
    { id: 'contact', label: t.value.nav.contact }
  ]
}

updateNavLinks()

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  padding: 16px 0;
  transition: all 200ms ease;
  background: transparent;
}

.navbar.scrolled {
  background: rgba(15, 23, 42, 0.9);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--border);
  padding: 12px 0;
}

.navbar-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.navbar-logo {
  font-family: var(--font-mono);
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text-primary);
  display: flex;
  align-items: center;
  gap: 2px;
}

.logo-bracket {
  color: var(--accent-primary);
}

.logo-text {
  color: var(--text-primary);
}

.navbar-nav {
  display: flex;
  gap: 32px;
}

.nav-link {
  color: var(--text-secondary);
  font-size: 0.9rem;
  font-weight: 500;
  transition: color var(--transition);
  position: relative;
}

.nav-link:hover {
  color: var(--accent-primary);
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--accent-primary);
  transition: width var(--transition);
}

.nav-link:hover::after {
  width: 100%;
}

.navbar-actions {
  display: flex;
  align-items: center;
  gap: 16px;
}

.lang-toggle {
  background: var(--bg-surface);
  border: 1px solid var(--border);
  color: var(--text-primary);
  padding: 8px 16px;
  border-radius: var(--radius-md);
  font-family: var(--font-mono);
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  transition: all var(--transition);
}

.lang-toggle:hover {
  border-color: var(--accent-primary);
  color: var(--accent-primary);
}

.mobile-menu-btn {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
}

.menu-icon {
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 24px;
}

.menu-icon span {
  display: block;
  height: 2px;
  background: var(--text-primary);
  border-radius: 1px;
  transition: all var(--transition);
}

.menu-icon.open span:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}

.menu-icon.open span:nth-child(2) {
  opacity: 0;
}

.menu-icon.open span:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -5px);
}

@media (max-width: 900px) {
  .navbar-nav {
    position: fixed;
    top: 0;
    right: -100%;
    width: 280px;
    height: 100vh;
    background: var(--bg-surface);
    flex-direction: column;
    padding: 80px 32px 32px;
    gap: 24px;
    transition: right var(--transition);
    border-left: 1px solid var(--border);
  }

  .navbar-nav.active {
    right: 0;
  }

  .mobile-menu-btn {
    display: block;
  }
}
</style>
