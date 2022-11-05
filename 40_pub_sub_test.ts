import { Subscribable } from "./40_pub_sub";

const subscribable = new Subscribable<string>();
const subscriber1 = (str: string)=> {console.log(`subscriber 1`, str)};
const subscriber2 = (str: string)=> {console.log(`subscriber 2`, str)};

const unsubcribe1 = subscribable.subscribe(subscriber1);
subscribable.publish("Hello Pub Sub Pattern --> 1 !");
unsubcribe1();

subscribable.subscribe(subscriber2);
subscribable.publish("Hello Pub Sub Pattern  -> 2!");
