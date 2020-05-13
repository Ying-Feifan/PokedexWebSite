import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  private API = 'https://courses.cs.washington.edu/courses/cse154/webservices/pokedex/pokedex.php?pokemon=';

  constructor(private http: HttpClient) { }

  pokemonInf(inputPokemonName) {
    const APIComplet = this.API.concat(inputPokemonName);
    return this.http.get(APIComplet);
  }
}
