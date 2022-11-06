import { iterateResults } from "./41_iterator_dp";
(
    async function() {
        for await(const res of iterateResults('https://pokeapi.co/api/v2/pokemon')) {
            
            console.log(res);
        }
    }
)();
