
function simpleState<T>(initial: T) : [()=> T, (str: T)=> void] {
    let val = initial;
    return [
        () => val,
        (str: T) => {
            val = str
        }
    ];
}

const [getterFn, setterFn] = simpleState("inital val")
console.log(getterFn());
setterFn('newval');
console.log(getterFn());



const [getterFn1, setterFn1] = simpleState<number|null>(null)
console.log(getterFn1());
setterFn1(22);
console.log(getterFn1());


interface  Rank<T>{
    item: T;
    rank: number;
}

/***** Ranker  */
function rankItems<T>(items: T[], rankFn: (item: T) => number): T[] {
    const itemsWithRank: Rank<T>[] = items.map(item  => {
        return {
            item: item,
            rank: rankFn(item)
        }
    });

    itemsWithRank.sort((a, b) => a.rank - b.rank);

    return itemsWithRank.map(itemWithRank => itemWithRank.item);
}
const students = [
    {
        name: 'john',
        score: 13
    },
    {
        name: 'jack',
        score: 9
    }
]
console.log(rankItems(students, (student)=> student.score));