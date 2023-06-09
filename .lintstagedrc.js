module.exports = {
  'src/**/*.{js,jsx,vue}': ['eslint --ext', 'eslint --fix', 'prettier --write'],
  'src/**/*.{css,less,scss}': ['prettier --write'],
  'src/**/*.{md,json}': ['prettier --write'],
};
