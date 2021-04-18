import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {

  favLinks = ['https://duckduckgo.com/','https://en.wikipedia.org/wiki/Boo_Boo_(dog)','https://www.wikihow.com/Take-Action-to-Stop-War'];

  constructor() { }

  ngOnInit() {
  }

}
