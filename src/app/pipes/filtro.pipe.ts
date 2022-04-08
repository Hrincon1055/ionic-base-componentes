import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro',
})
export class FiltroPipe implements PipeTransform {
  transform(
    arreglo: any[],
    texto: string = '',
    columna: string = 'title'
  ): any[] {
    console.log('filtro.pipe LINE 8 =>', arreglo);
    if (texto === '') {
      return arreglo;
    }
    if (!arreglo) {
      return arreglo;
    }
    texto = texto.toLowerCase();
    return arreglo.filter((item) =>
      item[columna].toLowerCase().includes(texto)
    );
  }
}
