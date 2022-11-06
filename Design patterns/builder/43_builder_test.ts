import { DirectoryScrapper, FileReader } from "./43_builder";

const dirScrapper = new DirectoryScrapper('/Users/mitalysen/Documents/Study/typescript/no bs-ts/Design patterns/builder/dir',
new FileReader());
console.log(dirScrapper.scanFiles());