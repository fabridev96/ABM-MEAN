import { Component, OnInit } from '@angular/core';
import {EmpleadoService} from '../../servicios/empleado.service';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})

export class EmpleadoComponent implements OnInit {

  constructor(public empleadoService: EmpleadoService) { }

  ngOnInit(): void { 

    this.obtenerEmpleados();

  }

  obtenerEmpleados(){

    this.empleadoService.obtenerEmpleados().subscribe(
      res => {
        
        this.empleadoService.empleados = res;

      },
      err => console.log(err)
    );

  }

}
