const fs = require("fs");
const path = require("path");

function parseMdFile(filePath) {
  const content = fs.readFileSync(filePath, "utf-8");
  const lines = content.split("\n");

  let title = "";
  let url = "";
  let year = "";
  let hidden = false;
  let bodyStartIndex = 0;

  for (let i = 0; i < lines.length; i++) {
    if (lines[i].startsWith("title:")) {
      title = lines[i].replace("title:", "").trim();
    } else if (lines[i].startsWith("url:")) {
      url = lines[i].replace("url:", "").trim();
      bodyStartIndex = i + 1;
    } else if (lines[i].startsWith("year:")) {
      year = lines[i].replace("year:", "").trim();
    } else if (lines[i].startsWith("hidden:")) {
      const val = lines[i].replace("hidden:", "").trim().toLowerCase();
      hidden = val === "true" || val === "yes";
    }
  }

  const body = lines.slice(bodyStartIndex).join("\n").trim();

  return {
    title,
    URL: url,
    year,
    description: body,
    hidden,
  };
}

function getCards(folder) {
  const dir = path.join(process.cwd(), "data", folder);
  const files = fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md"))
    .sort();

  return files
    .map((file) => parseMdFile(path.join(dir, file)))
    .filter((card) => !card.hidden);
}

module.exports = { getCards };