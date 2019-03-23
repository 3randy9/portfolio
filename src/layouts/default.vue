<template>
	<div>
		<the-header/>
		<main>
			<nuxt/>
		</main>
		<the-footer/>
	</div>
</template>

<script>
import TheHeader from '~/components/TheHeader.vue'
import TheFooter from '~/components/TheFooter.vue'

export default {
  components: {
    TheHeader,
    TheFooter
  }
}
</script>

<style lang="scss" scoped>
html {
	font-size: 62.5%;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  *,
  *:before,
  *:after {
    box-sizing: border-box;
    margin: 0;
  }
  img {
    vertical-align: bottom;
  }
}
div {
  position: relative;
  color: #1a1a1a;
  font-size: 1.6rem;
  font-weight: 400;
  letter-spacing: 0.4px;
  line-height: 1.65;
  font-family: 'Noto Sans JP', 'Noto Sans', sans-serif;
}
// ruoter transition
.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s;
}
.page-enter,
.page-leave-active {
  opacity: 0;
}
</style>
