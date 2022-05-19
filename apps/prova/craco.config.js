module.exports = {
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      const { include } = webpackConfig.module.rules[1].oneOf[3];

      const nInclude = [include, /\.(.ts|tsx)/];

      webpackConfig.module.rules[1].oneOf[3].include = nInclude;

      return {
        ...webpackConfig,
      };
    },
  },
};
