function createHandlers<MessageType>() {
    const subscribers : Set<(message: MessageType)=> undefined|unknown> = new Set();
    return {
        subscribe(cb: (message: MessageType) => undefined|unknown) {
            subscribers.add(cb);
            return () => {
                subscribers.delete(cb);
            }
        },

        publish(message: MessageType): void {
            for(const cb of subscribers) {
                const retVal = cb(message);
                if(retVal !== undefined) {
                    break;
                }
            }
        }
    }
}