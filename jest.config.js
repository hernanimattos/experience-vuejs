module.exports = {
	preset: '@vue/cli-plugin-unit-jest',
	testMatch: ['**/src/**/*.spec.js'],
	transform: {
		'^.+\\.vue$': 'vue-jest',
		'.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$':
			'jest-transform-stub',
		'^.+\\.jsx?$': 'babel-jest',
	},
	transformIgnorePatterns: ['/node_modules/'],
	moduleNameMapper: {
		'^@/(.*)$': '<rootDir>/src/$1',
	},
	setupFiles: ['<rootDir>/config/setup'],
	watchPlugins: [
		'jest-watch-typeahead/filename',
		'jest-watch-typeahead/testname',
	],
};
