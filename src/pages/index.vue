<template>
  <section>
    <div class="tp-main">
      <div>
        <h1>
          randy's
          <br>Portfolio
          <br>Site
        </h1>
        <transition name="fade">
          <p>I'm Web Developer, Markup and Frontend Engineer.</p>
        </transition>
      </div>
      <ul class="text-sm">
        <li class="shadow">
          <div class="effect"></div>
          <nuxt-link to="/about" class="text-black">About</nuxt-link>
        </li>
        <li class="shadow">
          <div class="effect"></div>
          <nuxt-link to="/contact" class="text-black">Contact</nuxt-link>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>

export default {
  data() {
    return {
      lazyView: false
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
section {
  background-size: cover;
  background-position: center center;
  .tp-main {
    width: 100vw;
    max-width: 980px;
    margin: auto;
    padding-top: 81px;
    div {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
    }
    ul {
      display: flex;
      align-items: center;
      // flex-wrap: wrap;
      min-height: 46.6vh;
      padding-left: 0;
      list-style: none;
      @media screen and (max-width: 767px) {
        min-height: 38.6vh;
        padding: 20px;
      }
      li {
        position: relative;
        width: 32vw;
				max-width: 364px;
        margin: auto;
        background-color: #fff;
        border: 1px solid #e5e5e5;
        overflow: hidden;
        text-align: center;
        @media screen and (max-width: 767px) {
          width: 40vw;
          max-width: 362px;
          margin: auto;
        }
        .effect {
          position: absolute;
          z-index: 1;
          top: 0px;
          left: -362px;
          width: 362px;
          height: 91px;
          background-color: rgba(34, 41, 47, 0.8);
          transition: all 0.5s ease;
        }
        &:hover .effect {
          left: 0;
        }
        &:hover a {
          color: #fff;
        }
      }
      a {
        position: relative;
        z-index: 2;
        display: block;
        padding: 32px 16px;
        text-align: center;
        text-decoration: none;
        transition: all 0.5s ease;
				font-size: 1.6rem;
        @media screen and (max-width: 767px) {
          padding: 16px;
        }
      }
    }
  }
  .fade-enter {
    opacity: 0;
  }
  .fade-leave-active {
    opacity: 0;
  }
  h1 {
    margin-top: 30px;
    padding: 16px 24px;
    border-left: 1px solid #22282f;
    font-size: 4rem;
    @media screen and (max-width: 767px) {
      margin: 0 0 20px 20px;
      padding-top: 0;
      font-size: 3rem;
    }
  }
  p {
    width: calc(100% / 2 - 20px);
    margin: auto auto 48px;
    padding-bottom: 20px;
    border-bottom: 1px solid #22282f;
		font-size: 3rem;
    @media screen and (max-width: 767px) {
      width: 100%;
      max-width: 89%;
      margin: auto;
			font-size: 2rem;
    }
  }
}
</style>
