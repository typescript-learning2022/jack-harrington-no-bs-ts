export class Subscribable<MessageType> {
    private subscribers : Set<(message: MessageType) => void> = new Set();

    subscribe(cb: (message: MessageType) => void) : () => void{
        this.subscribers.add(cb);
        console.log(`All subscribers `, this.subscribers);
        return () => this.subscribers.delete(cb);
    }

    

    publish(message: MessageType) {
        this.subscribers.forEach(subscriber => subscriber(message));
    }
}