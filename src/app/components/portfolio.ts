export class Portfolio {
  id: number;
  imagen: string;
  nombre: string;
  titulo: string;
  skills: string;
  proyectos: string;

  constructor(
    nombre: string,
    titulo: string,
    skills: string,
    proyectos: string
  ) {
    this.nombre= nombre;
    this.proyectos= proyectos;
    this.skills=skills;
    this.titulo=titulo;
  }
}
