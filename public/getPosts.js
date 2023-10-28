const path = require("path");
const fs = require("fs");

const dirPath = path.join(__dirname, "../src/assets/content");
let postList = [];

const getPosts = async () => {
  try {
    const files = await fs.promises.readdir(dirPath);
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      let obj = {};

      const contents = await fs.promises.readFile(
        path.join(dirPath, file),
        "utf8"
      );
      const lines = contents.split("\n");

      const metaDataIndices = lines.reduce(getMetadataIndices, []);
      const metadata = parseMetadata({ lines, metaDataIndices });
      const content = parseContent({ lines, metaDataIndices });

      const post = {
        id: i + 1,
        title: metadata.title ? metadata.title : "No title given",
        date: metadata.date ? metadata.date : "No date given",
        tags: metadata.tags ? metadata.tags : "No tags given",
        serises: metadata.serises ? metadata.serises : "No series given",
        summary: metadata.summary ? metadata.summary : "No summary given",
        content: content ? content : "No content given",
      };
      postList.push(post);

      if (i === files.length - 1) {
        let data = JSON.stringify(postList);
        fs.writeFileSync("src/posts.json", data);
      }
    }
  } catch (err) {
    console.error("Error:", err);
  }
};

getPosts();

function getMetadataIndices(acc, elem, i) {
  if (/^---/.test(elem)) {
    acc.push(i);
  }
  return acc;
}

function parseMetadata({ lines, metaDataIndices }) {
  let obj = {}; // obj 선언
  if (metaDataIndices.length > 0) {
    let metadata = lines.slice(metaDataIndices[0] + 1, metaDataIndices[1]);
    metadata.forEach((line) => {
      obj[line.split(": ")[0]] = line.split(": ")[1].trim(); // Trim whitespace
    });
    return obj;
  }
  return {};
}

function parseContent({ lines, metaDataIndices }) {
  if (metaDataIndices.length > 0) {
    lines = lines.slice(metaDataIndices[1] + 1, lines.length);
  }
  return lines.join("\n");
}
