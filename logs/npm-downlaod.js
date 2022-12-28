const hyperquest = require("hyperquest");
const _cliProgress = require("cli-progress");
const fs = require("fs");
const path = require("path");
const chalk = require("chalk");

const numberFormat = new Intl.NumberFormat("en-us", {
  minimumIntegerDigits: 2,
  minimumFractionDigits: 2,
});

const filenameFormat = (filename, length = 40) => {
  if (filename.length > length) {
    return filename.substring(0, length - 3) + "...";
  }

  let pad = "";
  for (let i = 0; i < length; i++) {
    pad += " ";
  }
  let finalName = filename + pad;
  if (finalName.length) return (filename + pad).substring(0, pad.length);
};

const snoFormat = (totalFiles) => {
  return new Intl.NumberFormat("en-us", {
    minimumIntegerDigits: String(totalFiles).length,
    maximumFractionDigits: 0,
  });
};

function format(options, params, payload) {
  // Bar
  const bar =
    options.barCompleteString.substr(
      0,
      Math.round(params.progress * options.barsize)
    ) +
    options.barIncompleteString.substr(
      0,
      Math.round((1 - params.progress) * options.barsize)
    );

  // Percentage
  let percentage = numberFormat.format(
    Math.round(params.progress * 10000) / 100
  );

  // Chaning colors
  let color = chalk.yellow;
  if (payload.completed) {
    percentage = "100.0";
    color = chalk.green;
  } else if (payload.error) {
    color = chalk.red;
  } else {
    color = chalk.yellow;
  }

  return color(
    " > " +
      (payload.sno
        ? `#${snoFormat(payload.totalFiles).format(payload.sno)} `
        : "") +
      filenameFormat(payload.filename) +
      "   " +
      `${percentage}%` +
      " | " +
      bar +
      " | " +
      `ETA: ${params.eta}s`
  );
}

module.exports.showProgress = ({
  source = "https://sabnzbd.org/tests/internetspeed/20MB.bin",
  destination = path.join(__dirname + "/test.bin"),
} = {}) => {
  const progressBar = new _cliProgress.SingleBar(
    {
      format,
    },
    _cliProgress.Presets.shades_classic
  );

  let total = 1;
  let received = 0;

  let out = fs.createWriteStream(destination);
  let req = hyperquest(source);
  req.pipe(out);

  req.on("response", function (res) {
    total = res.headers["content-length"];
    progressBar.start(total, 0, {
      filename: path.basename(destination),
      speed: "N/A",
      completed: false,
      error: false,
    });
  });

  req.on("data", function (chunk) {
    received += chunk.length;
    progressBar.update(received);
  });

  req.on("end", function () {
    progressBar.update(received, { completed: true });
    progressBar.stop();
    out.close();
  });

  req.on("error", (e) => {
    fs.unlink(destination, () => {});
    progressBar.update(received, { error: true });
    progressBar.stop();
    console.error(e);
  });
};

const getMultiBar = () => {
  return new _cliProgress.MultiBar(
    {
      format,
      stopOnComplete: true,
    },
    _cliProgress.Presets.shades_classic
  );
};

module.exports.showMultipleProgress = async (fileList = [], chunksize = 10) => {
  const totalFiles = fileList.length;
  console.log(`Downloading ${totalFiles} files:\n`);

  let progressBar = getMultiBar();

  let chunks = [fileList.slice(0, chunksize), fileList.slice(chunksize)];
  let downlaoded = 0;
  let continued = 0;

  const waitForAvailable = () => {
    if (continued >= chunksize) {
      setTimeout(waitForAvailable, 2000);
    }
  };

  const runFile = async (file, added = false) => {
    await downloadFile(file);
    if (added) continued--;
    waitForAvailable();
    let newFile = chunks[1].shift();
    continued++;
    if (newFile) {
      await runFile(newFile, true);
    }
  };

  const runChunk = async (chunk) => {
    return new Promise(async (resolve, reject) => {
      try {
        await Promise.all(chunk.map(runFile));
        resolve();
      } catch (e) {
        reject();
      }
    });
  };

  const main = async () => {
    try {
      await runChunk(chunks[0]);
    } catch (e) {
      // Ignore
    }
  };

  const downloadFile = async ({ source, destination }) => {
    downlaoded++;
    if (downlaoded >= 30) progressBar = getMultiBar();
    return new Promise(async (resolve, reject) => {
      let received = 0;
      let total = 100000000;
      let bar = progressBar.create(1000000, 0, {
        filename: path.basename(destination),
        sno: downlaoded,
        totalFiles,
        speed: "N/A",
        completed: false,
        error: false,
      });

      let out = fs.createWriteStream(destination);
      let req = hyperquest(source);
      req.pipe(out);

      req.on("response", function (res) {
        total = res.headers["content-length"];
        bar.setTotal(total);
      });

      req.on("data", function (chunk) {
        received += chunk.length;
        bar.update(received);
      });

      req.on("end", function () {
        bar.update(received, { completed: true });
        bar.stop();
        out.close();
        resolve();
      });

      req.on("error", async (e) => {
        await fs.promises.unlink(destination);
        bar.update(received, { error: true });
        bar.stop();
        reject(e);
      });
    });
  };

  await main();
};
