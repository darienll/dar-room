import { extname } from "path";
import { uuid } from "uuidv4"; // npm install uuidv4

// Функция для фильтрации файлов по расширению
export const imageFileFilter = (req, file, callback) => {
    if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
        return callback(new Error('Only image files are allowed!'), false);
    }
    callback(null, true);
};

// Функция для генерации уникального названия загруженного файла
export const editFileName = (req, file, callback) => {
    const fileExtName = extname(file.originalname); // 1.jpg -> '.jpg'
    const randomName = uuid(); // -> 123132-465465-1313546-546654
    callback(null, `${randomName}${fileExtName}`); // 123132-465465-1313546-546654.jpg
};
