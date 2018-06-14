import { combineReducers } from 'redux';
import { pokemonList, apiLoaded, pokemonDetails } from "./pokemonListReducer";

export const rootReducer = combineReducers({
  pokemonList, 
  apiLoaded,
  pokemonDetails
})