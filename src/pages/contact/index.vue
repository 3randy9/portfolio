<template>
  <section>
    <div class="container">
      <h1>Contact</h1>
      <the-form/>
    </div>
  </section>
</template>

<script>
import TheForm from '~/components/TheForm'

export default {
  components: {
    TheForm
  }
}
</script>

<style lang="scss" scoped>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
section {
  .container {
		width: 100vw;
    max-width: 980px;
    min-height: 100vh;
    margin: auto;
    padding-top: 81px;
		@media screen and (max-width: 767px){
			padding: 81px 20px 0;
		}
  }
  h1 {
    margin-bottom: 20px;
    padding-bottom: 16px;
    border-bottom: 1px solid #22282f;
  }
}
</style>
