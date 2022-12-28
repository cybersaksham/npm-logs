const { showError } = require("../logs/npm-error");

showError({
  code: 400,
  errors: [
    "Not Found - GET https://registry.npmjs.org/error - Not found",
    "",
    "'error@*' is not in this registry.",
    "",
    "Note that you can also install from a",
    "tarball, folder, http url, or git url.",
  ],
  summary: [
    "A complete log of this run can be found in:",
    "\t/home/cybersaksham/.npm/_logs/2022-12-27T17_58_06_509Z-debug-0.log",
  ],
});
