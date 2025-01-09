<script setup>
import DefaultLayout from '@/components/layouts/DefaultLayout.vue'
</script>

<template>
  <main>
    <div>
      <DefaultLayout></DefaultLayout>
      <div class="whatsapp-container">
        <div class="rounded-pill shadow">
          <a
            class="d-flex align-items-center"
            href="https://wa.me/6281917965302"
            target="_blank"
            rel="noopener noreferrer"
            style="text-decoration: none; color: inherit"
          >
            <i
              class="bi bi-whatsapp"
              style="font-size: 1.5rem; transition: transform 0.3s ease"
            ></i>
          </a>
        </div>
      </div>
    </div>
  </main>
</template>
<style scoped>
.whatsapp-container {
  background-color: #00000075;
  color: #ffffff;
  right: 1.5rem;
  bottom: 1.5rem;
  position: fixed;
  padding-inline: 16px;
  padding-block: 10px;
  transition: all 0.3s ease;
  cursor: pointer;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.whatsapp-container:hover {
  transform: scale(1.2);
  background-color: #25d365;
  color: white;
}

.whatsapp-container:hover i {
  transform: scale(1.2);
  transition: transform 0.2s ease-in-out;
  color: white;
}
</style>
