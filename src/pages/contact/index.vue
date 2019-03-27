<template>
  <section>
    <div class="container">
      <h1>This contact</h1>
      <form name="contact" method="POST" data-netlify="true">
        <p>
          <label>Your Name:
            <input type="text" name="name">
          </label>
        </p>
        <p>
          <label>Your Email:
            <input type="email" name="email">
          </label>
        </p>
        <p>
          <label>Message:
            <textarea name="message"></textarea>
          </label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
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
.container {
  margin: 0 auto;
  min-height: 100vh;
}
</style>
