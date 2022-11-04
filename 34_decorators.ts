import {timing} from './34_1_function_timing_decorator';
import {timings} from './34_2_class_decorator';

function delay<T>(timeout: number, data: T): Promise<T> {
    return new Promise((resolve)=> {
        setTimeout(() => resolve(data), timeout);
    });
}
@timings
class Users {
    @timing()
    async getUsers() {
        return await delay(1000, []);
    }
    @timing()
    async getUser(id: number) {
        return await delay(2000, {id: `userID${id}`});
    }
}

(async function() {
    const user : Users = new Users();
    console.log( await user.getUser(12));
    console.log(await  user.getUsers());
   
    console.log('TImings of all exeuctions');
     // @ts-ignore
    console.log(user.__timings);
})();
