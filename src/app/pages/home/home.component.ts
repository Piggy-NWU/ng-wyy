import {Banner} from './../../services/data-types/common.types';
import {Component, OnInit, ViewChild} from '@angular/core';
import {HomeService} from 'src/app/services/home.service';
import {NzCarouselComponent} from 'ng-zorro-antd';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less'],
})
export class HomeComponent implements OnInit {
  carouselActiveIndex = 0;
  public banners: Banner[];

  @ViewChild(NzCarouselComponent, {static: true}) private nzCarousel: NzCarouselComponent;
  constructor(private homeServe: HomeService) {
    this.homeServe.getBanners().subscribe(banners => {
      console.log(banners);
      this.banners = banners;
    });
  }

  onbeforeChange({to}) {
    this.carouselActiveIndex = to;
  }

  ngOnInit() {
  }

  onChangeSlide(type: string) {
    // 我靠，angular还可以这么写啊
    this.nzCarousel[type]();
  }
}
