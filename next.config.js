const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const withTM = require("next-transpile-modules")([
  "pdfequips-navbar",
  "pdfequips-open-graph",
  "pdfequips-footer",
  "fetch-subscription-status"
]);
const isProd = process.env.NODE_ENV === "production";
module.exports = withTM({
  sassOptions: {
    includePaths: [path.join(__dirname, "node_modules")],
  },
  assetPrefix: isProd ? "/number-pdf" : "",
  output: "export",
  webpack: (config, { isServer }) => {
    // Only run this configuration on the client side
    if (!isServer) {
      config.optimization.splitChunks = {
        cacheGroups: {
          default: false,
          vendors: false,
          // vendor chunk
          vendor: {
            // sync + async chunks
            chunks: "all",
            // import file path containing node_modules
            test: /node_modules/,
            // name of the chunk
            name: "vendor",
          },
        },
      };
    }

    // enable top level await
    config.experiments = { ...config.experiments, topLevelAwait: true };

    // Minify JavaScript
    if (process.env.NODE_ENV === "production") {
      config.optimization.minimize = true;
      config.optimization.minimizer.push(
        new TerserPlugin({
          terserOptions: {
            // Add any necessary terser options here
          },
        })
      );
    }

    // Add your additional webpack configuration here if needed

    return config;
  },
});
