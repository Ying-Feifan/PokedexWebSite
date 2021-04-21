import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  private API = 'https://pokeapi.co/api/v2/pokemon/';

  constructor(private http: HttpClient) { }

  pokemonInf(inputPokemonName) {
    const APIComplete = this.API.concat(inputPokemonName);
    return this.http.get(APIComplete);
  }
}
