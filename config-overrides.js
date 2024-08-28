module.exports = function override(config, env) {
  if (env === "development") {
    config.devtool = false;
  }

  config.resolve.fallback = {
    ...config.resolve.fallback,
    buffer: false,
  };

  // 소스 맵 관련 경고 필터링 추가
  if (!config.stats) {
    config.stats = {};
  }
  config.stats.warningsFilter = [/Failed to parse source map/];

  return config;
};
