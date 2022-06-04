const { hello } = require('@kenrick95/pnpm-testing-gh-registry');
module.exports = {
  there: () => {
    return `There! ${hello()}!`;
  },
};
