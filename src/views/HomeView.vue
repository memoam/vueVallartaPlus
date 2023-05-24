<template>
  <div class="container">
    <div class="main">
      <div
      v-for="tour in tours"
      v-bind:key="tour.id"
      >
      <h2>{{ tour.name }}</h2>
      <TextBubbleCom v-bind:descriptions="tour.description" v-bind:thumbnail="tour.thumbnail" />
      <!-- <CarouselCom v-bind:banners="tours.images" /> -->
    </div>
      <!-- <NewsletterCom /> -->
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import aux from '@/assets/aux';
// import NewsletterCom from '@/components/NewsletterCom.vue';
import TextBubbleCom from '@/components/TextBubbleCom.vue';
// import CarouselCom from '@/components/CarouselCom.vue';

export default {
  name: 'HomeView',
  components: {
    TextBubbleCom,
    // CarouselCom,
  },
  data() {
    return {
      tours: aux,
    };
  },

};
</script>
