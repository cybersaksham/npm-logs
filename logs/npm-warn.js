const chalk = require("chalk");

const print = (...statements) => {
  let finalList = [
    chalk.white.bgBlack("npm"),
    chalk.yellowBright.bgBlack("WARN!"),
    ...statements,
  ];
  console.log(finalList.join(" "));
};

const showWarning = ({ warnings = [], summary = [] }) => {
  warnings.forEach((warn) => {
    print(chalk.yellow(warn));
  });
  if (summary.length > 0) {
    console.log();
    summary.forEach((log) => {
      print(log);
    });
  }
};

module.exports = { showWarning };
