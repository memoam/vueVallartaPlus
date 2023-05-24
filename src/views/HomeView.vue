<template>
  <div class="container">
    <div class="main">
      <div class="tours" v-if="tours.length > 0">
        <div v-for="tour in tours" v-bind:key="tour.id" class="tours__details">
          <TextBubbleCom
            class="tours__summary"
            v-bind:name="tour.name"
            v-bind:thumbnail="tour.thumbnail"
            v-bind:banners="tour.images"
            v-bind:descriptions="tour.description"
            v-bind:restrictionAge="tour.restriction_age"
            v-bind:restrictions="tour.restrictions"
            v-bind:pricing="tour.pricing"
          />
        </div>
      </div>
      <div v-else class="tours">
        <h1>Cargando...</h1>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.tours {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
  &__details {
    width: 100%;
    margin-bottom: 1em;
  }
}
</style>
<script>
// @ is an alias to /src
import TextBubbleCom from '@/components/TextBubbleCom.vue';
import getEventService from '@/services/eventServices';

export default {
  name: 'HomeView',
  components: {
    TextBubbleCom,
  },
  data() {
    return {
      tours: [],
    };
  },
  methods: {
    returnEventService() {
      getEventService()
        .then((response) => {
          if (response.status === 200) {
            return response;
          }
          throw new Error(response);
        })
        .then((response) => response.json())
        .then((result) => {
          this.tours = result;
        })
        .catch((error) => error);
    },
  },
  mounted() {
    this.returnEventService();
  },
};
</script>
