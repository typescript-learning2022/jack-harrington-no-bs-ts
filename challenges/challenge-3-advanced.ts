type Handler<T> = {
    // grab the prop ie. key of T as Property -> this could be any name
    [Property in keyof T as `map${Capitalize<string & Property>}`]?: (data: T[Property]) => T[Property];
} & {
    [Prop in keyof T as `filter${Capitalize<string & Prop>}`]?: (data: T[Prop]) => boolean;
}

interface EventData<T> {
    eventName: keyof T,
    data: T[keyof T]
}

class EventProcessor<T>{
     handlers: Handler<T>[] = [] as Handler<T>[];
    private records: EventData<T>[] = [] as EventData<T>[];

    handleEvent<K extends keyof T>(eventName: K, data: T[K]): void {
        console.log('data,', data);
        let passFilter: boolean = true;
        const capitilize = (s: string) => `${s.slice(0,1).toUpperCase()}${s.slice(1, s.length)}`;

        for(let handler of this.handlers ?? []) {
            const filterFunc = handler[`filter${capitilize(eventName)}`];
            if(!filterFunc(data)) {
                passFilter = false;
                break;
            }
        }

        if(passFilter) {
            let mappedData = {...data};
            for(let handler of this.handlers ?? []) {
                const mapFunc = handler[`map${capitilize(eventName)}`];
                mappedData = mapFunc(mappedData);
            }

            this.records.push({
                eventName,
                data: mappedData
            });
        }
    }
  
    addHandler(handler: Handler<T>) {
        this.handlers.push(handler)
    }
  
    getProcessedEvents(): EventData<T>[] {
        return this.records;
    }
}
  
interface EventMap {
    login: { user?: string; name?: string; hasSession?: boolean };
    logout: { user?: string };
}
  
class UserEventProcessor extends EventProcessor<EventMap> {}
  
const uep = new UserEventProcessor();


uep.addHandler({
    filterLogin: ({ user }) => Boolean(user),
    mapLogin: (data) => ({
      ...data,
      hasSession: Boolean(data.user && data.name),
    }),
  });

uep.handleEvent("login", {
    user: undefined,
    name: "jack",
});
uep.handleEvent("login", {
    user: "tom",
    name: "tomas",
});
uep.handleEvent("logout", {
    user: "tom",
});

console.log(uep.handlers);
console.log(uep.getProcessedEvents());


/*
Result:
[
{
    eventName: 'login',
    data: { user: 'tom', name: 'tomas', hasSession: true }
},
{ eventName: 'logout', data: { user: 'tom' } }
]
*/
export default EventProcessor;