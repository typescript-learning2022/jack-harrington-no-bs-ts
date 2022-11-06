import {VisitAllPages} from './41_visitor_dp_class';

interface PokemonResults {
    name: string;
    url: string;
}

const visitor = new VisitAllPages<PokemonResults[]>('https://pokeapi.co/api/v2/pokemon');
visitor.visit((results: PokemonResults[])=> console.log(`Received Data `, results));