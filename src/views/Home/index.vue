<script setup lang="ts">
import HomeCategory from './components/HomeCategory.vue'
import HomeBanner from './components/HomeBanner.vue'
import HomeNew from './components/HomeNew.vue'
import HomeHot from './components/HomeHot.vue'
import homeProduct from './components/HomeProduct.vue'
import homePanel from './components/homePanel.vue'
</script>

<template>
  <div class="container">
    <HomeCategory />
    <HomeBanner /> 
  </div>
  <HomeNew />
  <HomeHot />
  <homeProduct />
</template>