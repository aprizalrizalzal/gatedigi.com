<script setup>
import AboutSection from '@/components/sections/AboutSection.vue'
import ContactSection from '@/components/sections/ContactSection.vue'
import HeroSection from '@/components/sections/HeroSection.vue'
import ProjectsSection from '@/components/sections/ProjectsSection.vue'
import ServicesSection from '@/components/sections/ServicesSection.vue'
import StatsSection from '@/components/sections/StatsSection.vue'
</script>

<template>
  <div class="">
    <HeroSection></HeroSection>
  </div>
  <div>
    <AboutSection></AboutSection>
  </div>
  <div>
    <ServicesSection></ServicesSection>
  </div>
  <div>
    <ProjectsSection></ProjectsSection>
  </div>
  <div>
    <StatsSection></StatsSection>
  </div>
  <div>
    <ContactSection></ContactSection>
  </div>
</template>
