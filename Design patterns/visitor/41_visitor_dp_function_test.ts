import {visitAllPages} from './41_visitor_dp_fucntion';

interface PokemonResults {
    name: string;
    url: string;
}

const callback = (results: PokemonResults[])=> console.log(`Received Data `, results);
(async function() {
    await visitAllPages<PokemonResults[]>('https://pokeapi.co/api/v2/pokemon', callback);
})();