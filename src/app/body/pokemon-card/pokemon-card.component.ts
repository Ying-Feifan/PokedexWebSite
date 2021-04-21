import { Component, OnInit , Input , Output, EventEmitter} from '@angular/core';
import { RequestService } from 'src/app/service/request.service';
import { Observable } from "rxjs";

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent implements OnInit {

  @Input() pokemon:string;
  @Output() pokemonFound = new EventEmitter<Number>();

  constructor(private requestService: RequestService) { }
  public response: any;
  public isLoaded = false;
  public notFound =false;

  ngOnInit() {
    this.requestService.pokemonInf(this.pokemon).subscribe(
      (data) => {
        this.isLoaded =true;
        this.pokemonFound.emit(1);
        this.response = data;
      },
      (err) => {
        this.isLoaded =true;
        this.notFound = true;
        this.pokemonFound.emit(1);
        this.response = err;
      }
      );
  }

}
