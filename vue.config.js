module.exports = {
	devServer: {
		proxy: 'http://grupozap-code-challenge.s3-website-us-east-1.amazonaws.com',
	},
	chainWebpack: (config) => {
		config.module
			.rule('import-glob-rule')
			.test(/\^.js$/)
			.use('babel-loader')
			.loader('import-glob-loader')
			.end();
	},
};
