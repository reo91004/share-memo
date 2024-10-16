const fs = require("fs");
require("dotenv").config();

const srcFile = "./src/index.html";
const destFile = "./index.html";

fs.readFile(srcFile, "utf8", (err, data) => {
	if (err) {
		console.error("Error reading file:", err);
		return;
	}

	const result = data.replace("%%FIREBASE_KEY%%", process.env.FIREBASE_KEY);

	fs.writeFile(destFile, result, "utf8", (err) => {
		if (err) {
			console.error("Error writing file:", err);
			return;
		}
		console.log("Build completed: Firebase key has been inserted into index.html");
	});
});
