<template>
  <div class="headerTop">
    <router-link to="/">
      <h1>Logo</h1>
    </router-link>
    <nav class="nav" id="nav">
      <router-link to="/">Inicio</router-link>
      <router-link to="/about">Acerca de</router-link>
      <router-link to="/contact">Contacto</router-link>
    </nav>
  </div>
  <router-view />
  <FooterCom />
</template>
<script>
// @ is an alias to /src
import FooterCom from './components/FooterCom.vue';

export default {
  name: 'App',
  components: {
    FooterCom,
  },
};
</script>
<style lang="scss">
.headerTop {
  background: rgb(255, 255, 255);
  background: linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(66, 185, 131, 1) 100%);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1em 0;
  position: fixed;
  width: 100%;
  z-index: 1;
  h1 {
    padding: 0 1em;
    margin: 0;
  }
}
.container {
  min-height: 100vh;
  padding-top: 5em;
}

.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  max-width: 80%;
  margin: 0 auto;
  height: 100%;
  min-height: 85vh;
  @media (max-width: 1215px) {
    max-width: 90%;
  }
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
  border: none;
  outline: none;
  box-sizing: border-box;
  color: #2c3e50;
}
html,
body {
  padding: 0;
  margin: 0;
  overflow-x: hidden;
}
nav {
  display: flex;
  width: fit-content;
  color: #fff;
  padding: 0 1em;
  a {
    font-weight: bold;
    text-decoration: none;
    padding: 0.5em 1em;
  }
}
nav a.router-link-exact-active {
  color: #2c3e50;
  border-bottom: 2px solid #2c3e50;
}
a {
  color: inherit;
  text-decoration: none;
}
p {
  font-size: 16px;
  font-weight: 500;
  padding: 0;
  margin: 0;
  margin-top: 0.5em;
  text-align: justify;
}
button {
  font-size: 16px;
  -webkit-appearance: none;
  background: #fff;
  font-weight: 600;
  text-align: center;
  flex-shrink: 0;
  flex-basis: auto;
  cursor: pointer;
  padding: 1em 2em;
  border-radius: 15px;
}
select,
input,
textarea {
  background: transparent;
  border: 1px solid #c6c6c6;
  box-sizing: border-box;
  border-radius: 5px;
  padding: 0.7em;
  width: 100%;
  font-size: 16px;
  resize: none;
  -webkit-appearance: textfield;
  -moz-appearance: textfield;
}
select:focus,
input:focus,
textarea:focus {
  outline: none !important;
  border: 1px solid #3f3630;
}
label {
  display: block;
  color: #000;
  position: relative;
  font-weight: 500;
  font-size: 16px;
  margin-top: 1.5em;
  margin-bottom: 0.5em;
}
strong {
  margin-right: 0.3em;
  font-weight: 600;
}
</style>
