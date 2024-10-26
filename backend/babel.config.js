module.exports = {
  presets: ["@babel/preset-env"],
  plugins: [
    [
      "module-resolver",
      {
        alias: {
          "@controllers": "./controllers",
          "@utils": "./utils",
          "@middlewares": "./middlewares",
          "@models": "./models",
        },
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    ],
  ],
};
