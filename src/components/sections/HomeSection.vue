<script setup>
import webDesignImage_1 from '@/assets/images/projects/design/prime-hydration-drink-by-logan-paul-x-ksi-landing-page-design.jpg'
import webDesignImage_2 from '@/assets/images/projects/design/aivor-gaming-gear-e-commerce.jpg'
import mobileDesignImage_1 from '@/assets/images/projects/design/tourest-travel-app-design.jpg'
import mobileDesignImage_2 from '@/assets/images/projects/design/pairs-mobile-sneakers-e-commerce-app.jpg'
</script>
<template>
  <section id="home" data-translation-key="header.home">
    <div class="container">
      <div class="row py-5">
        <div class="col-md-12 my-5 text-center text-white">
          <div class="mt-3">
            <h1 class="display-1 fw-bold" data-aos="zoom-in-down">
              {{ $t('hero.title') }}
            </h1>
            <h2 class="display-6 fw-bold" data-aos="zoom-in-up">
              {{ $t('hero.subtitle') }}
            </h2>
          </div>
          <div class="pt-3">
            <p class="lead pb-3" data-aos="fade-up">{{ $t('hero.description') }}</p>
            <div class="d-md-flex justify-content-center gap-3">
              <a href="#contact" class="btn px-5 mt-2 btn-primary rounded-1" data-aos="zoom-in-up">
                {{ $t('hero.contactUs') }}
              </a>
              <a
                href="#services"
                class="btn px-5 mt-2 btn-outline-light rounded-1"
                data-aos="zoom-in-down"
              >
                {{ $t('hero.viewServices') }}
              </a>
            </div>
          </div>
        </div>
        <div class="col-md-10 mx-auto d-none d-md-block" data-aos="fade-up">
          <div class="d-flex flex-wrap justify-content-center gap-1">
            <img :src="webDesignImage_2" alt="" class="img-custom img-large" />
            <img :src="webDesignImage_1" alt="" class="img-custom img-medium" />
          </div>
          <div class="d-flex flex-wrap justify-content-center gap-1 mt-1">
            <img :src="mobileDesignImage_2" alt="" class="img-custom img-medium" />
            <img :src="mobileDesignImage_1" alt="" class="img-custom img-large" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.img-custom {
  object-fit: cover;
}

.img-large {
  width: 500px;
  height: 200px;
}

.img-medium {
  width: 250px;
  height: 200px;
}
</style>
