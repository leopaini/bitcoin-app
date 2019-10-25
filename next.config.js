const withStylus = require("@zeit/next-stylus");

function removeError(config) {
  config.module.rules.forEach(rule => {
    if (Array.isArray(rule.use)) {
      rule.use.forEach(u => {
        if (u.loader === "css-loader" && u.options) {
          delete u.options.minimize;
        }
      });
    }
  });
}

module.exports = withStylus({
  webpack(config) {
    removeError(config);
    return config;
  }
});
