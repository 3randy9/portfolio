<template>
  <section>
    <h1 class="visually-hidden">thanks page</h1>
    <p>Thank you for Contact!<br>ご返信まで今しばらくお待ち下さい</p>
  </section>
</template>

<style lang="scss" scoped>
section {
  min-height: calc(100vh - 100px);
  display: flex;
  align-items: center;
  justify-content: center;
	flex-wrap: wrap;
	text-align: center;
  .visually-hidden {
    position: absolute !important;
    clip: rect(1px 1px 1px 1px); /* IE6, IE7 */
    clip: rect(1px, 1px, 1px, 1px);
    padding: 0 !important;
    border: 0 !important;
    height: 1px !important;
    width: 1px !important;
    overflow: hidden;
  }
}
</style>
