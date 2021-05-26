import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Empleado } from '../modelos/empleado';

@Injectable({
  providedIn: 'root'
})

export class EmpleadoService {

  URL_API = 'http://localhost:3000/empleados';

  empleados : Empleado[] = [];

  constructor(private http: HttpClient) { }

  obtenerEmpleados(){

    return this.http.get<Empleado[]>(this.URL_API);

  }

}
