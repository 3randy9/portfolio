<template>
  <section>
    <div class="container">
      <h1>Contact</h1>
      <form name="contact" method="post" data-netlify="true" action="thank-you">
				<input type="hidden" name="form-name" value="contact">
        <label for="name">Your Name:</label>
        <input type="text" name="name" id="name">
        <label for="email">Your Email:</label>
        <input type="email" name="email" id="email">
        <label for="message">Message:</label>
        <textarea name="message" id="message"></textarea>
        <button type="submit">Send</button>
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
