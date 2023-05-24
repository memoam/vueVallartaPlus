<template>
  <div class="textBubbleCom">
    <div class="textBubbleCom__text">
      <p
      v-for="description in descriptions"
      v-bind:key="description"
    >
       {{ description }}
    </p>
    </div>
    <div class="textBubbleCom__img">
      <img :src="`${thumbnail}`" alt="Banner" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.textBubbleCom {
display: flex;
align-content: center;
justify-content: center;
width: 100%;
&__img{
 width: 70%;
 padding-left: 1em;
 height: fit-content;
 img{
  width: 100%;
  border-radius: 10px;
 }
}
&__text{
  width: 30%;
  height: fit-content;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.5);
  border: 1px solid #2c3e50;
  padding: 1em;
  border-radius: 10px;
  p{
    text-align: justify;
  }

}

}
</style>

<script>
export default {
  name: 'TextBubbleCom',
  props: {
    descriptions: Array,
    thumbnail: String,
  },
};
</script>
