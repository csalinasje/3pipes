import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasenia'
})
export class ContraseniaPipe implements PipeTransform {

  transform(value: string, activar: boolean= true, args: any): string {
    let salida = '';
    if ( activar) {
      // tslint:disable-next-line:forin
     for (let i of value ) {
         salida += '*' ;
   }
 } else {
    salida = value;
 }
    return salida;
  }

}
