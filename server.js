import { v4 as uuidv4 } from "uuid";

// With a libaray
const randomString = uuidv4();

const timeStamp = new Date().toISOString();

setInterval(() => {
	console.log(timeStamp + ":" + randomString);
}, 5000);
