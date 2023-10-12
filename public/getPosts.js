const path = require("path");
const fs = require("fs");

const dirPath = path.join(__dirname, "../src/components/sub/posts/content");
let postList = [];

const getPosts = () => {
  fs.readdir(dirPath, (err, files) => {
    if (err) {
      return console.log("failed to list contents of directory: " + err);
    }
    files.forEach((file, i) => {
      let obj = {};
      let post;
      fs.readFile(`${dirPath}/${file}`, "utf8", (err, contents) => {
        const getMeatadataIndices = (acc, elem, i) => {
          if (/^---/.test(elem)) {
            acc.push(i);
          }
          return acc;
        };
        const parseMetadata = ({ lines, metaDataIndices }) => {
          if (metaDataIndices.length > 0) {
            let metadata = lines.slice(
              metaDataIndices[0] + 1,
              metaDataIndices[1]
            );
            metadata.forEach((line) => {
              obj[line.split(": ")[0]] = line.split(": ")[1];
            });
            console.log(obj);
            return obj;
          }
        };
        const parseContet = ({ lines, metaDataIndices }) => {
          if (metaDataIndices.length > 0) {
            lines = lines.slice(metaDataIndices[1] + 1, lines.length);
          }
          return lines.join("\n");
        };
        const lines = contents.split("\n");
        const metaDataIndices = lines.reduce(getMeatadataIndices, []);
        const metadata = parseMetadata({ lines, metaDataIndices });
        const content = parseContet({ lines, metaDataIndices });
        post = {
          id: i + 1,
          title: metadata.title ? metadata.title : "No title given",
          date: metadata.date ? metadata.date : "No date given",
          tags: metadata.tags ? metadata.tags : "No tags given",
          serises: metadata.serises ? metadata.serises : "No serises given",
          content: content ? content : "No content given",
        };
        postList.push(post);
        if (i === files.length - 1) {
          let data = JSON.stringify(postList);
          fs.writeFileSync("src/posts.json", data);
        }
      });
    });
  });
};

getPosts();
