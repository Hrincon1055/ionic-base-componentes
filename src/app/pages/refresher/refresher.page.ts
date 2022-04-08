import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-refresher',
  templateUrl: './refresher.page.html',
  styleUrls: ['./refresher.page.scss'],
})
export class RefresherPage implements OnInit {
  public items: any[] = [];
  constructor() {}

  ngOnInit() {}
  public doRefresh(event: any) {
    setTimeout(() => {
      this.items = Array(20);
      event.target.complete();
    }, 1500);
  }
}
