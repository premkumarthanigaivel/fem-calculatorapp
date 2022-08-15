module.exports = {
	env: {
		browser: true,
		es2021: true
	},
	extends: [
		'plugin:react/recommended',
		'standard',
		'plugin:@next/next/recommended'
	],
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		},
		ecmaVersion: 'latest',
		sourceType: 'module'
	},
	plugins: ['react'],
	rules: {
		indent: 'off',
		'react/prop-types': 'off',
		'react/react-in-jsx-scope': 'off',
		'no-tabs': 'off',
		'space-before-function-paren': 'off',
		'@next/next/no-img-element': 'off'
	}
}
