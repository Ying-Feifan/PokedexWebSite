import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class SuggestionService {

  constructor() { }
  private Pokemon = new Array("bulbasaur", "ivysaur", "venusaur", "charmander", "charmeleon", "charizard", "squirtle", "wartortle", "blastoise", "caterpie", "metapod", "butterfree", "weedle", "kakuna", "beedrill", "pidgey", "pidgeotto", "pidgeot", "rattata", "raticate", "spearow", "fearow", "ekans", "arbok", "pikachu", "raichu", "sandshrew", "sandslash", "nidoran-f", "nidorina", "nidoqueen", "nidoran-m", "nidorino", "nidoking", "clefairy", "clefable", "vulpix", "ninetales", "jigglypuff", "wigglytuff", "zubat", "golbat", "oddish", "gloom", "vileplume", "paras", "parasect", "venonat", "venomoth", "diglett", "dugtrio", "meowth", "persian", "psyduck", "golduck", "mankey", "primeape", "growlithe", "arcanine", "poliwag", "poliwhirl", "poliwrath", "abra", "kadabra", "alakazam", "machop", "machoke", "machamp", "bellsprout", "weepinbell", "victreebel", "tentacool", "tentacruel", "geodude", "graveler", "golem", "ponyta", "rapidash", "slowpoke", "slowbro", "magnemite", "magneton", "farfetchd", "doduo", "dodrio", "seel", "dewgong", "grimer", "muk", "shellder", "cloyster", "gastly", "haunter", "gengar", "onix", "drowzee", "hypno", "krabby", "kingler", "voltorb", "electrode", "exeggcute", "exeggutor", "cubone", "marowak", "hitmonlee", "hitmonchan", "lickitung", "koffing", "weezing", "rhyhorn", "rhydon", "chansey", "tangela", "kangaskhan", "horsea", "seadra", "goldeen", "seaking", "staryu", "starmie", "mr-mime", "scyther", "jynx", "electabuzz", "magmar", "pinsir", "tauros", "magikarp", "gyarados", "lapras", "ditto", "eevee", "vaporeon", "jolteon", "flareon", "porygon", "omanyte", "omastar", "kabuto", "kabutops", "aerodactyl", "snorlax", "articuno", "zapdos", "moltres", "dratini", "dragonair", "dragonite", "mewtwo", "mew");
  private Type = new Array("normal", "flying", "fighting", "fire", "water", "electric", "grass", "bug", "poison", "dark", "psychic", "ghost", "ground", "rock", "steel", "ice", "dragon", "fairy");


  searchPokemonByName(inputValue: string, list: Array<string>) {
    if (inputValue) {
      if (list[0] == 'all') list = this.Pokemon;
      inputValue = inputValue.toLowerCase();
      let foundPokemons = list.filter(p => p.includes(inputValue));
      return foundPokemons;
    } else {
      return [];
    }
  }

  searchPokemonByType(data: Array<any>) {
    let result = [];
    let found = [];
    let list = this.Pokemon;
    found = data.filter(p => list.includes(p.pokemon.name));
    result = found.map(p => p.pokemon.name);
    return result;
  }

  getTypes() {
    return this.Type;
  }
  getAllPokemon() {
    return this.Pokemon;
  }

  startSuggestion() {
    let list = this.Pokemon;
    let startList = []
    for (let i = 0; i < 8; i++) {
      let index = Math.floor((Math.random() * 150));
      startList.push(list[index]);
    }
    return startList;
  }


}
