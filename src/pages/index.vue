<template lang="pug">
	section.container
		nuxt-link(to="/") home
		nuxt-link(to="/about/") about
		nuxt-link(to="/contact/") contact
		p This home
</template>

<script>
export default {
  components: {}
}
</script>

<style lang="scss" scoped>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  a {
    width: calc(50% / 3 - 20px);
  }
}
</style>
