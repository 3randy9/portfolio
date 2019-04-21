module.exports = {
	root: true,
	env: {
		browser: true,
		node: true
	},
	parserOptions: {
		parser: 'babel-eslint'
	},
	extends: [
		'eslint:recommended',
		// https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
		// より厳しいルールにするには`plugin:vue/strongly-recommended` もしくは `plugin:vue/recommended` に切り替えることを検討してください。
		// 'plugin:vue/recommended',
		// 'plugin:prettier/recommended',
		'plugin:vue-a11y/base',
		'plugin:vue-a11y/recommended'
	],
	// *.vue ファイルを lint にかけるために必要
	plugins: ['vue', 'vue-a11y'],
	// ここにカスタムルールを追加します。
	rules: {
		semi: [2, 'never'],
		'no-console': 'off',
		'vue/max-attributes-per-line': 'off',
		// 'prettier/prettier': ['error', { semi: false }],
		'vue-a11y/label-has-for': 0,
		'vue-a11y/form-has-label': 0
	}
}
