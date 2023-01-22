import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  persona:any = [
    {
      nombre : "Luis",
      apellido: "Llanos",
      carrera:"Ing. Sistemas"
    },
    {
      nombre : "Jose",
      apellido: "Pérez",
      carrera:"Ing. Redes"
    },
    {
      nombre : "Pepe",
      apellido: "López",
      carrera:"Ing. Electrónico"
    }
  ]

  agregarPersona(){
    this.persona.push(this.persona)
  }
  eliminarPersona(){
    this.persona.pop(this.persona)
  }
}
