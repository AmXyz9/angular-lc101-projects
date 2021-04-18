import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'My Beautiful Images';
  image1 = 'https://www.researchgate.net/publication/322995804/figure/fig1/AS:591562274791424@1518050845710/Yangzi-cave-Guangxi-China-The-cave-entrance-is-approximately-70-m-wide-15-m-high-and.png';
  image2 = 'https://www.kastaniacave.gr/wp-content/uploads/2020/07/KastaniaCave-47.jpg';
  image3 = 'https://www.kastaniacave.gr/wp-content/uploads/2020/07/KastaniaCave-32.jpg';

  constructor() { }

  ngOnInit() {
  }

}