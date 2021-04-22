import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  
  constructor(private http: HttpClient) { }
  
  pokemonInf(inputPokemonName: string) {
    const API = 'https://pokeapi.co/api/v2/pokemon/';
    const APIComplete = API.concat(inputPokemonName);
    return this.http.get(APIComplete);
  }

  typeInf(inputType: string) {
    const API = 'https://pokeapi.co/api/v2/type/';
    const APIComplete = API.concat(inputType);
    return this.http.get(APIComplete);
  }
}
