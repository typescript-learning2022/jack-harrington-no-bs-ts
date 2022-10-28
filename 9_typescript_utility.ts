/**utility types in ts */
/** Parial */
interface Person {
    name: string;
    email?: string;
    id: string;
}

function merge(person: Person, personOptional: Partial<Person>): Person {
    return {
        ...person,
        ...personOptional
    }
}

console.log(merge({name: 'john', email: 'not@not.com', id: '12'}, {name: 'jack'}));

/** Omit */
type PersonWithoutName = Omit<Person, "name">;
const personWithoutName : PersonWithoutName = {
    id: '2'
}

/** Record */
type PersonRecord = Record<"name", Person>;
const personRecord: PersonRecord = {"name": {name: 'jack', id: '2'}};
console.log(personRecord);