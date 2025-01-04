<script setup></script>
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
        <div class="col-md-12"></div>
      </div>
    </div>
  </section>
</template>
