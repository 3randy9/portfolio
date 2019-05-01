<template>
	<header>
		<nav class="flex items-center justify-end flex-wrap p-4">
			<!-- <div class="flex items-center flex-no-shrink mr-6">
        <nuxt-link class="font-semibold text-xl tracking-tight logo" to="/">randy39</nuxt-link>
      </div>-->
			<div class="block">
				<button
					class="st-menu px-3 py-2"
					@click="drawer = !drawer"
					@keypress="drawer = !drawer"
					tabindex="0"
					:aria-expanded="drawer"
				>
					<svg
						class="menu"
						ontouchstart
						width="30px"
						height="30px"
						viewBox="0 0 500 500"
					>
						<path
							class="border1 border"
							d="M44.6,151.6h409.9c18.9,0,34.2-15.2,34.2-34.1c0-18.8-15.3-34-34.2-34H44.6c-18.8,0-34.1,15.2-34.1,34 C10.4,136.4,25.7,151.6,44.6,151.6z"
						></path>
						<path
							class="border2 border"
							d="M454.5,219.9H44.5c-18.8,0-34.1,15.3-34.1,34.1c0,18.9,15.3,34.2,34.1,34.2h409.9c18.9,0,34.2-15.3,34.2-34.2 C488.7,235.2,473.3,219.9,454.5,219.9z"
						></path>
						<path
							class="border3 border"
							d="M454.5,356.7H44.5c-18.8,0-34.1,15.2-34.1,34.1c0,18.8,15.3,34.1,34.1,34.1h409.9c18.9,0,34.2-15.3,34.2-34.1 S473.3,356.7,454.5,356.7z"
						></path>
					</svg>
				</button>
			</div>
			<transition name="modal">
				<div
					class="hd-modal w-full lg:visible block flex-grow lg:flex lg:items-center lg:w-auto"
					v-show="drawer"
				>
					<ul class="text-sm lg:flex-grow modal-container">
						<li @click="drawer = !drawer" @keypress="drawer = !drawer">
							<nuxt-link
								to="/"
								class="block mt-4 lg:mt-0 hover:text-grey-dark mr-4"
							>
								Home
							</nuxt-link>
						</li>
						<li @click="drawer = !drawer" @keypress="drawer = !drawer">
							<nuxt-link
								to="/about"
								class="block mt-4 lg:mt-0 hover:text-grey-dark mr-4"
							>
								About
							</nuxt-link>
						</li>
						<li @click="drawer = !drawer" @keypress="drawer = !drawer">
							<nuxt-link
								to="/contact"
								class="block mt-4 lg:mt-0 hover:text-grey-dark"
							>
								Contact
							</nuxt-link>
						</li>
					</ul>
				</div>
			</transition>
		</nav>
	</header>
</template>

<script>
export default {
	data: () => ({
		drawer: false
	})
}
</script>

<style lang="scss" scoped>
header {
	position: fixed;
	top: 0;
	width: 100vw;
	max-width: 1300px;
	margin: auto;
	z-index: 10;
	.logo {
		// color: #fff;
		letter-spacing: 1px;
		text-decoration: none;
	}
	.st-menu {
		.border {
			fill: rgb(26, 26, 26);
			transition: 0.3s all ease;
			transform-origin: 250px 250px;
		}
		&[aria-expanded='true'] {
			position: relative;
			z-index: 9999;
			.border {
				fill: rgb(26, 26, 26);
			}
			.border1 {
				transform: translate(-102px, 102px) rotate(45deg);
			}
			.border2 {
				opacity: 0;
			}
			.border3 {
				transform: translate(-102px, -102px) rotate(-45deg);
			}
		}
	}
	nav {
		text-align: right;
	}
	ul {
		padding: 0;
		list-style: none;
		li {
			display: inline-block;
		}
	}

	.hd-modal {
		position: fixed;
		z-index: 9998;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(255, 255, 255, 0.95);
		transition: opacity 0.3s ease;
	}
	.modal-container {
		transition: all 0.3s ease;
	}
	.modal-enter {
		opacity: 0;
	}
	.modal-leave-active {
		opacity: 0;
	}
	.modal-enter .modal-container,
	.modal-leave-active .modal-container {
		transform: scale(1);
		transform: translate(-50%, 50%);
	}
	ul {
		position: absolute;
		top: 50%;
		left: 50%;
		width: 50vw;
		max-width: 400px;
		margin: auto;
		transform: translate(-50%, -50%);
		li {
			position: relative;
			display: block;
			margin: 0 auto;
			border-bottom: 1px solid #8795a1;
			text-align: center;
			a {
				margin: 0;
				padding: 20px 0;
				color: #1a1a1a;
				font-size: 1.4rem;
				text-decoration: none;
			}
		}
	}
}
</style>
