<script setup></script>
<template>
  <section id="about" data-translation-key="header.about">
    <div class="container">
      <div class="row pt-5">
        <div class="col-md-12 mt-5 text-center text-white">
          <h1 class="display-6 fw-bold">
            {{ $t('about.title') }}
          </h1>
        </div>
        <div class="col-md-12 text-center text-white">
          <p class="lead pt-2" data-aos="zoom-in">
            {{ $t('about.description') }}
          </p>
        </div>
        <div class="col-md-12 mb-5 pb-5">
          <h2 class="display-6 text-center text-white py-4">{{ $t('about.vision.title') }}</h2>
          <div class="row g-4">
            <div class="col-md-6 col-sm-12">
              <div class="card mx-2 border-light mb-3 rounded-1" data-aos="zoom-in-up">
                <div class="card-body">
                  <h5 class="card-title">{{ $t('about.vision.lists[0].title') }}</h5>
                  <p class="card-text">{{ $t('about.vision.lists[0].description') }}</p>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-sm-12">
              <div class="card mx-2 border-light mb-3 rounded-1" data-aos="zoom-in-down">
                <div class="card-body">
                  <h5 class="card-title">{{ $t('about.vision.lists[1].title') }}</h5>
                  <p class="card-text">{{ $t('about.vision.lists[1].description') }}</p>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-sm-12">
              <div class="card mx-2 border-light mb-3 rounded-1" data-aos="zoom-in-up">
                <div class="card-body">
                  <h5 class="card-title">{{ $t('about.vision.lists[2].title') }}</h5>
                  <p class="card-text">{{ $t('about.vision.lists[2].description') }}</p>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-sm-12">
              <div class="card mx-2 border-light mb-3 rounded-1" data-aos="zoom-in-down">
                <div class="card-body">
                  <h5 class="card-title">{{ $t('about.vision.lists[3].title') }}</h5>
                  <p class="card-text">{{ $t('about.vision.lists[3].description') }}</p>
                </div>
              </div>
            </div>
          </div>
          <h2 class="display-6 text-center text-white py-4">{{ $t('about.mission.title') }}</h2>
          <div class="card mx-2 border-light mb-3 rounded-1" data-aos="zoom-in">
            <div class="card-body">
              <p class="card-text">
                {{ $t('about.mission.description') }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
