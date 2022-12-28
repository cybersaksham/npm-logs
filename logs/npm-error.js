const chalk = require("chalk");

const print = (...statements) => {
  let finalList = [
    chalk.white.bgBlack("npm"),
    chalk.red.bgBlack("ERR!"),
    ...statements,
  ];
  console.log(finalList.join(" "));
};

module.exports.showError = ({ code = 404, errors = [], summary = [] } = {}) => {
  print(chalk.magenta("code"), "E" + code);
  errors.forEach((error) => {
    print(chalk.magenta(code), error);
  });
  if (summary.length > 0) {
    console.log();
    summary.forEach((log) => {
      print(log);
    });
  }
};
