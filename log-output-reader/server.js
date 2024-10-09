const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;

// Directory to store the files
const folderPath = path.join(__dirname, "files");

// Ensure the folder exists
if (!fs.existsSync(folderPath)) {
	fs.mkdirSync(folderPath);
}

app.get("/", (req, res) => {
	const filePath = path.join(folderPath, "text.txt");

	fs.readFile(filePath, "utf8", (err, data) => {
		if (err) {
			console.error("Error reading file:", err);
			return res.status(500).send("Error reading file");
		}

		const hash = Math.random().toString(36).substring(2, 9);
		const updatedData = ` ${data} : ${hash}`;

		res.send(updatedData); // Send the updated data once.
	});
});

// Start the server
app.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`);
});
