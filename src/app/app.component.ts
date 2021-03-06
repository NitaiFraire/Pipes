import { Component } from '@angular/core';
import { resolve, reject } from 'q';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  nombre = "Nitai";
  activar:boolean = true;
  arreglo = [1,2,3,4,5,6,7,8,9,10];
  PI = Math.PI;
  a:number = 0.234;
  salario = 1234.5;

  heroe = {
    nombre: 'Logan',
    clave: 'Wolverine',
    edad: 500,
    direccion:{
      calle: 'Primera',
      casa: '19'
    }
  }

  varlorDePromesa = new Promise( ( resolve, reject )=>{

    setTimeout( ()=>resolve('LLego la data'),3500);
  })

  fecha = new Date();

  nombre2 = 'javier dominGUEz rodRIguez';

  video = 'D4CsYO942yw';


}
