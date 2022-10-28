

function pluck<T,D extends keyof T>(items: T[], key: D): T[D][] {
    return items.map((item)=> {
        return item[key];
    })
}

const studentsLs = [
    {
        name: 'john',
        age: 32
    },
    {
        name: 'jack',
        age: 11
    }
];

console.log(pluck(studentsLs, "age"));
console.log(pluck(studentsLs, "name"));