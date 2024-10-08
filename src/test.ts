function getHashNow() {
	const randomHash = Math.random().toString(36).substring(2, 10);
	console.log(randomHash);

	setTimeout(getHashNow, 3000);
}

getHashNow();
