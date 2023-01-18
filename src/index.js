const fs = require('fs/promises')

const myFileWriter = async (fileName, fileContent) => {
	// write code here
	await fs.writeFile(fileName,"Content",function (err) {
		if(err) throw err;
	})
	// dont chnage function name
}

const myFileReader = async (fileName) => {
	// write code here
	await fs.readFile(fileName,function (err) {
		if(err) throw err;
	})
	// dont chnage function name
}


const myFileUpdater = async (fileName, fileContent) => {
	// write code here
	await fs.appendFile(fileName,"content",function (err) {
		if(err) throw err;
	})
	// dont chnage function name
}

const myFileDeleter = async (fileName) => {
	// write code here
	await fs.unlink(fileName,function (err) {
		if(err) throw err;
	})
	// dont chnage function name
}



module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }