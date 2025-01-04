<script setup>
import AboutSection from '@/components/sections/AboutSection.vue'
import ContactSection from '@/components/sections/ContactSection.vue'
import HomeSection from '@/components/sections/HomeSection.vue'
import ProjectsSection from '@/components/sections/ProjectsSection.vue'
import ServicesSection from '@/components/sections/ServicesSection.vue'
</script>

<template>
  <div class="bg-black-blue-gradient">
    <HomeSection></HomeSection>
  </div>
  <div class="bg-black">
    <AboutSection></AboutSection>
  </div>
  <div class="bg-blue-black-gradient">
    <ServicesSection></ServicesSection>
  </div>
  <div class="bg-black">
    <ProjectsSection></ProjectsSection>
  </div>
  <div class="bg-black-blue-gradient">
    <ContactSection></ContactSection>
  </div>
</template>
