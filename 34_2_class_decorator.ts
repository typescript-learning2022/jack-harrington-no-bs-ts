export function timings<T extends new (...args:any[])=> {}>(constructor: T) {
    return class extends constructor {
        __timings = [];
    }
}