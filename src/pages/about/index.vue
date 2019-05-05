<template>
	<section>
		<div class="container">
			<h2>About</h2>
			<div class="w-3/5">
				<h3>Skill</h3>
				<div class="shadow w-full bg-grey-light rounded-lg">
					<div
						class="bg-blue text-xs leading-none py-1 text-center text-white rounded-lg"
						style="width: 45%;"
					></div>
				</div>
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
.container {
	width: 100vw;
	max-width: 980px;
	min-height: 100vh;
	margin: auto;
	padding-top: 81px;
	@media screen and (max-width: 767px) {
		padding: 81px 20px 0;
	}
	.shadow div {
		height: 20px;
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
