module.exports = function(eleventyConfig) {
  // Copy the image file from src to _site
  eleventyConfig.addPassthroughCopy("src/Challenge_8_Image.png");

  return {
    dir: {
      input: "src",
      output: "_site"
    },
    passthroughFileCopy: true
  };
};
