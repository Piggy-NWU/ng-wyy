import {Component, Input, OnInit, TemplateRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-wy-carousel',
  templateUrl: './wy-carousel.component.html',
  styleUrls: ['./wy-carousel.component.less']
})
export class WyCarouselComponent implements OnInit {
  @Input() activeIndex = 0;
  @ViewChild('dot', {static: true})
  dotRef: TemplateRef<any>;

  constructor() {
  }

  ngOnInit() {
  }

}
