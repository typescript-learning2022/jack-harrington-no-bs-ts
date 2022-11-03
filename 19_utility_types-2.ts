type Name ={
    first: string;
    last: string;
}

function fullName(name: Name) : Name & {fullName: string}{
    return {
        ...name,
        fullName: name?.first + " " + name?.last
    }
}

/** function that takes multiple parameters to a iterator function and results in array of all of the result */
/** Paramters<T> means parameters going in iteration function T.
Parameters<T>[0] means first parameter going in iteration function T. 
For fullName iterator finction Paramter<T>[0] is of Name type */
function permuteRows<T extends (...args: any[])=> any>(  iteratorFunction: T,parameters: Parameters<T>[0][]) 
: ReturnType<T>[]{
    return parameters.map(paramter => iteratorFunction(paramter));
}

let name1: Name = {first: 'john', last: 'black'};
let name2: Name = {first: 'max', last: 'black'};

let result = permuteRows(fullName, [name1, name2]);
console.log(result);

//** Class */
class PersonWithFullName {
    constructor(public name: Name){}

    get fullName(): string{
        return `${this.name.first} ${this.name.last}`;
    }
}

/** new (...args: any[])=> any -------> matches any constructor */
function createObjects<T extends new (...args: any[])=> any>(objectType: T, 
    data: ConstructorParameters<T>[0][]) 
: InstanceType<T>[] {
    return data.map(param => new objectType(param));
}

let resul2 = createObjects(PersonWithFullName, [{...name1}, {...name2}]);
console.log(resul2);
