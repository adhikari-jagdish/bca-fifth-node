import { promises as fs } from 'fs';

const makeDirectory = async () => {
    try {
        await fs.mkdir("bca_5th");
        console.log("Directory created");
    } catch (error) {
        console.log(`Error creating directory ${error}`);
    }
}

//makeDirectory();

const readFilesInDirectory = async () => {
    try {
        const files = await fs.readdir("bca_5th");
        console.log(files);
    } catch (error) {
        console.log(`Error creating directory ${error}`);
    }
}

//readFilesInDirectory();


const createFile = async () => {
    try {
        await fs.writeFile("newfile.txt", "This is example of new file again");
        console.log("New File created");

        await fs.writeFile("bca_5th/hello.txt", "Hello BCA 5th sem Batch");
        console.log("New file inside bca 5th created");

        // await fs.writeFile("new_folder/bye.txt", "Bye BCA 5th sem Batch");
        // console.log("New file inside bca 5th created");

        ///Append data to above file
        await fs.appendFile("newfile.txt", "and it describes about file handling");

        ///Delete a file
        await fs.unlink("newfile.txt");
        console.log("File deleted");

    } catch (error) {
        console.log(`Error creating file ${error}`);
    }
}

//createFile();

const moveFile = async () => {
    try {
        await fs.writeFile("fileOne.txt", "This is file one here");
        console.log("File one created");

        const sourcefile = "fileOne.txt";
        const destinationFile = "bca_5th/fileOne.txt";

        await fs.rename(sourcefile, destinationFile);
        console.log("File moved");

    } catch (error) {
        console.log(`Error creating file ${error}`);
    }
}

//moveFile();

const getFileStats = async () => {
    try {

        const stats = await fs.stat("bca_5th/fileOne.txt");
        console.log(stats);


        const files = await fs.readdir("bca_5th");
        console.log(files);


        ///Remove a directory
        await fs.rmdir("bca_5th");
        console.log("Directory removed");

    } catch (error) {
        console.log(`Error creating file ${error}`);
    }
}

getFileStats();

