import {performance} from 'perf_hooks';
export function timing() {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
       
      const value = descriptor.value;
      descriptor.value = async function(...args: any[]) {
        const before = performance.now();

        const out = await value.apply(this, args);

        const after = performance.now();

        console.log('timeout to exeute ', after-before)

        if((this as {__timings: unknown[]}).__timings ) {
          (this as {__timings: unknown[]}).__timings.push(
            {method: propertyKey, timetaken: after-before}
          );
        }

        return out;
       
      }
    };
  }