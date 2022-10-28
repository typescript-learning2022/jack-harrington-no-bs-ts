// type Dog = {
//     name: string;
// } & Record<string, string>

// const dog1 : Dog = {name: 'john', age: '12', color: 'brown'}

type Dog = {
    name: string;
    [key: string]: string|number;
}

const dog1 : Dog = {name: 'john', age: 12, color: 'brown'}