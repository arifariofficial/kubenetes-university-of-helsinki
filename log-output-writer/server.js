const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const port = process.env.PORT || 3001;

// Directory to store the files
const folderPath = path.join(__dirname, "files");

// Ensure the folder exists
if (!fs.existsSync(folderPath)) {
	fs.mkdirSync(folderPath);
}

// write to a file in every 5 seconds
setInterval(() => {
	const currentTime = new Date().toISOString();
	const filePath = path.join(folderPath, "text.txt");

	// write to a file every 5 seconds and write the current time to a file
	fs.writeFile(filePath, currentTime, (err) => {
		if (err) {
			console.error("Error writing to file:", err);
		}
	});
}, 5000);

// Start the server
app.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`);
});
