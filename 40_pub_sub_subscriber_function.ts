export function createSubscribable<MessageType>()  {
    const subscribers : Set<(message: MessageType) => void> = new Set();

    return {
        subscribe(cb: (message: MessageType) => void) : () => void{
            subscribers.add(cb);
            console.log(`All subscribers `, subscribers);
            return () => subscribers.delete(cb);
        },
        publish(message: MessageType) {
            subscribers.forEach(subscriber => subscriber(message));
        }
    }
}