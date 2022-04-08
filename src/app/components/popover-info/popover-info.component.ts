import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popover-info',
  templateUrl: './popover-info.component.html',
  styleUrls: ['./popover-info.component.scss'],
})
export class PopoverInfoComponent implements OnInit {
  public items = Array(7);
  constructor(public popoverController: PopoverController) {}

  ngOnInit() {}
  public onClick(valor: number) {
    console.log('popover-info.component LINE 14 =>', valor);
    this.popoverController.dismiss({
      item: valor,
    });
  }
}
