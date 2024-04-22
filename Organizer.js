const fs = require("fs");
const path = require("path");

// Define the folder to organize
const folder = path.join(__dirname, "Organise Files");

// Check if the folder exists
fs.access(folder, (err) => {
  if (err) {
    // If the folder does not exist, create it
    fs.mkdir(folder, (err) => {
      if (err) {
        console.error("Directory creation failed:", err);
        return;
      }
      console.log("Directory created successfully...");
      organizeFiles(folder);
    });
  } else {
    console.log("The Directory Already Exists...");
    organizeFiles(folder);
  }
});

function organizeFiles(folder) {
  // Read the files in the folder
  fs.readdir(folder, (err, files) => {
    if (err) {
      console.error("Reading Files Failed:", err);
      return;
    }
    console.log("Files Read Successfully...");
    // Organize each file
    files.forEach((file) => {
      organizeFile(folder, file);
    });
  });
}

function organizeFile(folder, file) {
  const extName = path.extname(file).slice(1);
  if (extName) {
    const newpath = path.join(folder, extName.toUpperCase());
    const sourcePath = path.join(folder, file);
    const destinationPath = path.join(newpath, file);

    // Check if the extension-based directory exists
    fs.access(newpath, (err) => {
      if (err) {
        // If the directory does not exist, create it
        fs.mkdir(newpath, { recursive: true }, (err) => {
          if (err) {
            console.error("Sub Directory creation failed:", err);
            return;
          }
          console.log("Sub Directory created successfully...");
          moveFile(sourcePath, destinationPath);
        });
      } else {
        // If the directory exists, move the file
        moveFile(sourcePath, destinationPath);
      }
    });
  }
}

function moveFile(sourcePath, destinationPath) {
  fs.rename(sourcePath, destinationPath, (err) => {
    if (err) {
      console.error("File move failed:", err);
      return;
    }
    console.log("File moved successfully...");
  });
}