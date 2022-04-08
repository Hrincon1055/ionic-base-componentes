import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.page.html',
  styleUrls: ['./input.page.scss'],
})
export class InputPage implements OnInit {
  // eslint-disable-next-line @typescript-eslint/no-inferrable-types
  public nombre: string = 'Henry';
  public usuario = {
    email: '',
    password: '',
  };
  constructor() {}

  ngOnInit() {}
  public onSubmit(formulario: NgForm) {
    console.log(this.usuario);
    console.log(formulario);
  }
}
