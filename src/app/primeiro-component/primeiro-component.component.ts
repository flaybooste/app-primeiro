import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-primeiro-component',
  templateUrl: './primeiro-component.component.html',
  styleUrls: ['./primeiro-component.component.css']
})
export class PrimeiroComponentComponent implements OnInit {
  //filmes: string[] = ["Duro de matar", "Os Vingadores", "Lindo de morrer"];
  constructor() { }

	alerta(texto){
		fetch(`https://viacep.com.br/ws/${texto}/json/`).then(req => req.json()).then(res => document.getElementById("p1").innerHTML = "Logradouro--> " + res["logradouro"] + "<br>Cidade--> " + res['localidade'] + "<br>UF--> " + res['uf'] + "<br>IBGE--> " + res['ibge']);
	}
	
  ngOnInit() {
  }

}
