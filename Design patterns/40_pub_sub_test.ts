import { Subscribable } from "./40_pub_sub_subscriber_class";
import { createSubscribable } from "./40_pub_sub_subscriber_function";

const subscribable = new Subscribable<string>();
const subscriber1 = (str: string)=> {console.log(`subscriber 1`, str)};
const subscriber2 = (str: string)=> {console.log(`subscriber 2`, str)};

const unsubcribe1 = subscribable.subscribe(subscriber1);
subscribable.publish("Hello Pub Sub Pattern --> 1 !");
unsubcribe1();

subscribable.subscribe(subscriber2);
subscribable.publish("Hello Pub Sub Pattern  -> 2!");


/** Data class */
export class DataClass extends Subscribable<number> {
    constructor(private value: number) {
        super();
    }
    
    setValue(value: number) {
        this.value = value;
        this.publish(value);
    }
}

const dc : DataClass = new DataClass(0);
dc.subscribe((v: number) => console.log(`DC1 `, v));
dc.subscribe((v: number) => console.log(`DC2 `, v));
dc.setValue(90010);



/** Test subscribable function */
const subscribableObj = createSubscribable<string>();
const unsub1 = subscribableObj.subscribe(subscriber1);
subscribableObj.subscribe(subscriber2);

subscribableObj.publish('Subscribable Function --> 1');
unsub1();

subscribableObj.publish('Subscribable Function --> 2');