<template>
  <div class="newsletterCom">
    <div class="newsletterCom__newsletter">
      <div class="newsletterCom__text">
        <p class="newsletterCom__text_title">¡Suscribete!</p>
        <p class="newsletterCom__text_subtitle">No te pierdas de nuestras promociones</p>
      </div>
      <div class="newsletterCom__input">
        <label for="newsletter">
          <input
            id="newsletter"
            name="newsletter"
            class="newsletterCom__input_input"
            type="text"
            placeholder="Correo electronico"
          />
        </label>
        <button class="newsletterCom__input_btn">Suscribirme</button>
      </div>
    </div>
  </div>
</template>

<style  lang="scss">
.newsletterCom {
  width: 100%;
  background: #fff;
  &__newsletter {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    margin: 0 auto;
    padding: 2em 0;
    @media (max-width: 900px) {
      width: 90%;
    }
    @media (max-width: 800px) {
      flex-direction: column;
    }
  }
  &__input,
  &__text {
    display: flex;
    justify-content: center;
    width: 46%;
    @media (max-width: 800px) {
      width: 100%;
    }
  }
  &__input {
    &_input {
      border-radius: 5px;
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
      border: 2px solid #e6e6e6;
      padding-left: 2em;

      // margin-left: 2em;
    }
    &_btn {
      border-radius: 10px;
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
      font-weight: 400;
      background: #252525;
    }
  }
  &__text {
    flex-direction: column;
    @media (max-width: 800px) {
      margin-bottom: 2em;
    }
    &_title {
      text-transform: uppercase;
      font-size: 2.5em;
      font-weight: bold;

      // margin-bottom: 0.3em;
    }
    p {
      color: #0057b8;
      @media (max-width: 800px) {
        text-align: center;
      }
    }
  }
  img {
    width: 100%;
    min-height: 3em;
  }
}
</style>

<script>
export default {
  name: 'NewsletterCom',
};
</script>
