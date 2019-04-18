import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';


@Component({
  selector: 'app-primeiro-component',
  templateUrl: './primeiro-component.component.html',
  styleUrls: ['./primeiro-component.component.css']
})
export class PrimeiroComponentComponent implements OnInit {
  //filmes: string[] = ["Duro de matar", "Os Vingadores", "Lindo de morrer"];
  constructor(public dialog: MatDialog) { }

  openDialog() {
    const dialogRef = this.dialog.open(PrimeiroComponentComponent, {
      height: '350px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
	alerta(texto){
		fetch(`https://viacep.com.br/ws/${texto}/json/`).then(req => req.json()).then(res => document.getElementById("p1").innerHTML = "Logradouro--> " + res["logradouro"] + "<br>Cidade--> " + res['localidade'] + "<br>UF--> " + res['uf'] + "<br>IBGE--> " + res['ibge']);
	}

  ngOnInit() {
  }

}
