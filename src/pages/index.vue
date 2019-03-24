<template>
  <section>
    <div class="tp-main">
      <div>
        <h1>Ryo Ofusa's
          <br>Portfolio
          <br>Site
        </h1>
        <transition name="fade">
          <p class="js-lazyText">I'm Web Developer, Markup and Frontend Engineer.</p>
        </transition>
      </div>
      <ul class="text-sm">
        <li>
          <nuxt-link to="/about" class="shadow text-black">About</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/contact" class="shadow text-black">Contact</nuxt-link>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
window.addEventListener('load', () => {
	const target = document.querySelector('.js-lazyText');
	target.style.opacity = 0;
  setTimeout(() => {
		target.classList.add('active');
		target.style.opacity = 1;
  }, 1500)
})

export default {
  data() {
    return {
      lazyView: false
    }
  },
  methods: {
    // lazyViewHandler: () => {
    //   window.addEventListener('load', () => {
    //     setTimeout(() => {
    //       // lazyView.classList.add('fade-leave');
    //       this.lazyView = true
    //       console.log('tests')
    //     }, 1500)
    //   })
    // }
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
  // background-image: url('~assets/images/main_visual-min.jpg');
  background-size: cover;
  background-position: center center;
  .tp-main {
    width: 100vw;
    max-width: 980px;
    min-height: 100vh;
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
      // justify-content: flex-start;
      flex-wrap: wrap;
      min-height: 52vh;
      padding-left: 0;
      list-style: none;
      li {
        width: calc(100% / 2 - 126px);
        margin: auto 0;
        border: 1px solid #e5e5e5;
        &:last-of-type {
          margin-left: 50px;
        }
      }
      a {
        display: block;
        padding: 32px 16px;
        background-color: #ffffff;
        text-align: center;
        text-decoration: none;
        &:hover,
        &:focus {
          color: #fff;
          background-color: rgba(10, 10, 10, 0.8);
          transition: 0.3s;
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
    font-size: 3rem;
  }
  p {
    width: calc(100% / 2 - 20px);
    margin: auto;
    padding-bottom: 20px;
    border-bottom: 1px solid #22282f;
  }
  .js-lazyText.active {
  	opacity: 1;
		transition: all 0.9s ease;
		transform: translateY(50%);
  }
}
</style>
