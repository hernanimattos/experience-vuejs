module.exports = {
	chainWebpack: (config) => {
		config.module
			.rule('import-glob-rule')
			.test(/\^.js$/)
			.use('babel-loader')
			.loader('import-glob-loader')
			.end();
	},
};
