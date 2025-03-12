const fs = require('fs');
const path = require('path');

const filePath = "C:\\Colledge\\BackJS\\FS_L3\\scr\\modules\\first.txt";
const destPath = "copy.txt";
const folderPath = "C:\\Colledge\\BackJS\\FS_L3\\scr";

function readFileSync(filePath) {
    try {
        const data = fs.readFileSync(filePath, 'utf8');
        console.log("Данные с файла: ", data);
    } catch (error) {
        throw error;
    }
}

function readFileAsync(filePath) {
    fs.readFile(filePath, 'utf8', (error, data) => {
        if (error) throw error;
        console.log("Данные с файла: ", data);
    });
}

function writeFileSync(filePath, str) {
    try {
        fs.writeFileSync(filePath, str, 'utf8');
        console.log('Запись файла завершена');
        readFileSync(filePath);
    } catch (error) {
        throw error;
    }
}

function writeFileAsync(filePath, str) {
    fs.writeFile(filePath, str, 'utf8', (error) => {
        if (error) throw error;
        console.log('Запись файла завершена');
        readFileAsync(filePath);
    });
}

function appendFileSync(filePath, str) {
    try {
        fs.appendFileSync(filePath, str, 'utf8');
        console.log('Файл дописан');
        readFileSync(filePath);
    } catch (error) {
        throw error;
    }
}

function appendFileAsync(filePath, str) {
    fs.appendFile(filePath, str, 'utf8', (error) => {
        if (error) throw error;
        console.log('Файл дописан');
        readFileAsync(filePath);
    });
}

function clearFileSync(filePath) {
    try {
        fs.writeFileSync(filePath, '', 'utf8');
        console.log('Содержимое файла успешно удалено');
    } catch (error) {
        throw error;
    }
}

function clearFileAsync(filePath) {
    fs.writeFile(filePath, '', 'utf8', (error) => {
        if (error) throw error;
        console.log('Содержимое файла успешно удалено');
    });
}
function copyFileSync(src, dest) {
    try {
        fs.copyFileSync(src, dest);
        console.log('Файл успешно скопирован');
    } catch (error) {
        throw error;
    }
}

function copyFileAsync(src, dest) {
    fs.copyFile(src, dest, (error) => {
        if (error) throw error;
        console.log('Файл успешно скопирован');
    });
}
function createFolderSync(folderPath) {
    fs.mkdirSync(folderPath, { recursive: true });
    console.log('Папка успешно создана');
}

function createFolderAsync(folderPath) {
    fs.mkdir(folderPath, { recursive: true }, (error) => {
        if (error) throw error;
        console.log('Папка успешно создана');
    });
}

function deleteFolderSync(folderPath) {
    fs.rmdirSync(folderPath, { recursive: true });
    console.log('Папка успешно удалена');
}

function deleteFolderAsync(folderPath) {
    fs.rmdir(folderPath, { recursive: true }, (error) => {
        if (error) throw error;
        console.log('Папка успешно удалена');
    });
}

function listFilesSync(directory) {
    try {
        const files = fs.readdirSync(directory);
        files.forEach((file) => {
            const filePath = path.join(directory, file);
            if (fs.lstatSync(filePath).isFile() && !file.startsWith('.')) {
                console.log(filePath);
            }
        });
    } catch (error) {
        throw error;
    }
}
function deleteAllFilesSync(directory) {
    const files = fs.readdirSync(directory);
    files.forEach((file) => {
        const filePath = path.join(directory, file);
        if (!file.startsWith('.')) {
            if (fs.lstatSync(filePath).isDirectory()) {
                deleteAllFilesSync(filePath);
                fs.rmdirSync(filePath);
            } else {
                fs.unlinkSync(filePath);
            }
        }
    });
    console.log('Все файлы и папки удалены');
}
writeFileSync(filePath, 'Лаба 3 ');
readFileAsync(filePath);
appendFileSync(filePath, ' ФАЙЛ СТРИНГ');
copyFileAsync(filePath, destPath);
createFolderSync(path.join(folderPath, 'new'));
deleteFolderAsync(path.join(folderPath, 'new'));
listFilesSync(folderPath);
deleteAllFilesSync(folderPath);
