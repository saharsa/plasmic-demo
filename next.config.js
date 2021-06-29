const plasmic = require("@plasmicapp/loader/next");

const withPlasmic = plasmic({
  projects: ["thShUx9YATnRbqwecGnHWf"], // An array of project ids.
});

module.exports = withPlasmic({
  // Your NextJS config.
  target: "serverless",
});
