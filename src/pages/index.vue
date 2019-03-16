<template>
  <section>
    <div>
      <h1>This home</h1>
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
  background-image: url('~assets/images/main_visual.jpg');
  background-size: cover;
  background-position: center center;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.2);
    a {
      color: #fff;
      width: calc(50% / 3 - 20px);
    }
  }
}
</style>
