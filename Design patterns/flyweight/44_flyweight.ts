import fetch from 'node-fetch';

export interface Pokemon {
    species: Species
  }

export interface Species {
    name: string
    url: string
  }

export interface Pokemons {
    count: number
    next: string
    previous: any
    results: PokemonResult[]
  }
  
  export interface PokemonResult {
    name: string
    url: string
  }
  
function makeFlyweight<ReturnType>(urls: Record<string, string>) {
    let records: Record<string, Promise<ReturnType>> = {};

    return new Proxy(records, {
        get: (target, name: string) => {
            console.log(`Fetchign ${name} ${urls[name]}`);
            if(!target[name]) {
                target[name] = fetch(urls[name]).then(res => res.json());
            }
            return target[name];
            
        }
    })
}

(
    async () => {
        let pokemonResults : PokemonResult[];

        await fetch('https://pokeapi.co/api/v2/pokemon')
        .then(async (response) => {
            pokemonResults = (await response.json() as Pokemons).results;
            
            const pokeAndUrls : Record<string, string> = pokemonResults.reduce((pv, cv)=> {
                return {
                    ...pv,
                    [cv.name]: cv.url
                }
            }, {});

            const proxy = makeFlyweight<Pokemon>(pokeAndUrls);
            const bulbasaur = await proxy.bulbasaur;
            console.log(bulbasaur.species);
        })
    }
)();