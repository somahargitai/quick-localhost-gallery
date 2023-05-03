const Jimp = require("jimp"); // load image names from public/images folder with node js
const fs = require("fs");
const path = require("path");

const sourceFolder = path.join(__dirname, "/public/realimages");
const outputFolder = path.join(__dirname, "/public/imagesoutput");
const blurLevel = 10;

async function blurFilesInFolder() {
  const imageFolder = sourceFolder;
  const imageNames = fs.readdirSync(imageFolder);

  for (let imageName of imageNames) {
    console.log(imageName);
    if (imageName !== ".gitkeep" && imageName !== ".DS_Store") {
      const filePath = path.join(imageFolder, imageName);
      const image = await Jimp.read(filePath);

      image.blur(blurLevel).write(path.join(outputFolder, imageName));
      // image.quality(5).write(path.join(outputFolder, imageName));
      // image.convolute([[1, -1, 1],[1, 1, 1],[-1, 1, 1],  ]).write(path.join(outputFolder, imageName));
      // image.pixelate(10, 10, 10).write(path.join(outputFolder, imageName));
      // image.sepia().write(path.join(outputFolder, imageName));
      // image.posterize(10).write(path.join(outputFolder, imageName));
      // image.displace(image, 25).write(path.join(outputFolder, imageName));
      // image.gaussian(10).write(path.join(outputFolder, imageName));
    }
  }
}

// blur();
blurFilesInFolder();

console.log("Image is processed successfully");
