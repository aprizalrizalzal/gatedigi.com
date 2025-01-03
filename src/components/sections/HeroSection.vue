<script setup></script>
<template>
  <section id="home" data-translation-key="header.home">
    <div class="background-gradient">
      <div class="row py-5">
        <div class="col-9 mx-lg-auto mx-md-auto mx-sm-2 pt-5 text-center text-white">
          <h1 class="display-1 fw-bold">{{ $t('hero.title') }}</h1>
          <h2 class="display-1 fw-bold">{{ $t('hero.subtitle') }}</h2>
          <p class="fs-3 mx-4 py-3">{{ $t('hero.description') }}</p>
          <div class="d-flex justify-content-center">
            <a href="#contact" class="btn btn-lg fs-3 px-5 btn-primary me-md-2 rounded-0">
              {{ $t('hero.contactUs') }}
            </a>
            <a href="#services" class="btn btn-lg fs-3 px-5 btn-outline-light me-md-2 rounded-0">
              {{ $t('hero.viewServices') }}
            </a>
          </div>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-12 mx-lg-auto mx-md-auto mx-sm-2"></div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.background-gradient {
  background: rgb(0, 0, 0);
  background: linear-gradient(70deg, rgba(0, 0, 0, 1) 10%, rgba(30, 72, 255, 1) 90%);
}
</style>
