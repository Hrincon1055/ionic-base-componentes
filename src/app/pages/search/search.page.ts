import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  public albunes: any[] = [];
  public textoBuscar?: string = '';
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getAlbums().subscribe((items: any) => {
      this.albunes = items;
      console.log(this.albunes);
    });
  }
  public onSearchChange(event: any) {
    console.log('search.page LINE 13 =>', event);
    this.textoBuscar = event.detail.value;
  }
}
