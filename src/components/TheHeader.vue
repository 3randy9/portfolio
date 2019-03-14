<template>
  <header>
    <nav class="flex items-center justify-between flex-wrap bg-black p-6">
      <div class="flex items-center flex-no-shrink text-white mr-6">
        <nuxt-link class="font-semibold text-xl tracking-tight logo" to="/">randy39</nuxt-link>
      </div>
      <div class="block">
        <button
          class="flex items-center px-3 py-2 border rounded text-grey-dark border-grey-dark hover:text-white hover:border-white"
          @click="drawer = !drawer" tabindex="0"
        >
          <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>
        </button>
      </div>
      <transition name="modal">
        <div
          class="hd-modal w-full lg:visible block flex-grow lg:flex lg:items-center lg:w-auto"
          v-show="drawer"
        >
          <ul class="text-sm lg:flex-grow modal-container">
            <li @click="drawer = !drawer">
              <nuxt-link
                to="/"
                class="block mt-4 lg:inline-block lg:mt-0 text-grey-dark hover:text-white mr-4"
              >Home</nuxt-link>
            </li>
            <li @click="drawer = !drawer">
              <nuxt-link
                to="/about"
                class="block mt-4 lg:inline-block lg:mt-0 text-grey-dark hover:text-white mr-4"
              >About</nuxt-link>
            </li>
            <li @click="drawer = !drawer">
              <nuxt-link
                to="/contact"
                class="block mt-4 lg:inline-block lg:mt-0 text-grey-dark hover:text-white"
              >Contact</nuxt-link>
            </li>
          </ul>
          <button class="hd-closeModal p-6" @click="drawer = !drawer">
            <svg class="svg-icon" viewBox="0 0 20 20">
              <path
                d="M10.185,1.417c-4.741,0-8.583,3.842-8.583,8.583c0,4.74,3.842,8.582,8.583,8.582S18.768,14.74,18.768,10C18.768,5.259,14.926,1.417,10.185,1.417 M10.185,17.68c-4.235,0-7.679-3.445-7.679-7.68c0-4.235,3.444-7.679,7.679-7.679S17.864,5.765,17.864,10C17.864,14.234,14.42,17.68,10.185,17.68 M10.824,10l2.842-2.844c0.178-0.176,0.178-0.46,0-0.637c-0.177-0.178-0.461-0.178-0.637,0l-2.844,2.841L7.341,6.52c-0.176-0.178-0.46-0.178-0.637,0c-0.178,0.176-0.178,0.461,0,0.637L9.546,10l-2.841,2.844c-0.178,0.176-0.178,0.461,0,0.637c0.178,0.178,0.459,0.178,0.637,0l2.844-2.841l2.844,2.841c0.178,0.178,0.459,0.178,0.637,0c0.178-0.176,0.178-0.461,0-0.637L10.824,10z"
              ></path>
            </svg>
          </button>
        </div>
      </transition>
    </nav>
  </header>
</template>

<script>
export default {
  data: () => ({
    drawer: false
  })
}
</script>

<style lang="scss" scoped>
header {
  position: absolute;
  top: 0;
  width: 100vw;
  .logo {
    color: #fff;
    letter-spacing: 1px;
    text-decoration: none;
  }
  nav {
    text-align: right;
  }
  ul {
    padding: 0;
    list-style: none;
    li {
      display: inline-block;
    }
  }

    .hd-modal {
      position: fixed;
      z-index: 9998;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.8);
      transition: opacity 0.3s ease;
    }
    .hd-closeModal {
      position: absolute;
      top: 0px;
      right: 0px;
      svg {
        width: 38px;
        height: 38px;
        fill: #fff;
      }
    }
    .modal-container {
      transition: all 0.3s ease;
    }
    .modal-enter {
      opacity: 0;
    }
    .modal-leave-active {
      opacity: 0;
    }
    .modal-enter .modal-container,
    .modal-leave-active .modal-container {
      transform: scale(1);
			transform:translate(-50%,50%);
    }
    ul {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 50vw;
      margin: auto;
      transform: translate(-50%, -50%);
      li {
        display: block;
        margin: 0 auto;
        border-bottom: 1px solid #dae1e7;
        text-align: center;
        a {
          margin: 0;
          padding: 20px 0;
          color: #fff;
          text-decoration: none;
        }
      }
    }

}
</style>
