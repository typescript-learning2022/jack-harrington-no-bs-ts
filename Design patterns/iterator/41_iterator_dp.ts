import fetch from 'node-fetch';
export async function* iterateResults<DataType>(url: string) {
    let nexturl: string|undefined = url;
    do {
        const rsults = await fetch(nexturl);
        const res: {
            next?: string,
            results: DataType
        } = await rsults.json();
        /** this is return each result */
        yield res.results;
        nexturl = res.next;
    }while(nexturl)
}



//Genrators in JS
// function *genNmber() {
//     console.log('before 1st yield');
//     let ret  = yield 1;
//     console.log('before 2nd yield');
//     console.log(ret);
//     yield 2;
// }

// const gen = genNmber();
// console.log(gen.next());
// console.log(gen.next(222));
// console.log(gen.next());
