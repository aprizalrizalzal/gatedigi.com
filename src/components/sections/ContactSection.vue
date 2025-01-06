<script setup></script>
<template>
  <section id="contact" data-translation-key="header.contact">
    <div class="container">
      <div class="row pt-5">
        <div class="col-md-12 mt-5 text-center text-white">
          <h1 class="display-6 fw-bold">
            {{ $t('contact.title') }}
          </h1>
        </div>
        <div class="col-md-12 text-center text-white" data-aos="zoom-in">
          <p class="lead pt-2">
            {{ $t('contact.description') }}
          </p>
        </div>
        <div class="col-md-12 my-5">
          <div class="bg-white shadow rounded-1" data-aos="fade-down">
            <div class="row px-4 pb-4 g-4">
              <div class="col-lg-4">
                <div class="info-item d-flex align-items-center">
                  <i class="bi bi-geo-alt flex-shrink-0"></i>
                  <div>
                    <h3>{{ $t('contact.lists[0].title') }}</h3>
                    <p>{{ $t('contact.lists[0].description') }}</p>
                  </div>
                </div>
              </div>

              <div class="col-lg-4">
                <div class="info-item d-flex align-items-center">
                  <i class="bi bi-telephone flex-shrink-0"></i>
                  <div>
                    <h3>{{ $t('contact.lists[1].title') }}</h3>
                    <p>{{ $t('contact.lists[1].description') }}</p>
                  </div>
                </div>
              </div>

              <div class="col-lg-4">
                <div class="info-item d-flex align-items-center">
                  <i class="bi bi-envelope flex-shrink-0"></i>
                  <div>
                    <h3>{{ $t('contact.lists[2].title') }}</h3>
                    <p>{{ $t('contact.lists[2].description') }}</p>
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
.info-item i {
  font-size: 20px;
  color: #000000;
  width: 56px;
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in-out;
  border-radius: 50%;
  border: 1px solid color-mix(in srgb, #000000, transparent 40%);
  margin-right: 15px;
}

.info-item h3 {
  font-size: 18px;
  font-weight: 700;
  margin: 0 0 2px 0;
}

.info-item p {
  padding: 0;
  margin-bottom: 0;
  font-size: 14px;
}

.info-item:hover i {
  background: #000000;
  color: #ffffff;
}
</style>
