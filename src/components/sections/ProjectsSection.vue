<script setup>
import imagesLoaded from 'imagesloaded'
import Isotope from 'isotope-layout'
import { onMounted, ref } from 'vue'

import webAppImage_1 from '@/assets/images/projects/app/sis-aslimandiri.png'
import mobileAppImage_1 from '@/assets/images/projects/app/sii-smkn-1-batukliang.png'
import logoDesignImage_1 from '@/assets/images/projects/design/invinity-logo-design.jpg'
import logoDesignImage_2 from '@/assets/images/projects/design/we-are-sipn-cups.png'
import webDesignImage_1 from '@/assets/images/projects/design/prime-hydration-drink-by-logan-paul-x-ksi-landing-page-design.jpg'
import webDesignImage_2 from '@/assets/images/projects/design/aivor-gaming-gear-e-commerce.jpg'
import webDesignImage_3 from '@/assets/images/projects/design/dashboard-design.jpg'
import webDesignImage_4 from '@/assets/images/projects/design/social-media-home-page.png'
import webDesignImage_5 from '@/assets/images/projects/design/build-up-pc-builder-website.png'
import webDesignImage_6 from '@/assets/images/projects/design/e-commerce-gaming-gear.png'
import mobileDesignImage_1 from '@/assets/images/projects/design/tourest-travel-app-design.jpg'
import mobileDesignImage_2 from '@/assets/images/projects/design/pairs-mobile-sneakers-e-commerce-app.jpg'
import mobileDesignImage_3 from '@/assets/images/projects/design/gaming-gear-shop.jpg'
import mobileDesignImage_4 from '@/assets/images/projects/design/food-recipe-app.jpg'

const categories = ref([
  { name: '*', label: 'All' },
  { name: '.web-app', label: 'Web App' },
  { name: '.mobile-app', label: 'Mobile App' },
  { name: '.logo-design', label: 'Logo Design' },
  { name: '.web-design', label: 'Web Design' },
  { name: '.mobile-design', label: 'Mobile Design' },
])

const active = ref('*')

const grid = ref(null)

const items = ref([
  {
    category: 'web-app',
    background: 'bg-dark text-white',
    image: webAppImage_1,
    subtitle: 'Sistem Informasi Service',
    button: 'btn-outline-light',
  },
  {
    category: 'mobile-app',
    background: 'bg-light text-black',
    image: mobileAppImage_1,
    subtitle: 'Sistem Informasi Inventaris',
    button: 'btn-outline-dark',
  },
  {
    category: 'logo-design',
    background: 'bg-dark text-white',
    image: logoDesignImage_1,
    subtitle: 'Infinity',
    button: 'btn-outline-light',
  },
  {
    category: 'logo-design',
    background: 'bg-dark text-white',
    image: logoDesignImage_2,
    subtitle: 'sipncups',
    button: 'btn-outline-light',
  },
  {
    category: 'web-design',
    background: 'bg-light text-black',
    image: webDesignImage_1,
    subtitle: 'PRIME Hydration Drink by Logan Paul x KSI',
    button: 'btn-outline-dark',
  },
  {
    category: 'web-design',
    background: 'bg-light text-black',
    image: webDesignImage_2,
    subtitle: 'AIVOR - Gaming Gear Ecommerce',
    button: 'btn-outline-dark',
  },
  {
    category: 'web-design',
    background: 'bg-light text-black',
    image: webDesignImage_3,
    subtitle: 'SPP-WEB',
    button: 'btn-outline-dark',
  },
  {
    category: 'web-design',
    background: 'bg-light text-black',
    image: webDesignImage_4,
    subtitle: 'Ambatukam.id',
    button: 'btn-outline-dark',
  },
  {
    category: 'web-design',
    background: 'bg-light text-black',
    image: webDesignImage_5,
    subtitle: 'Build.Up',
    button: 'btn-outline-dark',
  },
  {
    category: 'web-design',
    background: 'bg-light text-black',
    image: webDesignImage_6,
    subtitle: 'FANTECH-INDONESIA',
    button: 'btn-outline-dark',
  },
  {
    category: 'mobile-design',
    background: 'bg-dark text-white',
    image: mobileDesignImage_1,
    subtitle: 'TOURest - Travel',
    button: 'btn-outline-light',
  },
  {
    category: 'mobile-design',
    background: 'bg-dark text-white',
    image: mobileDesignImage_2,
    subtitle: 'PAIRS - Sneakers E-Commerce',
    button: 'btn-outline-light',
  },
  {
    category: 'mobile-design',
    background: 'bg-dark text-white',
    image: mobileDesignImage_3,
    subtitle: 'Gaming Gear Shop',
    button: 'btn-outline-light',
  },
  {
    category: 'mobile-design',
    background: 'bg-dark text-white',
    image: mobileDesignImage_4,
    subtitle: 'Food Recipe',
    button: 'btn-outline-light',
  },
])

const reverseFormat = (slug) => {
  return slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

let isotopeInstance = null

onMounted(() => {
  imagesLoaded(grid.value, () => {
    isotopeInstance = new Isotope(grid.value, {
      itemSelector: '.grid-item',
      layoutMode: 'fitRows',
    })
  })
})

const filterItems = (filter) => {
  active.value = filter
  isotopeInstance.arrange({ filter })
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
        <div class="col-md-12 my-3" data-aos="zoom-in-up">
          <ul class="nav justify-content-center">
            <li v-for="(category, index) in categories" :key="index" class="nav-item">
              <button
                :class="{
                  'nav-link text-white active fw-bold': active === category.name,
                  'nav-link text-white': active !== category.name,
                }"
                @click="filterItems(category.name)"
              >
                {{ category.label }}
              </button>
            </li>
          </ul>
        </div>
        <div class="col-md-12 mb-5 py-3" data-aos="zoom-in-up">
          <div ref="grid" class="grid">
            <div
              v-for="(item, index) in items"
              :key="index"
              :class="item.category"
              class="grid-item"
            >
              <div class="card border-0 rounded-0 bg-transparent shadow">
                <img :src="item.image" class="img-fluid" :alt="item.subtitle" />
                <div class="card-body text-center py-3" :class="item.background">
                  <h2 class="fs-5">{{ reverseFormat(item.category) }}</h2>
                  <p class="fs-6 mb-2">{{ item.subtitle }}</p>
                  <div class="d-flex justify-content-center">
                    <a
                      :href="item.image"
                      class="glightbox btn rounded px-2.5 border-0 me-2"
                      :class="item.button"
                      :data-gallery="item.category"
                      ><i class="bi bi-zoom-in"></i>
                    </a>
                    <a
                      :href="item.href"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="btn rounded px-2.5 border-0"
                      :class="item.button"
                    >
                      <i class="bi bi-box-arrow-up-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.grid-item {
  width: 100%;
}

@media (min-width: 576px) {
  .grid-item {
    width: 33%;
  }
}
</style>
