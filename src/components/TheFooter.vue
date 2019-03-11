<template>
  <footer class="bg-black text-white text-sm p-6">
    <small>&copy;{{this.today}} randy39 All Rights Reserved.</small>
  </footer>
</template>

<script>
export default {
  data: () => ({
    today: new Date().getFullYear()
  })
}
</script>
<style lang="scss" scoped>
footer {
}
</style>
