import { Component, OnInit } from '@angular/core';
import { Tarea } from 'src/app/models/Tarea';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {
  listTareas: Tarea[] = [];
  nombreTarea = "";

  constructor() { }

  ngOnInit(): void {
  }

  agregarTareas(){
    // Crear un objeto tarea


    // Agregar el objeto Tarea al array


    // Resetear el formulario

    
  }
}