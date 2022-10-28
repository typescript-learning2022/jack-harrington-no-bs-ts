

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


/** Event base Event example */

interface BaseEvent {
    time: number;
    user: string;
}

interface EventMap {
    addToCart: BaseEvent & {quantity: number, totalPrice: number},
    checkout: BaseEvent
}

function sendEvent<T extends keyof EventMap>(key: T, data: EventMap[T]) {
    console.log('Event emitted', data);
}

sendEvent("addToCart", {time: 23232, user: 'john', quantity: 22, totalPrice: 232.2});
sendEvent("checkout", {time: 2111, user: 'jack'});