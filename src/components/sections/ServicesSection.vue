<script setup></script>
<template>
  <section id="services" class="background-gradient" data-translation-key="header.services">
    <div class="container">
      <div class="row">
        <div class="col-12 mt-5 pt-5 text-center text-white">
          <h1 class="display-6 fw-bold">
            {{ $t('services.title') }}
          </h1>
        </div>
        <div class="col-12 text-center text-white">
          <p class="lead pt-2">
            {{ $t('services.description') }}
          </p>
        </div>
        <div class="col-12 mb-5 py-3">
          <div class="card mb-5 bg-transparent border-0 text-white">
            <div class="row g-5">
              <div class="col-md-5 col-sm-6">
                <img
                  src="@/assets/images/services/app-development.jpg"
                  class="img-fluid shadow rounded-1"
                  :alt="$t('services.lists[0].title')"
                />
              </div>
              <div class="col-md-7 col-sm-6">
                <div class="card-body p-0">
                  <h2 class="card-title">{{ $t('services.lists[0].title') }}</h2>
                  <p class="card-text">{{ $t('services.lists[0].description') }}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="card mb-5 bg-transparent border-0 text-white">
            <div class="row flex-lg-row-reverse g-5">
              <div class="col-md-5 col-sm-6">
                <img
                  src="@/assets/images/services/branding-&-creative-design.jpg"
                  class="img-fluid shadow rounded-1"
                  :alt="$t('services.lists[1].title')"
                />
              </div>
              <div class="col-md-7 col-sm-6">
                <div class="card-body p-0">
                  <h2 class="card-title">{{ $t('services.lists[1].title') }}</h2>
                  <p class="card-text">{{ $t('services.lists[1].description') }}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="card mb-5 bg-transparent border-0 text-white">
            <div class="row g-5">
              <div class="col-md-5 col-sm-6">
                <img
                  src="@/assets/images/services/quality-assurance.jpg"
                  class="img-fluid shadow rounded-1"
                  :alt="$t('services.lists[2].title')"
                />
              </div>
              <div class="col-md-7 col-sm-6">
                <div class="card-body p-0">
                  <h2 class="card-title">{{ $t('services.lists[2].title') }}</h2>
                  <p class="card-text">{{ $t('services.lists[2].description') }}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="card mb-5 bg-transparent border-0 text-white">
            <div class="row flex-lg-row-reverse g-5">
              <div class="col-md-5 col-sm-6">
                <img
                  src="@/assets/images/services/in-house-training.jpg"
                  class="img-fluid shadow rounded-1"
                  :alt="$t('services.lists[3].title')"
                />
              </div>
              <div class="col-md-7 col-sm-6">
                <div class="card-body p-0">
                  <h2 class="card-title">{{ $t('services.lists[3].title') }}</h2>
                  <p class="card-text">{{ $t('services.lists[3].description') }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
