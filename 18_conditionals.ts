import fetch from "node-fetch";
interface PokemonResult {
    count: number,
    next?: string,
    previous?: string,
    results: {
            name: string,
            url: string
        }[]
}
// this type depends on callback
// if callback is defined, retirn void
// if callback is undefined return promise
type PokemonResultType<T> = T extends undefined ? Promise<PokemonResult> : void;

function fetchPokemonResult<T extends undefined | ((data: PokemonResult)=> void)>(url: string, callback: T):
    PokemonResultType<T>    
{
    if(callback) {
        fetch(url)
        .then(response => response.json())
        .then(callback);

        return undefined as PokemonResultType<T>;
    }else {
        return fetch(url)
        .then(response => response.json()) as PokemonResultType<T>;
    }
}

// fetchPokemonResult('https://pokeapi.co/api/v2/pokemon', (data: PokemonResult)=> {
//     data.results.forEach(pokemon => console.log(pokemon.name));
// });

// fetchPokemonResult('https://pokeapi.co/api/v2/pokemon', undefined).then(data => {
//     console.log(data)
// });

(
    async function() {
        const data = await fetchPokemonResult('https://pokeapi.co/api/v2/pokemon', undefined);
        data.results.forEach(pokemon=> console.log(pokemon.name));

        // await fetchPokemonResult('https://pokeapi.co/api/v2/pokemon', (data: PokemonResult)=> {
        //         data.results.forEach(pokemon => console.log(pokemon.name));
        //     });

           
    }
)();

// const b = 10;
// interface Animal {}
// interface Dog extends Animal{}
// type a =   Dog extends Animal ? string: number;