// let arr= [1,2,3,4];
// let res = arr.reduce((pv, cv, ci, arr)=> {
//     return pv + cv;
// })

// console.log(res);

function myForEach<T>(items: T[], forEachFn: (v: T)=> void) : void {
    items.reduce((pv, cv)=> {
        forEachFn(cv);
        return undefined;
    }, undefined);
}

let arr= [1,2,3,4];
myForEach(arr, (v:number)=> console.log(v + " item"));

function myMap<T, U>(items: T[], mapFn: (v:T)=> U): U[]  {
    let res:U[] = [];
    items.reduce((pv, cv)=> {
        res.push(mapFn(cv));
        return undefined;
    }, undefined);
    return res;
}
console.log(myMap(arr, (v:number)=> v*20));

function myFilter<T>(items: T[], filterFn: (v:T)=> boolean): T[] {
    let res: T[] = [];
    items.reduce((pv, cv)=> {
        if(filterFn(cv))
            res.push(cv);
        return undefined;
    }, undefined);

    return res;
}
console.log(myFilter(arr, (v: number)=> v%2==0));