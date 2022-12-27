import chalk from "chalk";

const print = (...statements) => {
  let finalList = [
    chalk.white.bgBlack("npm"),
    chalk.red.bgBlack("ERR!"),
    ...statements,
  ];
  console.log(finalList.join(" "));
};

export const throwError = ({ code = 404, errors = [], summary = [] }) => {
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

throwError({
  code: 400,
  errors: [
    "Not Found - GET https://registry.npmjs.org/fsjkfhjdsgfyweybfjawefyubwheu - Not found",
    "",
    "'fsjkfhjdsgfyweybfjawefyubwheu@*' is not in this registry.",
    "",
    "Note that you can also install from a",
    "tarball, folder, http url, or git url.",
  ],
  summary: [
    "A complete log of this run can be found in:",
    "\t/home/cybersaksham/.npm/_logs/2022-12-27T17_58_06_509Z-debug-0.log",
  ],
});
