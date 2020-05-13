import { Component, OnInit } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { RequestService } from 'src/app/service/request.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  constructor(private requestService: RequestService) {}

  public inputPokemonName: string;
  public isLoading: boolean;
  public response: any;

ngOnInit() {
}

findButton(event) {
  this.response = undefined;
  this.isLoading = true;
  this.requestService.pokemonInf(this.inputPokemonName).subscribe((data) => {
    this.isLoading = false;
    this.response = data;
  });
}

}
