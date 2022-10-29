type FilterFunction<T> = (data: T[keyof T]) => boolean;
type Filters<T> = Record<keyof T, FilterFunction<T>[]>;

type MapFunction<T> = (data: T[keyof T])=> T[keyof T];
type Maps<T> = Record<keyof T, MapFunction<T>[]>;
 
interface EventData<T> {
    eventName: keyof T,
    data: T[keyof T]
}

class EventProcessor<T>{
    private filters : Filters<T> = {} as Filters<T>;
    private maps: Maps<T> = {} as Maps<T>;
    private records: EventData<T>[] = [] as EventData<T>[];

    handleEvent<K extends keyof T>(eventName: K, data: T[K]): void {
        console.log('data,', data);
        let passFilter: boolean = true;
        for(let filtr of this.filters[eventName] ?? []) {
            console.log('filtr,', filtr(data));
            if(!filtr(data)) {
                passFilter = false;
                break;
            }
        }
        if(passFilter) {
            
            for(let map of this.maps[eventName] ?? []) {
                data = map(data) as T[K];
            }
            this.records.push({
                eventName,
                data
            });
        }
    }
  
    addFilter<K extends keyof T>(
      eventName: K,
      filter: (data: T[K]) => boolean
    ): void {
        if(!this.filters[eventName]) {
            this.filters[eventName] = [];
        }
        this.filters[eventName].push(filter as FilterFunction<T>);
    }
  
    addMap<K extends keyof T>(eventName: K, map: (data: T[K]) => T[K]): void {
        this.maps[eventName] = this.maps[eventName] ?? [];
        // this.maps[eventName].push(<MapFunction<T>>map);
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

uep.addFilter("login", ({ user }) => Boolean(user));

uep.addMap("login", (data) => ({
    ...data,
    hasSession: Boolean(data.user && data.name),
}));

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