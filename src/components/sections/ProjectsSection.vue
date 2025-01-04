<script setup>
import { ref } from 'vue'

const filters = ref([
  { name: '*', label: 'All' },
  { name: '.web-app', label: 'Web App' },
  { name: '.mobile-app', label: 'Mobile App' },
  { name: '.logo-design', label: 'Logo Design' },
  { name: '.web-design', label: 'Web Design' },
  { name: '.mobile-design', label: 'Mobile Design' },
])

const activeFilter = ref('*')

function handleFilterClick(filterName) {
  activeFilter.value = filterName
}
</script>
<template>
  <section id="projects" data-translation-key="header.projects">
    <div class="container">
      <div class="row pt-5">
        <div class="col-md-12 mt-5 text-center text-white">
          <h1 class="display-6 fw-bold">
            {{ $t('projects.title') }}
          </h1>
        </div>
        <div class="col-md-12 text-center text-white" data-aos="zoom-in">
          <p class="lead pt-2">
            {{ $t('projects.description') }}
          </p>
        </div>
        <div class="col-md-12 mb-5 py-3" data-aos="zoom-in-up">
          <ul class="nav justify-content-center mb-4">
            <li v-for="filter in filters" :key="filter.name" class="nav-item">
              <button
                class="nav-link text-white"
                :class="{ active: activeFilter === filter.name }"
                @click="handleFilterClick(filter.name)"
              >
                {{ filter.label }}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
