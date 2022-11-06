export class Producto {
    _id?: number;
    nombre: string;
    categoria: string;
    ubicación: string;
    precio: number;

   constructor(nombre: string, categoria: string, ubicación: string, precio: number ) {
      this.nombre = nombre;
      this.categoria = categoria;
      this.ubicación = ubicación;
      this.precio = precio;

   }

}