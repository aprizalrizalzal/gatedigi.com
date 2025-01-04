<script setup></script>
<template>
  <section id="services" class="background-gradient" data-translation-key="header.services">
    <div class="container">
      <div class="row pt-5">
        <div class="col-md-12 mt-5 text-center text-white">
          <h1 class="display-6 fw-bold">
            {{ $t('services.title') }}
          </h1>
        </div>
        <div class="col-md-12 text-center text-white" data-aos="zoom-in">
          <p class="lead pt-2">
            {{ $t('services.description') }}
          </p>
        </div>
        <div class="col-md-12 mb-5 py-3">
          <div class="card mx-2 mb-3 py-2 bg-transparent border-0 text-white">
            <div class="row">
              <div class="col-md-7 col-sm-6" data-aos="zoom-in-up">
                <div class="card-body px-0">
                  <h2 class="card-title">{{ $t('services.lists[0].title') }}</h2>
                  <p class="card-text">{{ $t('services.lists[0].description') }}</p>
                </div>
              </div>
              <div class="col-md-5 col-sm-6" data-aos="zoom-in-down">
                <img
                  src="@/assets/images/services/app-development.jpg"
                  class="img-fluid shadow rounded-1"
                  :alt="$t('services.lists[0].title')"
                />
              </div>
            </div>
          </div>
          <div class="card mx-2 mb-3 py-2 bg-transparent border-0 text-white">
            <div class="row flex-md-row-reverse">
              <div class="col-md-7 col-sm-6" data-aos="zoom-in-down">
                <div class="card-body px-0">
                  <h2 class="card-title">{{ $t('services.lists[1].title') }}</h2>
                  <p class="card-text">{{ $t('services.lists[1].description') }}</p>
                </div>
              </div>
              <div class="col-md-5 col-sm-6" data-aos="zoom-in-up">
                <img
                  src="@/assets/images/services/branding-&-creative-design.jpg"
                  class="img-fluid shadow rounded-1"
                  :alt="$t('services.lists[1].title')"
                />
              </div>
            </div>
          </div>
          <div class="card mx-2 mb-3 py-2 bg-transparent border-0 text-white">
            <div class="row">
              <div class="col-md-7 col-sm-6" data-aos="zoom-in-up">
                <div class="card-body px-0">
                  <h2 class="card-title">{{ $t('services.lists[2].title') }}</h2>
                  <p class="card-text">{{ $t('services.lists[2].description') }}</p>
                </div>
              </div>
              <div class="col-md-5 col-sm-6" data-aos="zoom-in-down">
                <img
                  src="@/assets/images/services/quality-assurance.jpg"
                  class="img-fluid shadow rounded-1"
                  :alt="$t('services.lists[2].title')"
                />
              </div>
            </div>
          </div>
          <div class="card mx-2 mb-3 py-2 bg-transparent border-0 text-white">
            <div class="row flex-md-row-reverse">
              <div class="col-md-7 col-sm-6" data-aos="zoom-in-down">
                <div class="card-body px-0">
                  <h2 class="card-title">{{ $t('services.lists[3].title') }}</h2>
                  <p class="card-text">{{ $t('services.lists[3].description') }}</p>
                </div>
              </div>
              <div class="col-md-5 col-sm-6" data-aos="zoom-in-up">
                <img
                  src="@/assets/images/services/in-house-training.jpg"
                  class="img-fluid shadow rounded-1"
                  :alt="$t('services.lists[3].title')"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
