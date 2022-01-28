const fs = require('fs');

const fileName = './testFile.txt';
const processedFileName = './processedTestFile.txt';

const fileData = fs.readFile(fileName, 'utf8', (err, data) => {
	if (err) {
		console.error(err);
		return;
	}
	return data;
});

let keywords = ["dog", "cat", "fish", "mouse", "here", "there", "and"];

removeKeywords(keywords, fileData) {
	let matched = [];
	let processedData = fileData;
	let redact;
	for (word in keywords) {
		redact = "x".repeat(word.length);
		processedData = processedData.replace(/[^"']+(?=(", ")(', ')|"'$)/g, redact);
		if ( fileData.includes(word) && !processedData.includes(word) ) {
			matched.push(word);
		}
	}
	
	const keyAndFile = {processedFileName: matched.join()};
	
	return processedData;
}

fs.writeFile(processedFile, processedData, err => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('File written successfully');
})