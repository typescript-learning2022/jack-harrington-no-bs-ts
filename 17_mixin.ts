/** function returning a class */
function createLogger() {
    return class SimpleLogger {
        private text: string='';
        log(text: string) : void {
            this.text += text;
        }

        getLogText(): string {
            return this.text;
        }
    }
}

const LoggerClass = createLogger();
const loggerObj = new LoggerClass();
loggerObj.log('text1');
loggerObj.log('text2');

console.log(loggerObj.getLogText());

/** Database with record */
function createSimpleMemoryDatabase<T>() {
    return class SimpleMemoryDatabase<T> {
        private record: Record<string, T> = {};

        storeRecord(key: string, value: T): void {
            this.record = {
                ...this.record,
                [key]: value
            };
        }

        getRecord(key: string): T {
            return this.record[key];
        }

        getObject() : object{
            return this.record;
        }
    }
}

const SimpleMemoryDatabase = createSimpleMemoryDatabase<number>();
const memoryDBObj = new SimpleMemoryDatabase();
memoryDBObj.storeRecord('key1', 1);
memoryDBObj.storeRecord('key2', 2);
console.log(memoryDBObj.getRecord('key2'));
console.log('object of record, ',memoryDBObj.getObject());
/** create mixin that introduces a new function on simpleMemoryDatabse that dumps all records present in this.record */
type Constructor<B> = new (...args: any[]) => B;

// constructor is generic type, we specify that the class B should have getObject() method implemented.
function dumpableSimpleMemoryDatabase<B extends Constructor<{
    getObject(): object
}>>(BaseClass: B) {
    return class DumpableSimpleMemoryDatabase extends BaseClass{
        dumpAllDataFromRecord(): void {
            console.log(JSON.stringify(this.getObject()));
        }
    }
}

const DumpableSimpMemoDBClass = dumpableSimpleMemoryDatabase(SimpleMemoryDatabase);
const dumpableSimpMemDBObj = new DumpableSimpMemoDBClass();
dumpableSimpMemDBObj.storeRecord('k1',1 );
dumpableSimpMemDBObj.storeRecord('k2', 2);
console.log('-------- Dumpable data ------');
dumpableSimpMemDBObj.dumpAllDataFromRecord();