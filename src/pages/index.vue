<template>
  <section>
    <div class="tp-main">
      <div>
        <h1>
          Ryo Ofusa's
          <br>Portfolio
          <br>Site
        </h1>
        <transition name="fade">
          <p class="js-lazyText">I'm Web Developer, Markup and Frontend Engineer.</p>
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
window.addEventListener('load', () => {
  const target = document.querySelector('.js-lazyText')
  target.style.opacity = 0
  setTimeout(() => {
    target.classList.add('active')
    target.style.opacity = 1
  }, 1500)
})

// target.style.opacity = 1

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
      flex-wrap: wrap;
      min-height: 52vh;
      padding-left: 0;
      list-style: none;
			@media screen and (max-width: 767px) {
				min-height: 40vh;
				padding: 20px;
			}
      li {
        position: relative;
        width: calc(100% / 2 - 126px);
        margin: auto 0;
        // padding: 32px 16px;
				background-color: #fff;
        border: 1px solid #e5e5e5;
        overflow: hidden;
        text-align: center;
        @media screen and (max-width: 767px) {
					width: 100%;
          max-width: 362px;
					margin: auto;
        }
        &:last-of-type {
					margin-left: 50px;
					@media screen and (max-width: 767px) {
						margin-left: auto;
					}
        }
        .effect {
          position: absolute;
          z-index: 1;
          top: 0px;
          left: -362px;
          width: 362px;
          height: 87px;
          background-color: rgba(10, 10, 10, 0.8);
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
        // background-color: #ffffff;
        text-align: center;
        text-decoration: none;
        transition: all 0.5s ease;
				@media screen and (max-width: 767px) {
					padding: 24px;
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
		@media screen and (max-width: 767px) {
			margin: 0 0 20px 20px;
			padding-top: 0;
			font-size: 2rem;
		}
  }
  p {
    width: calc(100% / 2 - 20px);
    margin: auto auto 48px;
    padding-bottom: 20px;
    border-bottom: 1px solid #22282f;
		@media screen and (max-width: 767px) {
			width: 100%;
			max-width: 89%;
			margin: auto;
		}
  }
  .js-lazyText.active {
    margin: auto;
    opacity: 1;
    transition: all 0.9s ease;
    transform: translateY(50%);
		@media screen and (max-width: 767px) {
			transform: translateY(0);
		}
  }
}
</style>
