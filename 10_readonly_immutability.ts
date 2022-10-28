interface Cat {
    name: string;
    age: number;
}
type ReadOnlyCat = Readonly<Cat>;
/** Above line equivalent to below */
//type ReadOnlyCat = {
//     readonly name: string;
//     readonly age: number;
// }

function coordinates(a:number, b:number, c:number): readonly [number, number, number] {
    return [
        a,b,c
    ]
}

let coordinate  = coordinates(1,33,4);
//** below line is error */
// coordinate[2] = 1;

const arr1 = [1,3,43,4] as const;
/** below line is error */
// arr1[2]= 2;