<template>
  <div class="app">
    <NavBar />
    <main>
      <HeroSection />
      <AboutSection />
      <WhatIDoSection />
      <ExperienceSection />
      <SkillsSection />
      <FeaturedWorkSection />

      <EducationSection />
      <LanguagesSection />
      <ContactSection />
    </main>
    <FooterSection />
  </div>
</template>

<script setup>
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import WhatIDoSection from './components/WhatIDoSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import FeaturedWorkSection from './components/FeaturedWorkSection.vue'
import MiniToolsSection from './components/MiniToolsSection.vue'
import EducationSection from './components/EducationSection.vue'
import LanguagesSection from './components/LanguagesSection.vue'
import ContactSection from './components/ContactSection.vue'
import FooterSection from './components/FooterSection.vue'
</script>

<style>
.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
}
</style>
