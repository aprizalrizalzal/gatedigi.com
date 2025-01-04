<script setup>
import { onMounted, onUnmounted, ref } from 'vue'

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
</script>
<template>
  <footer class="bg-black">
    <div class="container">
      <div class="row pt-5">
        <div class="col-lg-8 col-md-8 col-sm-8 d-flex gap-4">
          <div class="col-lg-6 col-md-6 col-sm-6">
            <h5 class="mb-4 text-white">GATEDIGI - BEYOUND INNOVATION</h5>
            <img
              src="@/assets/images/brand/logo-only-white.png"
              class="d-block img-fluid mb-4 -ms"
              alt="GATEDIGI - Beyond Innovation"
              width="192"
              loading="lazy"
            />
            <ul class="d-flex list-unstyled">
              <li class="me-3">
                <a
                  class="facebook"
                  href="https://www.facebook.com/gatedigi69"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="bi bi-facebook text-white" style="font-size: 1.5rem"></i>
                </a>
              </li>
              <li class="me-3">
                <a
                  class="instagram"
                  href="https://www.instagram.com/gatedigi69"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="bi bi-instagram text-white" style="font-size: 1.5rem"></i>
                </a>
              </li>
              <li class="me-3">
                <a
                  class="threads"
                  href="https://www.threads.net/@gatedigi69"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="bi bi-threads text-white" style="font-size: 1.5rem"></i>
                </a>
              </li>
              <li class="me-3">
                <p class="fs-5 text-white">@gatedigi69</p>
              </li>
            </ul>
          </div>
          <div class="col-lg-6 col-md-6 col-sm-6 mb-3">
            <h5 class="text-white">Link</h5>
            <ul class="nav flex-column g-0 p-0 m-0">
              <li v-for="(menu, index) in menus" :key="index" class="nav-item g-0 p-0 m-0">
                <a
                  :href="menu.href"
                  @click.prevent="handleNavigationClick(menu.translationKey)"
                  :class="{
                    'nav-link px-0 py-1 active': active === menu.translationKey,
                    'nav-link px-0 py-1 ': active !== menu.translationKey,
                  }"
                  >{{ $t(menu.translationKey) }}</a
                >
              </li>
            </ul>
          </div>
        </div>

        <div class="col-lg-4 col-md-4 col-sm-4 mb-3">
          <div style="width: 100%">
            <iframe
              width="356"
              height="207"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
              src="https://maps.google.com/maps?width=356&amp;height=207&amp;hl=en&amp;q=GATEDIGI%20-%20Beyond%20Innovation+(GATEDIGI%20-%20Beyond%20Innovation)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            ></iframe>
          </div>
        </div>
      </div>

      <div
        class="d-flex flex-column flex-sm-row justify-content-between pt-4 mt-4 mx-lg-0 mx-3 border-top"
      >
        <p class="text-white">
          {{ $t('footer.copyright') }}, {{ $t('footer.privacyPolicy') }}
          {{ $t('footer.termsOfService') }}
        </p>
      </div>
    </div>
  </footer>
</template>
