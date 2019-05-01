<template>
	<section>
		<div class="container">
			<h2>Contact</h2>
			<the-form />
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
		min-height: 89.9vh;
		margin: auto;
		padding-top: 81px;
		@media screen and (max-width: 767px) {
			padding: 81px 20px 0;
		}
	}
	h2 {
		margin-bottom: 20px;
		padding-bottom: 16px;
		border-bottom: 1px solid #22282f;
		font-size: 4rem;
		@media screen and (max-width: 767px) {
			font-size: 3rem;
		}
	}
}
</style>
