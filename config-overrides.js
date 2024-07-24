module.exports = function override(config, env) {
  if (env === "development") {
    config.devtool = false;
  }

  config.resolve.fallback = {
    ...config.resolve.fallback,
    buffer: false,
  };

  return config;
};
