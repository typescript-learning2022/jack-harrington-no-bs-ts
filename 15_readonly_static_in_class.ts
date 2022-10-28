class Doggy {
    constructor(public readonly name: string, public readonly age: number) {}
}

const doggy : Doggy = new Doggy('joh', 12);
// doggy.age = 12;

/** static */
class DogList {
    private list : Doggy[] = [];
    static instance: DogList = new DogList();
    private constructor() {}

    static addDog(dog: Doggy) {
        DogList.instance.list.push(dog);
    }

    static getDogList() : Doggy[]{
        return DogList.instance.list;
    }
}

DogList.addDog({name: 'john', age: 22});
console.log(DogList.getDogList());