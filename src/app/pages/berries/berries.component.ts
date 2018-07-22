import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon/pokemon.service';


@Component({
  selector: 'app-berries',
  templateUrl: './berries.component.html',
  styleUrls: ['./berries.component.css']
})
export class BerriesComponent implements OnInit {

	berries = [];
	id :number;

  constructor(public berryService: PokemonService) { 
  	this.id = 0;
  }

  ngOnInit() {
  }

  getBerry(){
  	this.id++;
  	this.berryService.getBerry(this.id)
  	.subscribe(
  		(res)=>{
  			this.berries.push(res);
  			console.log(res);
  		}
  	)
  }

}
