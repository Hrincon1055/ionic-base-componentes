import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.page.html',
  styleUrls: ['./progress.page.scss'],
})
export class ProgressPage implements OnInit {
  public porcentaje?: number = 0.05;
  constructor() {}

  ngOnInit() {}
  public rangeChage(event: any) {
    this.porcentaje = event.detail.value / 100;
  }
}
