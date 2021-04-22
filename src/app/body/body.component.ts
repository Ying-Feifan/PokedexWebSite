import { Component, OnInit } from "@angular/core";
import { SuggestionService } from "../service/suggestion.service";
import { MatSnackBar } from '@angular/material/snack-bar';
import { RequestService } from "../service/request.service";


@Component({
  selector: "app-body",
  templateUrl: "./body.component.html",
  styleUrls: ["./body.component.css"],
})
export class BodyComponent implements OnInit {
  constructor(private requestService: RequestService,
    private suggestionService: SuggestionService,
    private _snackBar: MatSnackBar) { }

  public inputPokemonName = '';

  public listPokemon: Array<string>;

  //auto complete
  public options: string[];
  public typeOptions: string[];
  public selectedType: string;

  ngOnInit() {
    this.listPokemon = this.suggestionService.startSuggestion();
    this.typeOptions = ['All', ...this.suggestionService.getTypes()];
  }

  keyDown($event) {
    this.options = this.suggestionService.searchPokemonByName($event, ['all'])
      .map(p => (p[0].toUpperCase() + p.substr(1).toLocaleLowerCase()));;
  }

  findButton() {
    let newListPokemon;
    if (this.selectedType && this.selectedType != 'All') {
      this.requestService.typeInf(this.selectedType).subscribe(
        (data: any) => {
          newListPokemon = this.suggestionService.searchPokemonByType(data.pokemon);
          newListPokemon = this.inputPokemonName ? this.suggestionService.searchPokemonByName(this.inputPokemonName, newListPokemon) : newListPokemon;
          this.checkSearchResult(newListPokemon);
        });
    } else if (this.selectedType && this.selectedType == 'All') {
      newListPokemon = this.inputPokemonName ? this.suggestionService.searchPokemonByName(this.inputPokemonName, ['all']) : this.suggestionService.getAllPokemon();
      this.checkSearchResult(newListPokemon);

    } else {
      newListPokemon = this.inputPokemonName ? this.suggestionService.searchPokemonByName(this.inputPokemonName, ['all']) : [];

      this.checkSearchResult(newListPokemon);
    }
  }

  checkSearchResult(newListPokemon) {
    if (newListPokemon.length == 0) {
      this.openSnackBar('No Pokemon Found', 'ok');
    } else if (JSON.stringify(this.listPokemon) == JSON.stringify(newListPokemon)) {
      this.openSnackBar('Same Result', 'ok');
    } else {
      this.listPokemon = newListPokemon
    }
  }


  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 3000,
    });
  }
}
