// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require("next-pwa");

module.exports = withPWA({
  future: { webpack5: true },
  pwa: {
    dest: "public",
  },
});
