import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: [//`
  //.ng-invalid.ng-touched:not(form) {
  //  border:1px solid red;
  //}
  //`
]
})
export class TemplateComponent implements OnInit {

  usuario:Object={
    nombre:null,
    apellido:null,
    email:null,
    pais:"124",
    sexo:"Hombre",
    acepta:false
  }

  paises=[{
    codigo:"123",
    nombre:"Ecuador"
  },{
    codigo:"124",
    nombre:"Perú"
  }];

  sexos:string[] = ["Hombre","Mujer"];

  constructor() { }

  ngOnInit() {
  }
  guardar(forma:NgForm){
    console.log('ngForm',forma);
    console.log('Valor',forma.value);
    console.log('Ussuario',this.usuario);
  }

}
