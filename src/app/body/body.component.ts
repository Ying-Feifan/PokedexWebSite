import { Component, OnInit } from "@angular/core";
import { SuggestionService } from "../service/suggestion.service";
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: "app-body",
  templateUrl: "./body.component.html",
  styleUrls: ["./body.component.css"],
})
export class BodyComponent implements OnInit {
  constructor(private suggestionService: SuggestionService,private _snackBar: MatSnackBar) { }

  public inputPokemonName: string;
  public isLoading: boolean;
  public isWorking: boolean;
  public listPokemon: Array<string>;
  public listPokemonCount = 0;

  //auto complete
  public options: string[];

  ngOnInit() {
  }

  keyDown($event) {
    this.options = this.suggestionService.searchForPokemonName($event,true);
  }

  findButton($event) {
    if (this.inputPokemonName) {
      let newListPokemon = this.suggestionService.searchForPokemonName(this.inputPokemonName,false);
      console.log(newListPokemon, this.listPokemon);
      if(newListPokemon.length == 0){
        this.openSnackBar('Not Found Any Pokemon','ok');
      } else if (JSON.stringify(this.listPokemon) == JSON.stringify(newListPokemon)){
        this.openSnackBar('Same Result','ok');
      } else { 
        this.isLoading = true; 
        this.listPokemon = newListPokemon;
        this.listPokemonCount = 0; 
      }
    }
  }

  pokemonFound($event) {
    console.log(this.listPokemonCount, this.listPokemon.length)
    this.listPokemonCount += $event
    if (this.listPokemonCount == this.listPokemon.length) {
      this.isLoading = false;
      this.listPokemonCount = 0; 
    }

  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 3000,
    });
  }
}
