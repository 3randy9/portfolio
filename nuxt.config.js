const pkg = require('./package')
const baseDir = process.env.BASE_DIR || '/'

module.exports = {
	mode: 'spa',
	srcDir: 'src/',
	router: {
		base: baseDir
	},
	generate: {
		fallback: true
	},
	/*
  ** Headers of the page
  */
	head: {
		htmlAttrs: {
			lang: 'ja'
		},
		title: 'randy39 Portfolio',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: 'randy39 Portfolio' }
		],
		link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
		link: [{ href: 'https://fonts.googleapis.com/css?family=Noto+Sans+JP|Noto+Sans:400,700', rel: 'stylesheet' }]
	},

	/*
  ** Customize the progress-bar color
  */
	loading: { color: '#000' },

	/*
  ** Global CSS
  */
	css: ['~/assets/css/tailwind.css', 'modern-normalize'],

	/*
  ** Plugins to load before mounting the App
  */
	plugins: [],

	/*
  ** Nuxt.js modules
  */
	modules: [
		// Doc: https://axios.nuxtjs.org/usage
		'@nuxtjs/axios',
		'@nuxtjs/pwa'
	],
	/*
  ** Axios module configuration
  */
	axios: {
		// See https://github.com/nuxt-community/axios-module#options
	},

	/*
  ** Build configuration
  */
	build: {
		filenames: {
			app: () => '[name].js',
			chunk: () => '[name].js',
			css: () => '[name].js',
			img: () => '[path][name].[ext]',
			font: () => '[path][name].[ext]',
			video: () => '[path][name].[ext]'
		},
		// hardSource: true,
		/*
    ** You can extend webpack config here
    */
		extend(config, ctx) {}
	},
	/*
  ** PWA settings
  */
	manifest: {
		// manifestの設定
		lang: 'ja',
		name: 'randy39 Portfolio',
		short_name: 'randy39',
		description: 'randy39 Portfolio',
		background_color: '#000000',
		orientation: 'portrait'
	}
}
