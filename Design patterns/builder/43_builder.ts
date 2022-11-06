import fs from 'fs';

export class DirectoryScrapper {
    constructor(private dirPath: string, private fileReader: IFileReader) {}

    scanFiles() : {}{
        return fs.readdirSync(this.dirPath)
        .reduce((pv, fileName) => {
            const file = `${this.dirPath}/${fileName}`;
            if(this.fileReader.isJsonFile(file)) {
                return {
                    ...pv,
                    [fileName]: this.fileReader.readJsonFile(file)
                };
            }else {
                return {
                    ...pv,
                    [fileName]: this.fileReader.readTextFile(file)
                };
            }
        }, {})
    }
}

interface IFileReader {
    readTextFile(file: string):string;
    readJsonFile(file: string): string;
    isJsonFile(file: string) : boolean;
}

export class FileReader implements IFileReader {
    isJsonFile(file: string): boolean {
        return file.endsWith('json');
    }
    readTextFile(file: string): string {
        return fs.readFileSync(file, {encoding: 'utf-8'});
    }
    readJsonFile(file: string): string {
        return JSON.parse(fs.readFileSync(file, {encoding: 'utf-8'}));
    }

}