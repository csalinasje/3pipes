import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 nombre = 'Fernando' ;
 nombre2 = 'fernando alberto herrera';
 activar: boolean;
 arreglo = [1, 2, 3, 4, 5, 6, 7];
 PI = Math.PI;

 a = 0.234;
 salario = 1234.5;

 heroe = {
   wolverine : 'Logan' ,
   clave: 'Wolverine' ,
   edad: 500 ,
   direccion: {
     calle: 'Primera',
     casa: '12'
   }
 };
 valorDePromesa = new Promise( (resolve, reject) => {
   setTimeout(() => resolve('Llegó la data'), 3500);
 });

 fecha = new Date();
 video = 'm0eSf0JrUIk';
}
