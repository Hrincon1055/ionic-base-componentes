import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.page.html',
  styleUrls: ['./button.page.scss'],
})
export class ButtonPage implements OnInit {
  public faborito = false;
  constructor() {}

  ngOnInit() {}
  public onClick() {
    this.faborito = !this.faborito;
  }
}
