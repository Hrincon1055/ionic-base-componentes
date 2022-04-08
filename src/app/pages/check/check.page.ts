import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check',
  templateUrl: './check.page.html',
  styleUrls: ['./check.page.scss'],
})
export class CheckPage implements OnInit {
  public data: any[] = [
    {
      name: 'primary',
      selected: false,
    },
    {
      name: 'secondary',
      selected: true,
    },
    {
      name: 'tertiary',
      selected: false,
    },
    {
      name: 'success',
      selected: true,
    },
  ];
  constructor() {}

  ngOnInit() {}
  public onClick(item: any) {
    console.log('check.page LINE 31 =>', item);
  }
  public verData() {
    console.log(this.data);
  }
}
