<template>
  <div class="textBubbleCom">
    <div class="textBubbleCom__img">
      <button class="textBubbleCom__img_gallery" @click="isOpenGallery = !isOpenGallery">
        <p class="textBubbleCom__name">{{ name }}</p>
        <img :src="`${thumbnail}`" alt="Banner" />
      </button>
      <button class="textBubbleCom__img_details" @click="isOpenPricing = !isOpenPricing">
        Precios
      </button>
      <button class="textBubbleCom__img_details" @click="isOpenDetails = !isOpenDetails">
        Detalles
      </button>
    </div>
    <div v-html="descriptions" class="textBubbleCom__description">
    </div>
  </div>
  <div class="modalCom" v-if="isOpenGallery">
    <button class="modalCom__x" @click="isOpenGallery = !isOpenGallery">x</button>
    <div class="modalCom__body">
      <CarouselCom v-bind:banners="banners" />
    </div>
  </div>
  <div class="modalCom" v-if="isOpenDetails">
    <button class="modalCom__x" @click="isOpenDetails = !isOpenDetails">x</button>
    <div class="modalCom__bodyD">
      <div v-html="restrictions" />
    </div>
  </div>
  <div class="modalCom" v-if="isOpenPricing">
    <button class="modalCom__x" @click="isOpenPricing = !isOpenPricing">x</button>
    <div class="modalCom__bodyD">
      <div class="modalCom__bodyD_table">
        <h1>Precios</h1>
        <div class="modalCom__bodyD_tTitle">
          <h3>Adulto</h3>
          <h3>Adulto +</h3>
        </div>
        <div>
          <p>$ {{ pricing.adult_average }}</p>
          <p>$ {{ pricing.adult_base }}</p>
        </div>
        <div class="modalCom__bodyD_tTitle">
          <h3>Niñ@</h3>
          <h3>Niñ@ +</h3>
        </div>
        <div>
          <p>$ {{ pricing.child_average }}</p>
          <p>$ {{ pricing.child_base }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.textBubbleCom {
  display: flex;
  // flex-direction: row-reverse;
  align-content: center;
  justify-content: space-between;
  width: 100%;
  margin: 1em 0 0;
  @media (max-width: 1050px) {
    flex-direction: column;
  }
  &__img {
    width: 50%;
    height: fit-content;
    @media (max-width: 1050px) {
      width: 100%;
  }
    img {
      width: 100%;
      border-radius: 10px;
    }
    button{
      padding: 0.5em;
      // border: none;
      // position: relative;
    }
    &_details{
      margin-right:0.5em ;
    }
    &_gallery{
      padding: 0;
      border: none;
      position: relative;
    }
  }
  &__name ,
  &__description{
    box-shadow: 2px 2px 2px 0 rgba(0, 0, 0, 0.5);
    border: 1px solid #2c3e50;
    padding: 0.5em;
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.8);
  }

  &__description{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 45%;
    // height: fit-content;
    border-top: none;
    border-left: none;
    @media (max-width: 1050px) {
      width: 100%;
  }
    p{
      padding: 0;
      margin: 0;
      margin-top: 0.5em;
      text-align:justify ;
    }
  }
  &__name {
    width: fit-content;
    height: fit-content;
    position: absolute;
    bottom: 0;
    right: 0;
    p {
      text-align: justify;
    }
  }
}
.modalCom {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
  background: rgba(0, 0, 0, 0.7);
  position: fixed;
  z-index: 98;
  top: 0;
  left: 0;
  &__x{
    position: absolute;
    right: 1em;
    top: 1em;
    font-size: 2.5em;
    background: none;
    padding: 0;
    border: none;
    color: #fff;
  }
  &__bodyD,
  &__body {
    width: fit-content;
    background: #fff;
  }

  &__bodyD {
    padding: 1em;
    border-radius: 10px;
    max-width: 90%;
    overflow-y: scroll;
    max-height: 70vh;
    &_table{
      display: flex;
      flex-direction: column;
      align-items: center;
      div{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 300px;
      }
      h3,
      p{
        width: 50%;
        text-align: center;
      }
      h3{
        margin: 0.5em 0;
      }
    }
    &_tTitle{
      background: rgb(255, 255, 255);
      background: linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(66, 185, 131, 1) 100%);
    }
  }
}
</style>

<script>
import CarouselCom from './CarouselCom.vue';

export default {
  name: 'TextBubbleCom',
  components: {
    CarouselCom,
  },
  props: {
    name: String,
    thumbnail: String,
    banners: Array,
    descriptions: Array,
    restrictionAge: String,
    restrictions: String,
    pricing: Object,
  },
  data() {
    return {
      isOpenGallery: false,
      isOpenDetails: false,
      isOpenPricing: false,
    };
  },
};
</script>
