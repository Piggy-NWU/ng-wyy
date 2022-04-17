import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-wy-carousel',
  templateUrl: './wy-carousel.component.html',
  styleUrls: ['./wy-carousel.component.less'],
  // 组件的变更检测策略。 angular默认一个组件发生变化的时候，会将
  // 这个组件的子组件和父组件一起检测是否发生变化。 OnPush只有
  // 在组件的输入属性发生变化，该组件才会检测。 否则其他组件的变化不会引起该组件的检测。有利于提高性能。
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WyCarouselComponent implements OnInit {
  @Input() activeIndex = 0;
  @Output() changeSlide = new EventEmitter<string>();
  @ViewChild('dot', {static: true})
  dotRef: TemplateRef<any>;

  constructor() {
  }

  ngOnInit() {
  }

  onChangeSlide(type: string) {
    this.changeSlide.emit(type);
  }

}
