import { Controller, Post, UseInterceptors, UploadedFile } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";

import { diskStorage } from 'multer';
import { editFileName, imageFileFilter } from "src/shared/file-upload.utils";
import { async } from "rxjs/internal/scheduler/async";

@Controller('uploader')
export class UploadController {
    @Post('image')
    @UseInterceptors(
        FileInterceptor('file', {
            storage: diskStorage({
                destination: './uploads',
                filename : editFileName,
            }),
            fileFilter: imageFileFilter
        }),
    )
    async uploadedFile(@UploadedFile() file) {
        const response = {
            originalname: file.originalname,
            filename: file.filename,
        };
        return response;
    }
}