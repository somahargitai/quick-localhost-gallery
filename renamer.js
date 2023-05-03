// load image names from public/images folder with node js
const fs = require("fs");
const path = require("path");
const imageFolder = path.join(__dirname, "/public/images");
console.log(__dirname);
console.log(imageFolder);
const imageNames = fs.readdirSync(imageFolder);

// iterate through them and rename them
const newNames = [];
imageNames.forEach((imageName) => {
  // newname should put the text '_3d_model_)' before the file extension and the last two characters of the file name should be removed
  // get last two characters of file name
  // get file name without extension
  const fileNameWithoutExtension = imageName.replace(/\.[^/.]+$/, "");
  const extensionOfFile = imageName.replace(/^.*\./, "");
  const lastTwoChars = fileNameWithoutExtension.slice(-2);
  const fileNameWithoutLastTwoChars = fileNameWithoutExtension.slice(0, -2);
  const newFileName = `${fileNameWithoutLastTwoChars}_3d_model_${lastTwoChars}.${extensionOfFile}`;

  if (lastTwoChars !== "60" || lastTwoChars !== "90" || lastTwoChars !== "80") {
    newNames.push(newFileName);
    fs.renameSync(
      path.join(imageFolder, imageName),
      path.join(imageFolder, newFileName)
    );
  }
});
