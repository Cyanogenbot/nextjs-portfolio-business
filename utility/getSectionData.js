const fs = require("fs");
const path = require("path");

function parseSectionFile(filePath) {
  const content = fs.readFileSync(filePath, "utf-8");
  const lines = content.split("\n");

  let title = "";
  let buffertext = "";
  let image = "";
  let image2 = "";
  let image3 = "";
  let caption = "";
  let alt = "";
  let alt2 = "";
  let alt3 = "";
  let alt1 = "";
  let link = "";
  let inFrontmatter = true;

  const bodyLines = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (inFrontmatter) {
      if (line.startsWith("title:")) {
        title = line.replace("title:", "").trim();
      } else if (line.startsWith("buffertext:")) {
        buffertext = line.replace("buffertext:", "").trim();
      } else if (line.startsWith("image:")) {
        image = line.replace("image:", "").trim();
      } else if (line.startsWith("image2:")) {
        image2 = line.replace("image2:", "").trim();
      } else if (line.startsWith("image3:")) {
        image3 = line.replace("image3:", "").trim();
      } else if (line.startsWith("caption:")) {
        caption = line.replace("caption:", "").trim();
      } else if (line.startsWith("alt:")) {
        alt = line.replace("alt:", "").trim();
      } else if (line.startsWith("alt2:")) {
        alt2 = line.replace("alt2:", "").trim();
      } else if (line.startsWith("alt3:")) {
        alt3 = line.replace("alt3:", "").trim();
      } else if (line.startsWith("alt1:")) {
        alt1 = line.replace("alt1:", "").trim();
      } else if (line.startsWith("link:")) {
        link = line.replace("link:", "").trim();
      } else if (line.trim() === "") {
        inFrontmatter = false;
      }
    } else {
      bodyLines.push(line);
    }
  }

  const rawBody = bodyLines.join("\n").trim();
  const paragraphs = rawBody.split(/\n\s*\n/).map((p) => p.trim()).filter(Boolean);

  return {
    title,
    buffertext,
    image,
    image2,
    image3,
    caption,
    alt: alt || alt1,
    alt2,
    alt3,
    link,
    paragraphs,
  };
}

function getSections() {
  const dir = path.join(process.cwd(), "data", "sections");
  const files = fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md"))
    .sort();

  return files.map((file) => parseSectionFile(path.join(dir, file)));
}

module.exports = { getSections };