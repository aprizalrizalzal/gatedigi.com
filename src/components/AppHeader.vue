<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import brandImage from '@/assets/images/brand/logo-blue.png'

const isScrolled = ref(false)
const active = ref('')

const handleScroll = () => {
  isScrolled.value = window.scrollY > 0

  if (window.location.pathname === '/blog') {
    active.value = 'header.blog'
  } else {
    const sections = document.querySelectorAll('section')
    let found = false

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect()
      if (rect.top <= 20 && rect.bottom >= 50 && !found) {
        const sectionKey = section.dataset.translationKey
        if (active.value !== sectionKey) {
          active.value = sectionKey
          window.history.replaceState(null, '', `#${section.id}`)
        }
        found = true
      }
    })
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const menus = [
  { href: '/', translationKey: 'header.home' },
  { href: '#about', translationKey: 'header.about' },
  { href: '#services', translationKey: 'header.services' },
  { href: '#projects', translationKey: 'header.projects' },
  { href: '/blog', translationKey: 'header.blog' },
  { href: '#contact', translationKey: 'header.contact' },
]

const handleNavigationClick = (name) => {
  active.value = name

  if (name === 'header.blog') {
    window.location.href = '/blog'
  } else if (window.location.pathname === '/blog') {
    const sectionId = name.split('.')[1].toLowerCase()
    window.location.href = `/#${sectionId}`
  } else {
    const sectionId = name.split('.')[1].toLowerCase()
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
      window.history.pushState(null, '', `#${sectionId}`)
    }
  }
}

const { locale } = useI18n()

const changeLanguage = () => {
  locale.value = locale.value === 'id' ? 'en' : 'id'
}
</script>

<template>
  <nav class="fixed-top navbar navbar-expand-lg bg-black text-white shadow" data-bs-theme="dark">
    <div class="container">
      <a class="navbar-brand" href="/">
        <img :src="brandImage" alt="GATEDIGI - Beyond Innovation" width="192" />
      </a>
      <button
        class="navbar-toggler rounded-1"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li v-for="(menu, index) in menus" :key="index" class="nav-item m-2">
            <a
              :href="menu.href"
              @click.prevent="handleNavigationClick(menu.translationKey)"
              :class="{
                'nav-link active': active === menu.translationKey,
                'nav-link': active !== menu.translationKey,
              }"
              >{{ $t(menu.translationKey) }}</a
            >
          </li>
        </ul>
        <div class="ms-auto p-2">
          <button class="btn btn-outline-transparent rounded-1" @click="changeLanguage">
            {{ $t('header.language') }}
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>
