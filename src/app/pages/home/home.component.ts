import {Banner} from './../../services/data-types/common.types';
import {Component, OnInit} from '@angular/core';
import {HomeService} from 'src/app/services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less'],
})
export class HomeComponent implements OnInit {
  public banners: Banner[];
  constructor(private homeServe: HomeService) {
    this.homeServe.getBanners().subscribe(banners => {
      console.log(banners);
      this.banners = banners;
    });
  }

  ngOnInit() {
  }
}
