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

  public listPokemon: Array<string>;

  //auto complete
  public options: string[];

  ngOnInit() {
    this.listPokemon = this.suggestionService.startSuggestion();
  }

  keyDown($event) {
    this.options = this.suggestionService.searchForPokemonName($event,true);
  }

  findButton($event) {
    if (this.inputPokemonName) {
      let newListPokemon = this.suggestionService.searchForPokemonName(this.inputPokemonName,false);
      if(newListPokemon.length == 0){
        this.openSnackBar('Not Found Any Pokemon','ok');
      } else if (JSON.stringify(this.listPokemon) == JSON.stringify(newListPokemon)){
        this.openSnackBar('Same Result','ok');
      } else { 
        this.listPokemon = newListPokemon;
      }
    }
  }


  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 3000,
    });
  }
}
