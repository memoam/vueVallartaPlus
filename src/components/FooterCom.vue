<template>
  <footer class="footer">
    <router-link to="/">
      <h1>footerLogo</h1>
    </router-link>
  </footer>
</template>

<script>
export default {
  name: 'FooterCom',
  props: {
    msg: String,
  },
};
</script>

<style lang="scss">
.footer {
  background: rgb(255, 255, 255);
  background: linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(66, 185, 131, 1) 100%);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1em;
}
</style>
