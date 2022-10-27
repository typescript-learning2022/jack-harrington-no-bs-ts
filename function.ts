function addNumber(a:number, b:number):number {
    return a+b;
}

export default addNumber;
export const concatStrings = (str1:string, str2: string="") : string => `${str1} ${str2}`;
export const formatFN = (title: string, format:string|number) => `${title} ${format}`;
export const printFormat = (title: string, format: string|number) => console.log(formatFN(title, format));

// export const fetchData = (url: string, params: any[]) => Promise.resolve(`Data for URl ${url}`);

export const greet = (message: string, ...names:string[]) =>
`${message} ${names.join(' ')}`;

export function getName(user: {fname: string, lname: string}): string {
    return `${user.fname ? user.fname : 'fname'} ${user.lname ? user.lname : 'lname'}`; 
}