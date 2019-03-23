<template>
  <section>
    <div class="tp-main">
      <div>
        <h1 class="shadow-md">Ryo Ofusa's
          <br>Portfolio
          <br>Site
        </h1>
        <p>I'm Web Developer, Markup and Frontend.</p>
      </div>
    </div>
  </section>
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
  }
  h1 {
    margin-top: 30px;
    padding: 16px 24px;
    // color: #fff;
    // background-color: #22282f;
    font-size: 3rem;
  }
}
</style>
