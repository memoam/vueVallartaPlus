<template>
  <Splide :options="options" aria-label="My Favorite Images" id="splide">
    <SplideSlide
      v-for="banner in banners"
      v-bind:key="banner.id"
      class="page"
    >

      <img :src="`${banner}`" alt="Banner" />
    </SplideSlide>
  </Splide>
</template>
<style lang="scss">
.page {
  position: relative;
  width: 100%;
  img{
    width: 100%;
  }
}
</style>

<script>
// eslint-disable-next-line import/no-extraneous-dependencies, import/extensions
import '@splidejs/vue-splide/css';
// eslint-disable-next-line import/no-extraneous-dependencies, import/extensions
import '@splidejs/vue-splide/css/core';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CarouselCom',
  props: {
    banners: Array,
  },
  components: {
    Splide,
    SplideSlide,
  },
  data() {
    const options = {
      rewind: true,
      gap: '1em',
      arrows: true,
      drag: true,
      autoplay: true,
      interval: 5000,
      pagination: true,
    };

    return { options };
  },
});
</script>
