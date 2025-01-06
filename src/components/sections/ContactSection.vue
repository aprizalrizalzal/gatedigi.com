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
        <div class="row mx-auto">
          <div class="col mt-3 mb-5">
            <div class="wrapper">
              <div class="profile-1">
                <div class="overlay">
                  <div class="about d-flex flex-column">
                    <h4>Aprizal</h4>
                    <span>Software Developer</span>
                  </div>
                  <ul class="social-icons">
                    <li><i class="bi bi-facebook"></i></li>
                    <li><i class="bi bi-linkedin"></i></li>
                    <li><i class="bi bi-twitter"></i></li>
                    <li><i class="bi bi-instagram"></i></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="col mt-3 mb-5">
            <div class="wrapper">
              <div class="profile-2">
                <div class="overlay">
                  <div class="about d-flex flex-column">
                    <h4>Aprizal</h4>
                    <span>Software Developer</span>
                  </div>
                  <ul class="social-icons">
                    <li><i class="bi bi-facebook"></i></li>
                    <li><i class="bi bi-linkedin"></i></li>
                    <li><i class="bi bi-twitter"></i></li>
                    <li><i class="bi bi-instagram"></i></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="col mt-3 mb-5">
            <div class="wrapper">
              <div class="profile-3">
                <div class="overlay">
                  <div class="about d-flex flex-column">
                    <h4>Aprizal</h4>
                    <span>Software Developer</span>
                  </div>
                  <ul class="social-icons">
                    <li><i class="bi bi-facebook"></i></li>
                    <li><i class="bi bi-linkedin"></i></li>
                    <li><i class="bi bi-twitter"></i></li>
                    <li><i class="bi bi-instagram"></i></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="col mt-3 mb-5">
            <div class="wrapper">
              <div class="profile-4">
                <div class="overlay">
                  <div class="about d-flex flex-column">
                    <h4>Aprizal</h4>
                    <span>Software Developer</span>
                  </div>
                  <ul class="social-icons">
                    <li><i class="bi bi-facebook"></i></li>
                    <li><i class="bi bi-linkedin"></i></li>
                    <li><i class="bi bi-twitter"></i></li>
                    <li><i class="bi bi-instagram"></i></li>
                  </ul>
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

.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
}
.profile-1 {
  position: relative;
  width: 300px;
  height: 350px;
  background: url('../../assets/images/profile/aprizal.png');
  background-size: cover;
  background-position: center;
  cursor: pointer;
}
.profile-2 {
  position: relative;
  width: 300px;
  height: 350px;
  background: url('../../assets/images/profile/aprizal.png');
  background-size: cover;
  background-position: center;
  cursor: pointer;
}
.profile-3 {
  position: relative;
  width: 300px;
  height: 350px;
  background: url('../../assets/images/profile/aprizal.png');
  background-size: cover;
  background-position: center;
  cursor: pointer;
}
.profile-4 {
  position: relative;
  width: 300px;
  height: 350px;
  background: url('../../assets/images/profile/aprizal.png');
  background-size: cover;
  background-position: center;
  cursor: pointer;
}
.profile-5 {
  position: relative;
  width: 300px;
  height: 350px;
  background: url('../../assets/images/profile/aprizal.png');
  background-size: cover;
  background-position: center;
  cursor: pointer;
}
.profile-6 {
  position: relative;
  width: 300px;
  height: 350px;
  background: url('../../assets/images/profile/aprizal.png');
  background-size: cover;
  background-position: center;
  cursor: pointer;
}
.overlay {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  cursor: pointer;
  opacity: 0;
  transition: all 1s;
}
.profile-1:hover .overlay {
  opacity: 1;
}
.profile-2:hover .overlay {
  opacity: 1;
}
.profile-3:hover .overlay {
  opacity: 1;
}
.profile-4:hover .overlay {
  opacity: 1;
}
.profile-5:hover .overlay {
  opacity: 1;
}
.profile-6:hover .overlay {
  opacity: 1;
}
.social-icons {
  display: flex;
  list-style: none;
  bottom: 10px;
  position: absolute;
  text-align: center;
  justify-content: center;
  left: 22px;
}
.social-icons li {
  width: 25px;
  height: 25px;
  border: 1px solid #eeeeee;
  padding: 20px;
  margin-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  transition: all 1s;
}
.social-icons li:hover {
  background: #ffffff;
  color: #000000;
}
.overlay .about {
  position: relative;
  justify-content: center;
  align-items: center;
  display: flex;
  top: 40%;
  color: #ffffff;
  flex: column;
}
</style>
